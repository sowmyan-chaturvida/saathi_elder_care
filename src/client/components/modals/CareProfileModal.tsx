'use client';

import React from 'react';
import { SeniorProfile } from '@/types/care';

interface CareProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  senior?: SeniorProfile;
  onSwitchMode: (mode: 'family' | 'senior') => void;
}

export function CareProfileModal({
  isOpen,
  onClose,
  senior,
  onSwitchMode,
}: CareProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-outline-variant/40 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary text-2xl">manage_accounts</span>
            <h2 className="font-headline font-bold text-xl text-on-surface">Care Profile & Hub</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Caregiver Profile Card */}
        <div className="mt-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex items-center gap-4">
          <img
            alt="Priya Sharma"
            className="w-14 h-14 rounded-2xl object-cover ring-2 ring-primary/30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW085qJ3na6gbyskBvjQAW_MEINbKgEUPK76FRqtyru509luuXv-8JcvDU0U67Qp4E8m5cVAfJOEJnY0HWZwybDkGVS6SpO3wb27j25Y98krcuukay3SvZM-3MxsIynmt7ADS47bPIHrGsyitXNbYGUCyhnRha2Po_cyJFJGB2VzQ3A96C0NNrpsxfXKTRFEhcK6WbQodLaAZaUvRTHcf_0Blo3F_yzxT221fxixgrLN6Vsn8DvCY"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-headline font-bold text-base text-on-surface">Priya Sharma</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant uppercase">
                Primary Caregiver
              </span>
            </div>
            <p className="text-xs text-on-surface-variant mt-0.5">Monitoring remotely from Indiranagar, Bangalore</p>
            <p className="text-xs text-primary font-semibold mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">wifi</span> Connected to Delhi Tablet Node DEL-8472
            </p>
          </div>
        </div>

        {/* Senior Profile Card */}
        <div className="mt-4 p-4 rounded-2xl bg-surface-container border border-outline-variant/40">
          <div className="flex items-center gap-3">
            <img
              alt="Ramesh Sharma"
              className="w-14 h-14 rounded-2xl object-cover ring-2 ring-primary/30"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvigIpS2ATby-uoiW00Ja_LbcvXuy5ug_3HH5KCbuALXUU22gKcTNW06fG0cm_PCqJVtixSMvhrtPg5cITOhAMR8_RIxZrkUZZ2Urla2xsNSkRhYNGV4cYTPPkM1D66PMyfedIk6pYDa-4UKqeMxNqg8JvTCCHUj_s7UM6XMEfKforiaX8zMwSB4-rbNjN3KBlGo456Yy-XTDGeXBjTm4NKnKQCQ8TRzxpSsIgkh9lBDcuuFwTbByR"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-headline font-bold text-base text-on-surface">
                {senior?.name || 'Ramesh Chandra Sharma'}
              </h3>
              <p className="text-xs text-on-surface-variant">
                {senior?.age || 73} yrs • {senior?.locality || 'B-Block, Janakpuri'}, {senior?.city || 'New Delhi'}
              </p>
              <div className="flex flex-wrap gap-1 mt-1.5">
                {(senior?.conditions || ['Mild Hypertension', 'Type-2 Diabetes']).map((c, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded-md"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Perspective Switching */}
          <div className="mt-4 pt-3 border-t border-outline-variant/30 flex gap-2">
            <button
              onClick={() => {
                onSwitchMode('family');
                onClose();
              }}
              className="flex-1 py-2 px-3 rounded-xl bg-primary text-on-primary font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-primary-container transition-all cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-base">monitor_heart</span>
              Family Portal
            </button>
            <button
              onClick={() => {
                onSwitchMode('senior');
                onClose();
              }}
              className="flex-1 py-2 px-3 rounded-xl bg-secondary text-on-secondary font-bold text-xs flex items-center justify-center gap-1.5 hover:opacity-90 transition-all cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-base">volunteer_activism</span>
              Senior Companion
            </button>
          </div>
        </div>

        {/* Emergency Circle Contacts */}
        <div className="mt-4">
          <h4 className="font-headline font-semibold text-xs text-secondary uppercase tracking-wider mb-2.5">
            Emergency Escalation Circle
          </h4>
          <div className="space-y-2">
            {(senior?.emergencyContacts || [
              { id: '1', name: 'Priya Sharma', relation: 'Daughter (Bangalore)', phone: '+91 98112 45678' },
              { id: '2', name: 'Dr. Anand Verma', relation: 'Family Physician (Janakpuri)', phone: '+91 98711 23456' },
              { id: '3', name: 'Mr. O.P. Gupta', relation: 'Neighbour (Flat 204)', phone: '+91 98101 98765' },
            ]).map((contact) => (
              <div
                key={contact.id}
                className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between text-xs"
              >
                <div>
                  <p className="font-bold text-on-surface">{contact.name}</p>
                  <p className="text-[11px] text-on-surface-variant">{contact.relation}</p>
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  className="px-2.5 py-1 rounded-lg bg-surface-container text-primary font-bold hover:bg-primary hover:text-on-primary transition-all flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  <span>{contact.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Node & Encryption Info */}
        <div className="mt-4 pt-3 border-t border-outline-variant/30 text-[11px] text-on-surface-variant flex items-center justify-between">
          <span>Encryption: AES-256-GCM / TLS 1.3</span>
          <span className="font-semibold text-primary">SOC 2 CC7.2 Verified</span>
        </div>
      </div>
    </div>
  );
}
