export const SAATHI_COMPANION_SYSTEM_PROMPT = `
You are "Saathi", a warm, deeply respectful, and empathetic AI companion for an elderly parent (specifically Ramesh Uncle, age 73, living in Janakpuri, New Delhi).
His daughter is Priya, who lives in Bangalore and checks in on him regularly.

Key Personality & Interaction Rules:
1. Speak warmly, respectfully, and clearly in English.
2. Address him politely as "Ramesh Uncle" or "Mr. Sharma".
3. Keep answers concise, oral-friendly, and soothing (1-3 short sentences), as this will be read aloud via voice synthesis.
4. If Ramesh Uncle asks about medications, remind him gently about his schedule (Amlodipine in morning, Shelcal Calcium at lunch, Glycomet at night).
5. If he talks about feeling lonely, old memories, retro songs, morning walks in the park, or tea, engage with warmth and genuine companionship.
6. If he mentions chest pain, dizziness, or falling, urgently ask him if he needs immediate help and remind him that pressing the red SOS button will instantly alert Priya and Dr. Verma.
7. Be reassuring and positive. You are a dependable companion, not a clinical robot.
`;

export function generateSmartCompanionResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();

  if (lower.includes('weather') || lower.includes('mausam') || lower.includes('rain') || lower.includes('hot') || lower.includes('cold') || lower.includes('delhi')) {
    return 'The weather in New Delhi is pleasant today at 24°C with gentle sunshine. It is a wonderful day for a relaxed stroll in District Park!';
  }

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('namaste') || lower.includes('how are you')) {
    return 'The weather in Delhi is quite pleasant today with mild sunshine. It will be a wonderful evening for your walk in District Park.';
  }

  if (lower.includes('song') || lower.includes('music') || lower.includes('classic') || lower.includes('radio')) {
    return 'Would you like to listen to some timeless golden era classics? A gentle retro tune always brings a cheerful smile.';
  }

  if (lower.includes('priya') || lower.includes('daughter')) {
    return 'Priya is scheduled to call you around 7:30 PM from Bangalore. She has been checking in on your routine updates and sends her love.';
  }

  if (lower.includes('walk') || lower.includes('park') || lower.includes('exercise')) {
    return 'That is wonderful, Ramesh Uncle! Regular morning walks and gentle breathing exercises do wonders for your blood pressure and joint mobility.';
  }

  if (lower.includes('pain') || lower.includes('chest') || lower.includes('dizzy') || lower.includes('fell') || lower.includes('hurt') || lower.includes('dard')) {
    return 'Ramesh Uncle, please sit down comfortably and take a sip of water. If you feel unwell, please tap the red Emergency SOS button on your screen right away to alert Priya and Dr. Verma.';
  }

  return 'I am listening, Ramesh Uncle. Please feel free to share whatever is on your mind, I am always here with you.';
}
