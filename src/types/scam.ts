export type RiskLevel = 'HIGH' | 'MEDIUM' | 'SAFE';

export interface ScamReport {
  id: string;
  timestamp: string;
  sourceText: string;
  verdict: RiskLevel;
  confidenceScore: number; // 0 to 100
  titleEnglish: string;
  explanationEnglish: string;
  redFlags: string[];
  recommendedActionEnglish: string;
  category: 'electricity_bill' | 'banking_kyc' | 'lottery_kbc' | 'apk_download' | 'digital_arrest' | 'general_phishing' | 'safe_message';
  imageUrl?: string;
}

export interface ScamAnalysisRequest {
  text?: string;
  imageBase64?: string;
  senderInfo?: string;
}
