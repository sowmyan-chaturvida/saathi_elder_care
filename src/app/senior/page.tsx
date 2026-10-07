'use client';

import React, { useEffect, useState } from 'react';
import { FamilySummary } from '@/types/care';
import { fetchFamilySummary } from '@/client/services/apiClient';
import { SaathiHeader } from '@/client/components/common/SaathiHeader';
import { SaathiBottomNav } from '@/client/components/common/SaathiBottomNav';
import { SeniorCompanionStitch } from '@/client/components/senior/SeniorCompanionStitch';
import { CareProfileModal } from '@/client/components/modals/CareProfileModal';
import { useRouter } from 'next/navigation';

export default function SeniorPage() {
  const router = useRouter();
  const [summary, setSummary] = useState<FamilySummary | null>(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

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
    const interval = setInterval(loadData, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col antialiased">
      <SaathiHeader
        currentTab="senior"
        onTabChange={(tab) => {
          if (tab === 'senior') return;
          if (tab === 'family') router.push('/family');
          else router.push(`/?tab=${tab}`);
        }}
        onOpenProfile={() => setProfileModalOpen(true)}
        senior={summary?.senior}
      />

      <main className="flex-1 w-full">
        {summary ? (
          <SeniorCompanionStitch
            summary={summary}
            onRefresh={loadData}
            onOpenScamShield={() => router.push('/?tab=scam')}
          />
        ) : (
          <div className="flex items-center justify-center min-h-[60vh] text-on-surface-variant text-sm">
            <span className="material-symbols-outlined text-3xl text-primary animate-spin mr-2">
              progress_activity
            </span>
            Loading Senior Companion Hub...
          </div>
        )}
      </main>

      <SaathiBottomNav
        currentTab="senior"
        onTabChange={(tab) => {
          if (tab === 'senior') return;
          if (tab === 'family') router.push('/family');
          else router.push(`/?tab=${tab}`);
        }}
      />

      <CareProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        senior={summary?.senior}
        onSwitchMode={(mode) => {
          if (mode === 'family') router.push('/family');
        }}
      />
    </div>
  );
}
