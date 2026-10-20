'use client';

import React, { useState } from 'react';
import { SeniorProfile } from '@/types/care';
import { useAuth } from '@/client/context/AuthContext';
import { AddParentModal } from '../modals/AddParentModal';

interface SaathiHeaderProps {
  currentTab: 'family' | 'senior' | 'scam' | 'audit';
  onTabChange: (tab: 'family' | 'senior' | 'scam' | 'audit') => void;
  onOpenProfile: () => void;
  senior?: SeniorProfile;
  allSeniors?: SeniorProfile[];
  onParentSwitched?: (senior: SeniorProfile) => void;
}

export function SaathiHeader({
  currentTab,
  onTabChange,
  onOpenProfile,
  senior,
  allSeniors = [],
  onParentSwitched,
}: SaathiHeaderProps) {
  const { user, isCaregiver, logout } = useAuth();
  const [addParentOpen, setAddParentOpen] = useState(false);
  const [switchingParent, setSwitchingParent] = useState(false);

  const getTabLabel = () => {
    switch (currentTab) {
      case 'family':
        return 'Family Portal';
      case 'senior':
        return 'Senior Hub';
      case 'scam':
        return 'Scam Shield';
      case 'audit':
        return 'Audit & Care';
    }
  };

  const handleSwitchParent = async (parentId: string) => {
    if (parentId === senior?.id || switchingParent) return;
    setSwitchingParent(true);
    try {
      const res = await fetch(`/api/v1/parents/${parentId}/switch`, { method: 'POST' });
      const data = await res.json();
      if (data.success && data.data) {
        onParentSwitched?.(data.data);
      }
    } catch (e) {
      console.error('Failed to switch parent', e);
    } finally {
      setSwitchingParent(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl border-b border-surface-container-high/60 shadow-[0_2px_12px_rgba(25,29,25,0.03)] transition-all">
        <div className="h-20 px-4 sm:px-6 flex items-center justify-between gap-3 max-w-5xl mx-auto">
          {/* Brand & Mode Indicator */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => onTabChange(isCaregiver ? 'family' : 'senior')}
              className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary border border-primary/20 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              title="Saathi Home"
            >
              <span className="material-symbols-outlined text-2xl text-primary">nest_eco_leaf</span>
            </button>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2 leading-none">
                <span className="font-headline font-bold text-xl text-primary tracking-tight">Saathi</span>
                <span className="text-xs text-outline font-medium">•</span>
                <span className="font-body text-xs font-bold text-secondary uppercase tracking-wider truncate">
                  {getTabLabel()}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot flex-shrink-0"></span>
                <span className="text-xs text-on-surface-variant font-medium truncate">
                  {senior ? `${senior.name} (${senior.relation || 'Parent'}) Active` : 'Parent Active'}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Quick Nav Tabs (Family Portal hidden for senior role) */}
          <div className="hidden md:flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 text-xs font-semibold">
            {isCaregiver && (
              <button
                onClick={() => onTabChange('family')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  currentTab === 'family'
                    ? 'bg-primary text-on-primary shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                Family Portal
              </button>
            )}

            <button
              onClick={() => onTabChange('senior')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                currentTab === 'senior'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
            >
              Senior Care
            </button>

            <button
              onClick={() => onTabChange('scam')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                currentTab === 'scam'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
            >
              Scam Shield
            </button>

            {isCaregiver && (
              <button
                onClick={() => onTabChange('audit')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  currentTab === 'audit'
                    ? 'bg-primary text-on-primary shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                SOC 2 Audit
              </button>
            )}
          </div>

          {/* Right Action Cluster: Parent Switcher, Add Parent & User Profile */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {isCaregiver && (
              <>
                {allSeniors.length > 1 && (
                  <select
                    value={senior?.id}
                    onChange={(e) => handleSwitchParent(e.target.value)}
                    disabled={switchingParent}
                    className="hidden sm:block text-xs bg-surface-container border border-outline-variant/50 rounded-xl px-2.5 py-1.5 font-bold text-on-surface focus:outline-none cursor-pointer"
                    title="Switch active parent"
                  >
                    {allSeniors.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.relation || 'Parent'}: {p.name}
                      </option>
                    ))}
                  </select>
                )}

                <button
                  onClick={() => setAddParentOpen(true)}
                  className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-primary-fixed hover:bg-primary-fixed-dim text-on-primary-fixed-variant text-xs font-bold transition-all cursor-pointer shadow-2xs"
                  title="Add another parent profile"
                >
                  <span className="material-symbols-outlined text-sm">person_add</span>
                  <span>+ Add Parent</span>
                </button>
              </>
            )}

            {/* Profile Avatar Button */}
            <button
              onClick={onOpenProfile}
              aria-label="Care Profile Switcher"
              className="relative p-0.5 rounded-full ring-2 ring-primary/20 hover:ring-primary/50 transition-all hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
              title={`${user?.name || 'User'} (${user?.role || 'Guest'}) - Click for Profile & Settings`}
            >
              <img
                alt={user?.name || 'User'}
                className="w-10 h-10 rounded-full object-cover"
                src={
                  user?.avatar ||
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuAW085qJ3na6gbyskBvjQAW_MEINbKgEUPK76FRqtyru509luuXv-8JcvDU0U67Qp4E8m5cVAfJOEJnY0HWZwybDkGVS6SpO3wb27j25Y98krcuukay3SvZM-3MxsIynmt7ADS47bPIHrGsyitXNbYGUCyhnRha2Po_cyJFJGB2VzQ3A96C0NNrpsxfXKTRFEhcK6WbQodLaAZaUvRTHcf_0Blo3F_yzxT221fxixgrLN6Vsn8DvCY'
                }
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-surface animate-pulse-dot"></span>
            </button>

            {/* Quick Logout Button */}
            <button
              onClick={() => logout()}
              title="Sign Out"
              className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-error transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Add Parent Modal */}
      <AddParentModal
        isOpen={addParentOpen}
        onClose={() => setAddParentOpen(false)}
        onParentAdded={(newP) => {
          onParentSwitched?.(newP);
        }}
      />
    </>
  );
}
