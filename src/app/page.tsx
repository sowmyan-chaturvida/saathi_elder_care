'use client';

import React, { useEffect, useState } from 'react';
import { FamilySummary } from '@/types/care';
import { fetchFamilySummary, postResolveSos } from '@/client/services/apiClient';
import { SaathiHeader } from '@/client/components/common/SaathiHeader';
import { SaathiBottomNav } from '@/client/components/common/SaathiBottomNav';
import { FamilyPortalStitch } from '@/client/components/family/FamilyPortalStitch';
import { SeniorCompanionStitch } from '@/client/components/senior/SeniorCompanionStitch';
import { ScamShieldStitch } from '@/client/components/scam/ScamShieldStitch';
import { AuditComplianceStitch } from '@/client/components/audit/AuditComplianceStitch';
import { CareProfileModal } from '@/client/components/modals/CareProfileModal';

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState<'family' | 'senior' | 'scam' | 'audit'>('family');
  const [summary, setSummary] = useState<FamilySummary | null>(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [resolvingSos, setResolvingSos] = useState(false);

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
    return () => clearInterval(interval);
  }, []);

  const handleResolveSos = async () => {
    if (!summary?.activeSos) return;
    setResolvingSos(true);
    try {
      await postResolveSos('Priya Sharma', 'Spoke on VoIP line, Papa is safe at home.');
      await loadData();
    } catch (e) {
      console.error('Failed to resolve SOS', e);
    } finally {
      setResolvingSos(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* 1. Header (Stitch Shell with brand, live beacon & profile switcher) */}
      <SaathiHeader
        currentTab={currentTab}
        onTabChange={(tab) => setCurrentTab(tab)}
        onOpenProfile={() => setProfileModalOpen(true)}
        senior={summary?.senior}
      />

      {/* Active SOS High-Priority Banner (if triggered) */}
      {summary?.activeSos && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-error text-on-error px-4 py-2.5 shadow-lg border-b border-error-container flex items-center justify-between animate-pulse">
          <div className="flex items-center gap-2 max-w-4xl mx-auto w-full justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">warning</span>
              <span className="text-xs sm:text-sm font-headline font-bold">
                EMERGENCY SOS ACTIVE: Ramesh Papa triggered emergency button!
              </span>
            </div>
            <button
              onClick={handleResolveSos}
              disabled={resolvingSos}
              className="px-3 py-1 rounded-xl bg-surface-container-lowest text-error font-headline font-bold text-xs hover:bg-surface transition-all cursor-pointer shadow-xs"
            >
              {resolvingSos ? 'Resolving...' : 'Resolve Emergency'}
            </button>
          </div>
        </div>
      )}

      {/* 2. Main Content Area Based on Active Tab */}
      <main className="flex-1 w-full">
        {currentTab === 'family' && summary && (
          <FamilyPortalStitch
            summary={summary}
            onRefresh={loadData}
            onOpenAudit={() => setCurrentTab('audit')}
            onSwitchToSenior={() => setCurrentTab('senior')}
            onSwitchToScam={() => setCurrentTab('scam')}
          />
        )}

        {currentTab === 'senior' && summary && (
          <SeniorCompanionStitch
            summary={summary}
            onRefresh={loadData}
            onOpenScamShield={() => setCurrentTab('scam')}
          />
        )}

        {currentTab === 'scam' && (
          <ScamShieldStitch
            onScanCompleted={loadData}
            onBackToPortal={() => setCurrentTab('family')}
          />
        )}

        {currentTab === 'audit' && (
          <AuditComplianceStitch
            onBackToPortal={() => setCurrentTab('family')}
          />
        )}

        {!summary && (
          <div className="flex items-center justify-center min-h-[60vh] text-on-surface-variant text-sm">
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-primary animate-spin">
                progress_activity
              </span>
              <span>Connecting to Saathi Care Hub...</span>
            </div>
          </div>
        )}
      </main>

      {/* 3. Bottom Tab Navigation (Terra Shell) */}
      <SaathiBottomNav
        currentTab={currentTab}
        onTabChange={(tab) => setCurrentTab(tab)}
      />

      {/* 4. Care Profile Switcher & Details Modal */}
      <CareProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        senior={summary?.senior}
        onSwitchMode={(mode) => setCurrentTab(mode)}
      />
    </div>
  );
}
