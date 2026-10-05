export type RiskLevel = 'HIGH' | 'MEDIUM' | 'SAFE';

export interface ScamReport {
  id: string;
  timestamp: string;
  sourceText: string;
  verdict: RiskLevel;
  confidenceScore: number; // 0 to 100
  titleHindi: string;
  titleEnglish: string;
  explanationHindi: string;
  explanationEnglish: string;
  redFlags: string[];
  recommendedActionHindi: string;
  recommendedActionEnglish: string;
  category: 'electricity_bill' | 'banking_kyc' | 'lottery_kbc' | 'apk_download' | 'digital_arrest' | 'general_phishing' | 'safe_message';
}

export interface ScamAnalysisRequest {
  text: string;
  senderInfo?: string;
}
