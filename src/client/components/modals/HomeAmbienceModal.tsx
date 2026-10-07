'use client';

import React, { useState } from 'react';

interface HomeAmbienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HomeAmbienceModal({ isOpen, onClose }: HomeAmbienceModalProps) {
  const [privacyBlur, setPrivacyBlur] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-outline-variant/40 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">sensors</span>
            <div>
              <h2 className="font-headline font-bold text-lg text-on-surface">Home Ambience &amp; Telemetry</h2>
              <p className="text-[11px] text-on-surface-variant">Janakpuri B-Block Hub • Hardware Node DEL-8472</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Camera Snapshot with Privacy Toggle */}
        <div className="mt-4 relative rounded-2xl overflow-hidden border border-outline-variant/40 shadow-sm">
          <img
            alt="Living Room in Janakpuri"
            className={`w-full h-48 object-cover transition-all duration-300 ${privacyBlur ? 'blur-lg scale-105' : ''}`}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKyY_CY1Jz7lNscPqBU4FD-E7eA9mV737_3nTjRM1T0xPGSK5hsuXf3pcP5dmxW0jJPb9jdtiPU72V8il5G-_pIIM5f2u55uZOnl2nfx_kzQnBa-Q9pUcCY4KFAn8qm1Xz-V6Bl-sBRJRSeRImCtHmjC0uYCf9fnSYlNOVCBrCxxpUVyt48OY8mzaMOteSZnVtLOshu_HikpnDN5cYoyVIk08jfFMLU1gQWq1ScoYe40TYbID05OJt"
          />
          <div className="absolute top-3 left-3 bg-inverse-surface/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[11px] font-semibold flex items-center gap-1.5 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse-dot"></span>
            <span>Living Room Camera • Live</span>
          </div>

          <button
            onClick={() => setPrivacyBlur(!privacyBlur)}
            className="absolute top-3 right-3 bg-inverse-surface/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[11px] font-semibold flex items-center gap-1 hover:bg-inverse-surface border border-white/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">
              {privacyBlur ? 'visibility' : 'visibility_off'}
            </span>
            <span>{privacyBlur ? 'Unblur View' : 'Privacy Blur'}</span>
          </button>
        </div>

        {/* Environmental Telemetry Grid */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">thermostat</span>
            </div>
            <div>
              <p className="text-[11px] text-on-surface-variant font-medium">Temperature</p>
              <p className="font-headline font-bold text-base text-on-surface">24.2 °C</p>
              <span className="text-[10px] text-primary font-semibold">Optimal climate</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">humidity_mid</span>
            </div>
            <div>
              <p className="text-[11px] text-on-surface-variant font-medium">Humidity</p>
              <p className="font-headline font-bold text-base text-on-surface">52%</p>
              <span className="text-[10px] text-secondary font-semibold">Comfortable</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">air</span>
            </div>
            <div>
              <p className="text-[11px] text-on-surface-variant font-medium">Air Quality</p>
              <p className="font-headline font-bold text-base text-on-surface">AQI 68</p>
              <span className="text-[10px] text-tertiary font-semibold">Good (Purifier on)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">motion_sensor_active</span>
            </div>
            <div>
              <p className="text-[11px] text-on-surface-variant font-medium">Motion Activity</p>
              <p className="font-headline font-bold text-base text-on-surface">5m ago</p>
              <span className="text-[10px] text-primary font-semibold">Living room dock</span>
            </div>
          </div>
        </div>

        {/* Hardware Status */}
        <div className="mt-4 p-3 rounded-xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface-variant flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot"></span>
            <span>Saathi Hub v2.4 (Android 14 Senior Tablet Dock)</span>
          </div>
          <span className="font-mono text-[11px] font-semibold">100% AC Powered</span>
        </div>
      </div>
    </div>
  );
}
