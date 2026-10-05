'use client';

import React, { useEffect, useState } from 'react';
import { RoleSwitcher } from '@/client/components/common/RoleSwitcher';
import { VoiceCompanionOrb } from '@/client/components/senior/VoiceCompanionOrb';
import { MedicationCardList } from '@/client/components/senior/MedicationCardList';
import { EmergencySosButton } from '@/client/components/senior/EmergencySosButton';
import { ScamShieldModal } from '@/client/components/senior/ScamShieldModal';
import { PeaceOfMindHeader } from '@/client/components/family/PeaceOfMindHeader';
import { ActivityTimeline } from '@/client/components/family/ActivityTimeline';
import { MedicationManager } from '@/client/components/family/MedicationManager';
import { Soc2AuditViewer } from '@/client/components/family/Soc2AuditViewer';
import { fetchFamilySummary } from '@/client/services/apiClient';
import { FamilySummary } from '@/types/care';
import { Clock, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  const [currentMode, setCurrentMode] = useState<'senior' | 'family'>('senior');
  const [summary, setSummary] = useState<FamilySummary | null>(null);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  const loadData = async () => {
    try {
      const data = await fetchFamilySummary();
      setSummary(data);
    } catch (e) {
      console.error('Failed to load care data:', e);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 4000); // 4s real-time poll

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-sans">
      {/* Universal Role Switcher & SOC 2 Status Header */}
      <RoleSwitcher
        currentMode={currentMode}
        onModeChange={(mode) => setCurrentMode(mode)}
        onOpenAuditLogs={() => setAuditModalOpen(true)}
      />

      {/* Main Content Area Based on Selected Persona */}
      {currentMode === 'senior' ? (
        <div className="flex-1 pb-16">
          {/* Senior Greeting Banner */}
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
            {/* 1. Voice Companion Orb */}
            <VoiceCompanionOrb onActivityLogged={loadData} />

            {/* 2. Medication Routine Cards */}
            {summary && (
              <MedicationCardList
                medications={summary.medications}
                onMedicationUpdated={loadData}
              />
            )}

            {/* 3. Scam & Fraud Shield */}
            <ScamShieldModal onScanCompleted={loadData} />

            {/* 4. Emergency SOS Trigger */}
            <EmergencySosButton onSosTriggered={loadData} />
          </main>
        </div>
      ) : (
        <div className="flex-1 pb-16 bg-slate-50">
          <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
            {summary && (
              <>
                <PeaceOfMindHeader summary={summary} onRefresh={loadData} />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column: Live Activity Timeline */}
                  <ActivityTimeline activities={summary.recentActivities} />

                  {/* Right Column: Prescriptions & Schedule Manager */}
                  <MedicationManager
                    medications={summary.medications}
                    onMedicationAdded={loadData}
                  />
                </div>
              </>
            )}
          </main>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-6 text-center text-xs">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Saathi — Dedicated to dignified senior independence & family reassurance.</p>
          <div className="flex items-center gap-4 text-slate-300">
            <button
              onClick={() => setAuditModalOpen(true)}
              className="hover:text-teal-400 transition-colors"
            >
              SOC 2 Type II Audit Matrix
            </button>
            <span>•</span>
            <span>Family Care Platform</span>
          </div>
        </div>
      </footer>

      {/* SOC 2 Audit Viewer Modal */}
      <Soc2AuditViewer isOpen={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
    </div>
  );
}
