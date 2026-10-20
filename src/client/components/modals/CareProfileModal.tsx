'use client';

import React, { useState } from 'react';
import { SeniorProfile } from '@/types/care';
import { useAuth } from '@/client/context/AuthContext';
import { AddParentModal } from './AddParentModal';

interface CareProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  senior?: SeniorProfile;
  allSeniors?: SeniorProfile[];
  onSwitchMode: (mode: 'family' | 'senior') => void;
  onParentSwitched?: (senior: SeniorProfile) => void;
}

export function CareProfileModal({
  isOpen,
  onClose,
  senior,
  allSeniors = [],
  onSwitchMode,
  onParentSwitched,
}: CareProfileModalProps) {
  const { user, isCaregiver, logout } = useAuth();
  const [addParentOpen, setAddParentOpen] = useState(false);
  const [switching, setSwitching] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSwitchParent = async (parentId: string) => {
    if (parentId === senior?.id || switching) return;
    setSwitching(parentId);
    try {
      const res = await fetch(`/api/v1/parents/${parentId}/switch`, { method: 'POST' });
      const data = await res.json();
      if (data.success && data.data) {
        onParentSwitched?.(data.data);
      }
    } catch (e) {
      console.error('Failed to switch parent', e);
    } finally {
      setSwitching(null);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm animate-fade-in">
        <div className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-outline-variant/40 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-2xl">manage_accounts</span>
              <h2 className="font-headline font-bold text-xl text-on-surface">Care Account &amp; Parents</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          {/* Current Logged-In User Profile Card */}
          <div className="mt-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex items-center gap-4">
            <img
              alt={user?.name || 'User'}
              className="w-14 h-14 rounded-2xl object-cover ring-2 ring-primary/30"
              src={
                user?.avatar ||
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAW085qJ3na6gbyskBvjQAW_MEINbKgEUPK76FRqtyru509luuXv-8JcvDU0U67Qp4E8m5cVAfJOEJnY0HWZwybDkGVS6SpO3wb27j25Y98krcuukay3SvZM-3MxsIynmt7ADS47bPIHrGsyitXNbYGUCyhnRha2Po_cyJFJGB2VzQ3A96C0NNrpsxfXKTRFEhcK6WbQodLaAZaUvRTHcf_0Blo3F_yzxT221fxixgrLN6Vsn8DvCY'
              }
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-headline font-bold text-base text-on-surface truncate">
                  {user?.name || 'User'}
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant uppercase">
                  {isCaregiver ? 'Child / Guardian' : 'Senior'}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mt-0.5 truncate">{user?.email || 'Signed in with Google'}</p>
              <p className="text-xs text-primary font-semibold mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified_user</span> Google Authenticated Session
              </p>
            </div>
          </div>

          {/* Registered Parents Section */}
          <div className="mt-5">
            <div className="flex items-center justify-between mb-2.5">
              <h4 className="font-headline font-semibold text-xs text-secondary uppercase tracking-wider">
                Monitored Parents &amp; Seniors ({allSeniors.length || 1})
              </h4>
              {isCaregiver && (
                <button
                  onClick={() => setAddParentOpen(true)}
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">add_circle</span>
                  <span>+ Add Parent</span>
                </button>
              )}
            </div>

            <div className="space-y-2">
              {(allSeniors.length > 0 ? allSeniors : senior ? [senior] : []).map((p) => {
                const isActive = p.id === senior?.id;
                return (
                  <div
                    key={p.id}
                    className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      isActive
                        ? 'bg-primary/5 border-primary shadow-xs'
                        : 'bg-surface-container-low border-outline-variant/30 hover:bg-surface-container'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-headline font-bold text-sm text-on-surface truncate">
                          {p.name}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-surface-container-highest text-on-surface-variant">
                          {p.relation || 'Parent'} • Age {p.age}
                        </span>
                        {isActive && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary text-on-primary">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        {p.locality}, {p.city} • Conditions: {p.conditions?.join(', ') || 'None'}
                      </p>
                    </div>

                    {!isActive && isCaregiver && (
                      <button
                        onClick={() => handleSwitchParent(p.id)}
                        disabled={switching === p.id}
                        className="px-3 py-1.5 rounded-xl bg-surface-container-high hover:bg-primary hover:text-on-primary text-xs font-bold text-on-surface transition-all cursor-pointer shadow-2xs"
                      >
                        {switching === p.id ? 'Switching...' : 'Switch To'}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Perspective Switching (Restricted for Senior Role) */}
          <div className="mt-5 pt-3 border-t border-outline-variant/30">
            <h4 className="font-headline font-semibold text-xs text-secondary uppercase tracking-wider mb-2">
              View Switcher
            </h4>
            <div className="flex gap-2">
              {isCaregiver ? (
                <>
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
                    Senior View
                  </button>
                </>
              ) : (
                <div className="w-full p-2.5 rounded-xl bg-surface-container text-xs text-on-surface-variant font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-secondary">lock</span>
                  <span>Family Portal is accessible to children &amp; guardians only.</span>
                </div>
              )}
            </div>
          </div>

          {/* Sign Out Button */}
          <div className="mt-5 pt-4 border-t border-outline-variant/30 flex items-center justify-between">
            <button
              onClick={() => {
                onClose();
                logout();
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-error hover:underline cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">logout</span>
              <span>Sign Out from Google</span>
            </button>

            <span className="text-[11px] text-on-surface-variant font-medium">
              SOC 2 CC7.2 Protected Session
            </span>
          </div>
        </div>
      </div>

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
