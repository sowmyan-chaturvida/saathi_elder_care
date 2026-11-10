'use client';

import React from 'react';
import { useAuth } from '@/client/context/AuthContext';

interface SaathiBottomNavProps {
  currentTab: 'family' | 'senior' | 'scam' | 'audit';
  onTabChange: (tab: 'family' | 'senior' | 'scam' | 'audit') => void;
}

export function SaathiBottomNav({ currentTab, onTabChange }: SaathiBottomNavProps) {
  const { isCaregiver } = useAuth();

  return (
    <nav
      className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl border-t border-surface-container-high/80 shadow-[0_-2px_12px_rgba(25,29,25,0.04)]"
      aria-label="Bottom Navigation"
    >
      <div className="flex justify-around items-stretch h-16 px-2 max-w-lg mx-auto">
        {/* Senior Care Tab (Visible only to Senior role) */}
        {!isCaregiver && (
          <button
            onClick={() => onTabChange('senior')}
            className={`flex flex-1 flex-col items-center justify-center gap-0.5 min-w-[64px] min-h-[44px] transition-all py-1 relative group cursor-pointer ${
              currentTab === 'senior' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
            data-path="senior-companion"
          >
            <span
              className={`material-symbols-outlined text-2xl transition-transform duration-200 ${
                currentTab === 'senior' ? 'scale-110' : 'group-hover:-translate-y-0.5'
              }`}
            >
              volunteer_activism
            </span>
            <span className="text-[11px] font-semibold tracking-tight text-center">Senior Care</span>
            {currentTab === 'senior' && (
              <span className="w-1.5 h-1.5 rounded-full bg-primary absolute bottom-1 animate-pulse-dot"></span>
            )}
          </button>
        )}

        {/* Family Portal Tab (Visible only to Children/Guardians) */}
        {isCaregiver && (
          <button
            onClick={() => onTabChange('family')}
            aria-current={currentTab === 'family' ? 'page' : undefined}
            className={`flex flex-1 flex-col items-center justify-center gap-0.5 min-w-[64px] min-h-[44px] transition-all py-1 relative group cursor-pointer ${
              currentTab === 'family' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
            data-path="family-portal"
          >
            <span
              className={`material-symbols-outlined text-2xl transition-transform duration-200 ${
                currentTab === 'family' ? 'scale-110' : 'group-hover:-translate-y-0.5'
              }`}
            >
              monitor_heart
            </span>
            <span className="text-[11px] font-bold tracking-tight text-center">Family Portal</span>
            {currentTab === 'family' && (
              <span className="w-1.5 h-1.5 rounded-full bg-primary absolute bottom-1 animate-pulse-dot"></span>
            )}
          </button>
        )}

        {/* Scam Shield Tab */}
        <button
          onClick={() => onTabChange('scam')}
          className={`flex flex-1 flex-col items-center justify-center gap-0.5 min-w-[64px] min-h-[44px] transition-all py-1 relative group cursor-pointer ${
            currentTab === 'scam' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
          }`}
          data-path="scam-shield"
        >
          <span
            className={`material-symbols-outlined text-2xl transition-transform duration-200 ${
              currentTab === 'scam' ? 'scale-110' : 'group-hover:-translate-y-0.5'
            }`}
          >
            gshield
          </span>
          <span className="text-[11px] font-semibold tracking-tight text-center">Scam Shield</span>
          {currentTab === 'scam' && (
            <span className="w-1.5 h-1.5 rounded-full bg-primary absolute bottom-1 animate-pulse-dot"></span>
          )}
        </button>

        {/* Audit & Care Tab (Caregivers only) */}
        {isCaregiver && (
          <button
            onClick={() => onTabChange('audit')}
            className={`flex flex-1 flex-col items-center justify-center gap-0.5 min-w-[64px] min-h-[44px] transition-all py-1 relative group cursor-pointer ${
              currentTab === 'audit' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
            data-path="soc-2-audit-care"
          >
            <span
              className={`material-symbols-outlined text-2xl transition-transform duration-200 ${
                currentTab === 'audit' ? 'scale-110' : 'group-hover:-translate-y-0.5'
              }`}
            >
              verified_user
            </span>
            <span className="text-[11px] font-semibold tracking-tight text-center">Audit & Care</span>
            {currentTab === 'audit' && (
              <span className="w-1.5 h-1.5 rounded-full bg-primary absolute bottom-1 animate-pulse-dot"></span>
            )}
          </button>
        )}
      </div>
    </nav>
  );
}
