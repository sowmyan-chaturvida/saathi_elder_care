'use client';

import React from 'react';
import { SeniorProfile } from '@/types/care';

interface SaathiHeaderProps {
  currentTab: 'family' | 'senior' | 'scam' | 'audit';
  onTabChange: (tab: 'family' | 'senior' | 'scam' | 'audit') => void;
  onOpenProfile: () => void;
  senior?: SeniorProfile;
}

export function SaathiHeader({
  currentTab,
  onTabChange,
  onOpenProfile,
  senior,
}: SaathiHeaderProps) {
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

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl border-b border-surface-container-high/60 shadow-[0_2px_12px_rgba(25,29,25,0.03)] transition-all">
      <div className="h-20 px-4 sm:px-6 flex items-center justify-between gap-3 max-w-5xl mx-auto">
        {/* Brand & Mode Indicator */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => onTabChange('family')}
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
                {senior?.preferredName || 'Papa'} Active • {senior?.locality ? 'Janakpuri' : 'Delhi'}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Quick Nav Tabs */}
        <div className="hidden md:flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 text-xs font-semibold">
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
        </div>

        {/* Profile Avatar Button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onOpenProfile}
            aria-label="Care Profile Switcher"
            className="relative p-0.5 rounded-full ring-2 ring-primary/20 hover:ring-primary/50 transition-all hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
            title="View Caregiver & Senior Profile"
          >
            <img
              alt="Priya Sharma"
              className="w-10 h-10 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW085qJ3na6gbyskBvjQAW_MEINbKgEUPK76FRqtyru509luuXv-8JcvDU0U67Qp4E8m5cVAfJOEJnY0HWZwybDkGVS6SpO3wb27j25Y98krcuukay3SvZM-3MxsIynmt7ADS47bPIHrGsyitXNbYGUCyhnRha2Po_cyJFJGB2VzQ3A96C0NNrpsxfXKTRFEhcK6WbQodLaAZaUvRTHcf_0Blo3F_yzxT221fxixgrLN6Vsn8DvCY"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-surface animate-pulse-dot"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
