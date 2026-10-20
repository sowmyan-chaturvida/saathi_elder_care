'use client';

import React, { useEffect, useState } from 'react';
import { FamilySummary } from '@/types/care';
import { fetchFamilySummary } from '@/client/services/apiClient';
import { SaathiHeader } from '@/client/components/common/SaathiHeader';
import { SaathiBottomNav } from '@/client/components/common/SaathiBottomNav';
import { FamilyPortalStitch } from '@/client/components/family/FamilyPortalStitch';
import { CareProfileModal } from '@/client/components/modals/CareProfileModal';
import { useAuth } from '@/client/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function FamilyPage() {
  const router = useRouter();
  const { user, isCaregiver, isSenior, loading: authLoading } = useAuth();
  const [summary, setSummary] = useState<FamilySummary | null>(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        router.push('/login?returnUrl=/family');
      } else if (isSenior) {
        router.push('/senior?error=family_portal_restricted');
      }
    }
  }, [authLoading, user, isSenior, router]);

  const loadData = async () => {
    try {
      const data = await fetchFamilySummary();
      setSummary(data);
    } catch (e) {
      console.error('Failed to load family data:', e);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (authLoading || (user && isSenior)) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center text-on-surface-variant text-sm">
        <span className="material-symbols-outlined text-3xl text-primary animate-spin mr-2">
          progress_activity
        </span>
        Verifying Guardian Security Permissions...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col antialiased">
      <SaathiHeader
        currentTab="family"
        onTabChange={(tab) => {
          if (tab === 'family') return;
          if (tab === 'senior') router.push('/senior');
          else router.push(`/?tab=${tab}`);
        }}
        onOpenProfile={() => setProfileModalOpen(true)}
        senior={summary?.senior}
        allSeniors={summary?.allSeniors}
        onParentSwitched={() => loadData()}
      />

      <main className="flex-1 w-full">
        {summary ? (
          <FamilyPortalStitch
            summary={summary}
            onRefresh={loadData}
            onOpenAudit={() => router.push('/?tab=audit')}
            onSwitchToSenior={() => router.push('/senior')}
            onSwitchToScam={() => router.push('/?tab=scam')}
          />
        ) : (
          <div className="flex items-center justify-center min-h-[60vh] text-on-surface-variant text-sm">
            <span className="material-symbols-outlined text-3xl text-primary animate-spin mr-2">
              progress_activity
            </span>
            Loading Family Portal...
          </div>
        )}
      </main>

      <SaathiBottomNav
        currentTab="family"
        onTabChange={(tab) => {
          if (tab === 'family') return;
          if (tab === 'senior') router.push('/senior');
          else router.push(`/?tab=${tab}`);
        }}
      />

      <CareProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        senior={summary?.senior}
        allSeniors={summary?.allSeniors}
        onSwitchMode={(mode) => {
          if (mode === 'senior') router.push('/senior');
        }}
        onParentSwitched={() => loadData()}
      />
    </div>
  );
}
