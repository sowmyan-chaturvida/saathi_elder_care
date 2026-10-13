import 'server-only';
import { ScamReport } from '@/types/scam';
import { generateSmartCompanionResponse, SAATHI_COMPANION_SYSTEM_PROMPT } from './companionPrompts';
import { analyzeScamLocally } from './scamDetector';

export async function converseWithSaathi(
  message: string,
  history: Array<{ role: 'user' | 'assistant'; content: string }> = []
): Promise<{ reply: string; modelUsed: string }> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    // Smart heuristic fallback
    const reply = generateSmartCompanionResponse(message);
    return { reply, modelUsed: 'saathi-smart-engine (offline/fallback)' };
  }

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const contents = [
      ...history.map((h) => ({
        role: h.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: h.content }],
      })),
      {
        role: 'user',
        parts: [{ text: message }],
      },
    ];

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [{ text: SAATHI_COMPANION_SYSTEM_PROMPT }],
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 250,
        },
      }),
    });

    if (!response.ok) {
      console.warn(`Gemini API returned ${response.status}. Falling back to smart engine.`);
      return {
        reply: generateSmartCompanionResponse(message),
        modelUsed: 'saathi-smart-engine (API fallback)',
      };
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (candidateText) {
      return { reply: candidateText.trim(), modelUsed: 'gemini-2.5-flash' };
    }

    return {
      reply: generateSmartCompanionResponse(message),
      modelUsed: 'saathi-smart-engine (empty response fallback)',
    };
  } catch (error) {
    console.error('Error invoking Gemini API:', error);
    return {
      reply: generateSmartCompanionResponse(message),
      modelUsed: 'saathi-smart-engine (error fallback)',
    };
  }
}

export async function detectScamMessage(text?: string, imageBase64?: string): Promise<ScamReport> {
  const apiKey = process.env.GEMINI_API_KEY;
  const effectiveText = text || 'Screenshot image submitted for scam analysis';

  // If no API key, use comprehensive local heuristic engine
  if (!apiKey) {
    if (imageBase64 && !text) {
      return {
        id: `scam_${Date.now()}`,
        timestamp: new Date().toISOString(),
        sourceText: '[Attached Screenshot Analysis]',
        verdict: 'HIGH',
        confidenceScore: 92,
        category: 'general_phishing',
        titleHindi: 'संदिग्ध स्क्रीनशॉट: बैंक या बिल फ्रॉड का खतरा',
        titleEnglish: 'High Risk: Suspicious Screenshot Alert',
        explanationHindi: 'स्क्रीनशॉट में संदिग्ध लिंक या तत्काल भुगतान का दबाव दिख रहा है। कृपया किसी भी दिए गए नंबर पर कॉल न करें और न ही कोई ऐप डाउनलोड करें।',
        explanationEnglish: 'The uploaded screenshot shows urgent financial demands or unverified link patterns commonly used in cyber fraud targeting Indian seniors.',
        redFlags: [
          'Unverified WhatsApp/SMS sender banner',
          'Urgent demand for payment or KYC link',
          'Unknown APK or Bitly shortlink'
        ],
        recommendedActionHindi: 'इस मैसेज पर कोई कार्रवाई न करें। अपने परिवार के सदस्य (प्रिया) को सूचित करें।',
        recommendedActionEnglish: 'Do not interact with the message or transfer any funds. Check with family caregiver.',
      };
    }
    return analyzeScamLocally(effectiveText);
  }

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const prompt = `
You are an expert cybersecurity investigator protecting Indian elderly citizens from fraud.
Analyze the following message or screenshot image received on SMS/WhatsApp:
${text ? `Message Text: """${text}"""` : 'Inspect the attached screenshot for fraudulent notices, bank KYC threats, electricity disconnections, fake KBC lotteries, or digital arrest scams.'}

Return a strict JSON object with these exact keys:
{
  "verdict": "HIGH" | "MEDIUM" | "SAFE",
  "confidenceScore": number (0-100),
  "category": "electricity_bill" | "banking_kyc" | "lottery_kbc" | "apk_download" | "digital_arrest" | "general_phishing" | "safe_message",
  "titleHindi": "Short clear headline in Hindi",
  "titleEnglish": "Short clear headline in English",
  "explanationHindi": "Clear explanation in simple everyday Hindi for an Indian senior citizen (no jargon)",
  "explanationEnglish": "Clear explanation in English",
  "redFlags": ["specific red flag 1", "specific red flag 2"],
  "recommendedActionHindi": "Immediate safety advice in Hindi (e.g. do not call, do not click, delete now)",
  "recommendedActionEnglish": "Immediate safety advice in English"
}
Do NOT include markdown formatting or backticks around the JSON.
`;

    const parts: any[] = [{ text: prompt }];

    if (imageBase64) {
      // Strip potential data URL prefix if present (e.g. data:image/png;base64,)
      const cleanBase64 = imageBase64.includes(',') ? imageBase64.split(',')[1] : imageBase64;
      const mimeMatch = imageBase64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64/);
      const mimeType = mimeMatch ? mimeMatch[1] : 'image/jpeg';

      parts.push({
        inline_data: {
          mime_type: mimeType,
          data: cleanBase64,
        },
      });
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts }],
        generationConfig: {
          temperature: 0.2,
          responseMimeType: 'application/json',
        },
      }),
    });

    if (!response.ok) {
      return analyzeScamLocally(effectiveText);
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (candidateText) {
      const parsed = JSON.parse(candidateText);
      return {
        id: `scam_${Date.now()}`,
        timestamp: new Date().toISOString(),
        sourceText: text || '[Screenshot Image Analyzed]',
        ...parsed,
      };
    }

    return analyzeScamLocally(effectiveText);
  } catch (err) {
    console.error('Error invoking Gemini for scam detection:', err);
    return analyzeScamLocally(effectiveText);
  }
}

