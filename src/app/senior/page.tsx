'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { FamilySummary } from '@/types/care';
import { fetchFamilySummary } from '@/client/services/apiClient';
import { SaathiHeader } from '@/client/components/common/SaathiHeader';
import { SaathiBottomNav } from '@/client/components/common/SaathiBottomNav';
import { SeniorCompanionStitch } from '@/client/components/senior/SeniorCompanionStitch';
import { CareProfileModal } from '@/client/components/modals/CareProfileModal';
import { useAuth } from '@/client/context/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';

function SeniorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const restrictedNotice = searchParams.get('error') === 'family_portal_restricted';

  const { user, loading: authLoading, isCaregiver } = useAuth();
  const [summary, setSummary] = useState<FamilySummary | null>(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [showRestrictedBanner, setShowRestrictedBanner] = useState(restrictedNotice);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login?returnUrl=/senior');
    }
  }, [authLoading, user, router]);

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

  if (authLoading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center text-on-surface-variant text-sm">
        <span className="material-symbols-outlined text-3xl text-primary animate-spin mr-2">
          progress_activity
        </span>
        Connecting to Senior Companion Hub...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col antialiased">
      <SaathiHeader
        currentTab="senior"
        onTabChange={(tab) => {
          if (tab === 'senior') return;
          if (tab === 'family') {
            if (isCaregiver) router.push('/family');
            else setShowRestrictedBanner(true);
          } else {
            router.push(`/?tab=${tab}`);
          }
        }}
        onOpenProfile={() => setProfileModalOpen(true)}
        senior={summary?.senior}
        allSeniors={summary?.allSeniors}
        onParentSwitched={() => loadData()}
      />

      {showRestrictedBanner && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-secondary-fixed text-on-secondary-fixed px-4 py-2 text-xs font-bold flex items-center justify-between border-b border-outline-variant/30 animate-fade-in">
          <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">info</span>
              Family Portal is restricted to children and family guardians. Welcome to your Senior Companion Hub!
            </span>
            <button
              onClick={() => setShowRestrictedBanner(false)}
              className="text-on-secondary-fixed hover:opacity-80 cursor-pointer ml-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}

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
          if (tab === 'family') {
            if (isCaregiver) router.push('/family');
            else setShowRestrictedBanner(true);
          } else {
            router.push(`/?tab=${tab}`);
          }
        }}
      />

      <CareProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        senior={summary?.senior}
        allSeniors={summary?.allSeniors}
        onSwitchMode={(mode) => {
          if (mode === 'family' && isCaregiver) router.push('/family');
        }}
        onParentSwitched={() => loadData()}
      />
    </div>
  );
}

export default function SeniorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface flex items-center justify-center text-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-3xl text-primary animate-spin mr-2">
            progress_activity
          </span>
          Connecting to Senior Companion Hub...
        </div>
      }
    >
      <SeniorContent />
    </Suspense>
  );
}
