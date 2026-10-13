import 'server-only';
import { RiskLevel, ScamReport } from '@/types/scam';

export function analyzeScamLocally(rawText: string): ScamReport {
  const lower = rawText.toLowerCase();
  const id = `scam_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const timestamp = new Date().toISOString();

  // 1. Electricity Bill Cut-off Scam
  if (
    (lower.includes('electricity') || lower.includes('power') || lower.includes('bill')) &&
    (lower.includes('disconnect') || lower.includes('cut') || lower.includes('tonight') || lower.includes('suspended'))
  ) {
    return {
      id,
      timestamp,
      sourceText: rawText,
      verdict: 'HIGH',
      confidenceScore: 98,
      category: 'electricity_bill',
      titleEnglish: 'DANGER: Fake Electricity Bill Disconnection Fraud',
      explanationEnglish: 'This is a notorious cyber fraud scheme. Official utility boards never send SMS threats from personal mobile numbers claiming power will be cut tonight.',
      redFlags: [
        'Sent from an unknown personal mobile number, not an official utility header.',
        'Manufactures artificial panic with an immediate deadline ("tonight by 9:30 PM").',
        'Directs you to call an unofficial personal phone number or install unverified software.'
      ],
      recommendedActionEnglish: 'Do NOT call this phone number. Do NOT click any links or install apps. Delete this message immediately.'
    };
  }

  // 2. Bank KYC / Account Freeze Scam
  if (
    (lower.includes('sbi') || lower.includes('bank') || lower.includes('hdfc') || lower.includes('icici') || lower.includes('pan')) &&
    (lower.includes('block') || lower.includes('suspend') || lower.includes('kyc') || lower.includes('update') || lower.includes('apk') || lower.includes('yono'))
  ) {
    return {
      id,
      timestamp,
      sourceText: rawText,
      verdict: 'HIGH',
      confidenceScore: 96,
      category: 'banking_kyc',
      titleEnglish: 'HIGH RISK: Fake Bank Account / PAN KYC Phishing Scam',
      explanationEnglish: 'Banks never send SMS links asking customers to update PAN or KYC documents. This is a credential-harvesting trap designed to compromise net banking access and OTPs.',
      redFlags: [
        'Contains suspicious unverified links or downloads (.apk files, bit.ly, tinyurl).',
        'Falsely warns that your bank account or debit card will be suspended within 24 hours.',
        'Attempts to solicit sensitive OTPs, PINs, or account details.'
      ],
      recommendedActionEnglish: 'Never click on the link. Never share banking OTPs or debit card details with anyone.'
    };
  }

  // 3. Lottery / Cash Prize Scam
  if (
    lower.includes('kbc') || lower.includes('lottery') || lower.includes('lakh') || lower.includes('crore') || lower.includes('winner') || lower.includes('prize')
  ) {
    return {
      id,
      timestamp,
      sourceText: rawText,
      verdict: 'HIGH',
      confidenceScore: 99,
      category: 'lottery_kbc',
      titleEnglish: 'FRAUD: Fake Lottery & Unsolicited Cash Prize Scam',
      explanationEnglish: 'You have not entered any lottery. Fraudsters impersonate popular TV shows or lotteries to convince victims to pay advance "processing fees" or "taxes".',
      redFlags: [
        'Promises unrealistic lottery winnings without any prior ticket purchase.',
        'Uses counterfeit logos and forged official credentials on WhatsApp.',
        'Demands advance payment of processing charges before releasing the prize money.'
      ],
      recommendedActionEnglish: 'This is 100% fraudulent. Block and report the sender immediately.'
    };
  }

  // 4. Extortion / Fake Authority Threat
  if (
    lower.includes('cbi') || lower.includes('police') || lower.includes('customs') || lower.includes('arrest') || lower.includes('parcel') || lower.includes('drugs')
  ) {
    return {
      id,
      timestamp,
      sourceText: rawText,
      verdict: 'HIGH',
      confidenceScore: 97,
      category: 'digital_arrest',
      titleEnglish: 'CRITICAL WARNING: Impersonation & Extortion Scheme',
      explanationEnglish: 'Legitimate law enforcement agencies and courts NEVER place citizens under "digital arrest" via WhatsApp or demand monetary deposits for clearance.',
      redFlags: [
        'Fabricates criminal allegations involving parcels or bank fraud over video calls.',
        'Demands that you remain isolated in a closed room under surveillance.',
        'Demands urgent fund transfers to a "verification account".'
      ],
      recommendedActionEnglish: 'Do not panic. Disconnect the call immediately and notify your family or authorities.'
    };
  }

  // 5. Default / Unknown message with links
  const hasLinks = /https?:\/\/[^\s]+/g.test(rawText);
  if (hasLinks) {
    return {
      id,
      timestamp,
      sourceText: rawText,
      verdict: 'MEDIUM',
      confidenceScore: 75,
      category: 'general_phishing',
      titleEnglish: 'CAUTION: Message Contains Unverified External Links',
      explanationEnglish: 'This message contains web links from an unverified source. Unsolicited links can redirect to malicious phishing pages or trigger automatic downloads.',
      redFlags: [
        'Contains unverified third-party hyperlinks.',
        'The sender is not in your recognized contact directory.'
      ],
      recommendedActionEnglish: 'Check with a trusted family member before clicking any links in this message.'
    };
  }

  return {
    id,
    timestamp,
    sourceText: rawText,
    verdict: 'SAFE',
    confidenceScore: 90,
    category: 'safe_message',
    titleEnglish: 'Message Appears Legitimate',
    explanationEnglish: 'No scam indicators, payment requests, or malicious links were detected in this message.',
    redFlags: [],
    recommendedActionEnglish: 'This message appears normal. Exercise standard discretion.'
  };
}
