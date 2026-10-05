'use client';

import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, AlertTriangle, CheckCircle, Volume2, X, Search, Sparkles } from 'lucide-react';
import { ScamReport } from '@/types/scam';
import { postAnalyzeScam } from '@/client/services/apiClient';
import { useSpeech } from '@/client/hooks/useSpeech';

interface ScamShieldModalProps {
  onScanCompleted?: () => void;
}

export function ScamShieldModal({ onScanCompleted }: ScamShieldModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<ScamReport | null>(null);

  const { speakText, isSpeaking, stopSpeaking } = useSpeech();

  const sampleScams = [
    {
      label: 'Fake Electricity Bill Cutoff SMS',
      text: 'Dear customer your electricity power will be disconnected tonight at 9:30 PM from electricity office. Please immediately call our officer at 9876543210',
    },
    {
      label: 'SBI YONO / Bank Account KYC Freeze Scam',
      text: 'Dear SBI user, your YONO account is suspended today due to missing PAN KYC. Please update immediately by clicking http://sbi-kyc-update.apk',
    },
    {
      label: 'KBC 25 Lakh Lottery Prize Forward',
      text: 'Congratulations! Your mobile number won 25 Lakhs in Kaun Banega Crorepati (KBC) lottery. WhatsApp officer Rana Pratap at 9812345678 to claim reward after paying 1200 tax.',
    },
  ];

  const handleAnalyze = async (textToScan: string) => {
    if (!textToScan.trim()) return;

    setIsLoading(true);
    setReport(null);
    try {
      const result = await postAnalyzeScam(textToScan);
      setReport(result);
      onScanCompleted?.();
    } catch (err) {
      console.error('Scam analysis failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReadAloud = () => {
    if (!report) return;
    const speechContent = `${report.titleEnglish}. ${report.explanationEnglish}. Action: ${report.recommendedActionEnglish}`;
    speakText(speechContent);
  };

  return (
    <>
      {/* Banner / Card on Senior Home Screen */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
              Scam & Fraud Shield
            </h3>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Received a suspicious WhatsApp or SMS message? Check it here before responding.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="btn-tactile bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 text-lg font-bold rounded-2xl shrink-0 w-full sm:w-auto"
        >
          <Search className="w-5 h-5 mr-2" />
          <span>Check Message</span>
        </button>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border-2 border-amber-400 shadow-2xl relative my-8">
            <button
              onClick={() => {
                setIsOpen(false);
                stopSpeaking();
              }}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-amber-500 text-white rounded-xl shadow-xs">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Suspicious Message Verification</h3>
                <p className="text-slate-500 text-sm">Paste any message below or test with pre-built scenarios</p>
              </div>
            </div>

            {/* Quick preset chips */}
            <div className="my-4">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Test Examples:</p>
              <div className="flex flex-col gap-2">
                {sampleScams.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInputText(s.text);
                      handleAnalyze(s.text);
                    }}
                    className="text-left px-3.5 py-2.5 rounded-xl border border-amber-200 bg-amber-50/60 hover:bg-amber-100/80 active:bg-amber-200 text-slate-800 text-sm font-semibold transition-colors flex items-center justify-between"
                  >
                    <span>{s.label}</span>
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Text Input Area */}
            <div className="my-4">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste suspicious WhatsApp or SMS text here..."
                rows={3}
                className="w-full p-4 border border-slate-300 rounded-2xl text-slate-800 text-base focus:ring-2 focus:ring-amber-500 focus:outline-none shadow-xs"
              />
              <button
                onClick={() => handleAnalyze(inputText)}
                disabled={!inputText.trim() || isLoading}
                className="btn-tactile w-full mt-2 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white text-lg font-bold"
              >
                {isLoading ? 'Saathi is analyzing...' : 'Analyze Message'}
              </button>
            </div>

            {/* Analysis Result */}
            {report && (
              <div className="mt-6 border-t border-slate-200 pt-5 animate-fade-in">
                {/* Verdict Headline Card */}
                <div
                  className={`p-5 rounded-2xl border-2 flex items-start gap-4 ${
                    report.verdict === 'HIGH'
                      ? 'bg-rose-50 border-rose-400 text-rose-950'
                      : report.verdict === 'MEDIUM'
                      ? 'bg-amber-50 border-amber-400 text-amber-950'
                      : 'bg-emerald-50 border-emerald-400 text-emerald-950'
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    {report.verdict === 'HIGH' ? (
                      <ShieldAlert className="w-8 h-8 text-rose-600" />
                    ) : report.verdict === 'MEDIUM' ? (
                      <AlertTriangle className="w-8 h-8 text-amber-600" />
                    ) : (
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 border">
                        {report.verdict} RISK ({report.confidenceScore}% CONFIDENCE)
                      </span>
                      <button
                        onClick={handleReadAloud}
                        className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg bg-white shadow-xs hover:bg-slate-50 text-slate-800"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                        <span>{isSpeaking ? 'Stop' : 'Read Aloud'}</span>
                      </button>
                    </div>
                    <h4 className="text-xl font-bold mt-1.5">{report.titleEnglish}</h4>
                    <p className="mt-2 text-base font-medium leading-relaxed">{report.explanationEnglish}</p>
                  </div>
                </div>

                {/* Specific Red Flags */}
                {report.redFlags.length > 0 && (
                  <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Warning Signs Detected:</p>
                    <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4 font-medium">
                      {report.redFlags.map((flag, idx) => (
                        <li key={idx}>{flag}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actionable Advice */}
                <div className="mt-3 p-4 bg-amber-500/10 border border-amber-300 rounded-xl">
                  <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">Recommended Action:</p>
                  <p className="text-base font-bold text-slate-900 mt-1">{report.recommendedActionEnglish}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
