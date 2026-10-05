'use client';

import React, { useEffect, useState } from 'react';
import { ShieldCheck, Clock } from 'lucide-react';
import { FamilySummary } from '@/types/care';
import { fetchFamilySummary } from '@/client/services/apiClient';
import { VoiceCompanionOrb } from '@/client/components/senior/VoiceCompanionOrb';
import { MedicationCardList } from '@/client/components/senior/MedicationCardList';
import { EmergencySosButton } from '@/client/components/senior/EmergencySosButton';
import { ScamShieldModal } from '@/client/components/senior/ScamShieldModal';

export default function SeniorPage() {
  const [summary, setSummary] = useState<FamilySummary | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  const loadData = async () => {
    try {
      const data = await fetchFamilySummary();
      setSummary(data);
    } catch (e) {
      console.error('Failed to load senior data:', e);
    }
  };

  useEffect(() => {
    loadData();
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900 pb-16">
      {/* Senior Greeting & Status Bar */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 sm:px-8 py-6 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-100 text-sm font-semibold uppercase tracking-wider">
              <span>New Delhi, India</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {currentTime}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-1 tracking-tight">
              Good Day, Ramesh Uncle! 👋
            </h1>
            <p className="text-amber-100 text-base font-medium mt-0.5">
              Wishing you a peaceful and healthy day. Saathi is here to assist you.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-amber-600/60 border border-amber-400/40 px-4 py-2 rounded-2xl">
            <ShieldCheck className="w-5 h-5 text-amber-200" />
            <span className="text-sm font-semibold text-white">Connected with Priya</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        {/* Voice Companion Hero */}
        <VoiceCompanionOrb onActivityLogged={loadData} />

        {/* Medication Routine Cards */}
        {summary && (
          <MedicationCardList
            medications={summary.medications}
            onMedicationUpdated={loadData}
          />
        )}

        {/* Scam & Fraud Shield */}
        <ScamShieldModal onScanCompleted={loadData} />

        {/* Emergency SOS Button */}
        <EmergencySosButton onSosTriggered={loadData} />
      </main>
    </div>
  );
}
