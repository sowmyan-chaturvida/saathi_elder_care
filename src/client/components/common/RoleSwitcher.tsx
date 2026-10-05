'use client';

import React from 'react';
import { ShieldCheck, HeartHandshake, Users, Radio } from 'lucide-react';

interface RoleSwitcherProps {
  currentMode: 'senior' | 'family';
  onModeChange: (mode: 'senior' | 'family') => void;
  onOpenAuditLogs?: () => void;
}

export function RoleSwitcher({ currentMode, onModeChange, onOpenAuditLogs }: RoleSwitcherProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#1E293B] text-white border-b border-slate-700 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Brand & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center font-bold text-white shadow text-lg">
            S
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-wide text-amber-400">Saathi</span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-600 font-mono">
                v1.0
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">AI Companion & Family Care Platform</p>
          </div>
        </div>

        {/* Persona Switcher Toggle */}
        <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-700">
          <button
            onClick={() => onModeChange('senior')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              currentMode === 'senior'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Senior View (Ramesh Uncle)</span>
          </button>

          <button
            onClick={() => onModeChange('family')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              currentMode === 'family'
                ? 'bg-teal-500 text-slate-950 shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Family Portal (Priya)</span>
          </button>
        </div>

        {/* Live Status & SOC 2 Badge */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-full">
            <Radio className="w-3 h-3 animate-pulse" />
            <span>Live Sync</span>
          </div>

          {onOpenAuditLogs && (
            <button
              onClick={onOpenAuditLogs}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 px-2.5 py-1 rounded-full transition-colors"
              title="Inspect SOC 2 CC7.2 Audit Trail"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>SOC 2 Logs</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
