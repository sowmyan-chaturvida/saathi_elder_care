'use client';

import React, { useState } from 'react';
import { ShieldCheck, Heart, AlertOctagon, CheckCircle2, Clock, Check } from 'lucide-react';
import { FamilySummary } from '@/types/care';
import { postResolveSos } from '@/client/services/apiClient';

interface PeaceOfMindHeaderProps {
  summary: FamilySummary;
  onRefresh: () => void;
}

export function PeaceOfMindHeader({ summary, onRefresh }: PeaceOfMindHeaderProps) {
  const [resolveModalOpen, setResolveModalOpen] = useState(false);
  const [resolveNote, setResolveNote] = useState('');
  const [isResolving, setIsResolving] = useState(false);

  const { senior, activeSos, adherencePercentage, medicationsTakenCount, totalMedicationsCount, lastCheckinTime } = summary;

  const handleResolveSos = async () => {
    setIsResolving(true);
    try {
      await postResolveSos('Priya Sharma (Daughter)', resolveNote || 'Resolved on family dashboard');
      setResolveModalOpen(false);
      setResolveNote('');
      onRefresh();
    } catch (err) {
      console.error('Failed to resolve SOS:', err);
    } finally {
      setIsResolving(false);
    }
  };

  const formattedCheckin = new Date(lastCheckinTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="space-y-4">
      {/* Critical Emergency SOS Banner */}
      {activeSos && (
        <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-3xl p-6 shadow-2xl border-4 border-red-700 animate-pulse flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white text-red-600 flex items-center justify-center shrink-0 shadow-lg">
              <AlertOctagon className="w-8 h-8 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-white/20 text-white text-xs font-black uppercase px-2.5 py-0.5 rounded-full">
                  CRITICAL EMERGENCY SOS
                </span>
                <span className="text-xs text-red-100 font-mono">
                  Triggered at {new Date(activeSos.triggeredAt).toLocaleTimeString()}
                </span>
              </div>
              <h2 className="text-2xl font-black mt-1">
                {senior.name} activated Emergency SOS via {activeSos.triggerSource}!
              </h2>
              <p className="text-red-100 text-sm font-medium mt-0.5">
                On-device siren is sounding. Emergency contacts have been notified. Please call {senior.preferredName} immediately.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="tel:+919811245678"
              className="btn-tactile bg-white text-red-700 hover:bg-red-50 text-base font-bold px-5 py-3 rounded-xl flex-1 md:flex-initial"
            >
              Call Ramesh Uncle
            </a>
            <button
              onClick={() => setResolveModalOpen(true)}
              className="btn-tactile bg-red-950/80 hover:bg-red-950 text-white text-base font-bold px-5 py-3 rounded-xl border border-red-400 flex-1 md:flex-initial"
            >
              Resolve Alert
            </button>
          </div>
        </div>
      )}

      {/* Main Peace-of-Mind Hero Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Senior Profile Summary */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white text-2xl font-bold flex items-center justify-center shadow-md">
              R
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{senior.name}</h1>
                <span className="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                  {senior.age} Yrs • {senior.locality}, {senior.city}
                </span>
              </div>
              <p className="text-slate-500 text-sm mt-1 flex items-center gap-2">
                <span>Caregiver: <strong>Priya Sharma (Daughter, Bangalore)</strong></span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  Last active {formattedCheckin}
                </span>
              </p>
            </div>
          </div>

          {/* Quick Stats Badges */}
          <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
            {/* Adherence Card */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center min-w-[130px] flex-1 lg:flex-initial">
              <div className="flex items-center justify-center gap-1 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Adherence</span>
              </div>
              <div className="text-2xl font-black text-emerald-900">{adherencePercentage}%</div>
              <p className="text-xs text-emerald-700 font-semibold mt-0.5">{medicationsTakenCount} of {totalMedicationsCount} taken</p>
            </div>

            {/* Peace of Mind Badge */}
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 text-center min-w-[130px] flex-1 lg:flex-initial">
              <div className="flex items-center justify-center gap-1 text-teal-700 font-bold text-xs uppercase tracking-wider mb-1">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Status</span>
              </div>
              <div className="text-2xl font-black text-teal-900">
                {activeSos ? 'Alert' : adherencePercentage >= 66 ? 'Peaceful' : 'Needs Check'}
              </div>
              <p className="text-xs text-teal-700 font-semibold mt-0.5">
                {activeSos ? 'SOS Active' : 'Routines normal'}
              </p>
            </div>
          </div>
        </div>

        {/* Adherence Visual Bar */}
        <div className="mt-6 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-2">
            <span>Today&apos;s Daily Medication Adherence Target</span>
            <span>{medicationsTakenCount} / {totalMedicationsCount} Completed ({adherencePercentage}%)</span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-700 rounded-full ${
                adherencePercentage === 100
                  ? 'bg-emerald-500'
                  : adherencePercentage >= 50
                  ? 'bg-teal-500'
                  : 'bg-amber-500'
              }`}
              style={{ width: `${adherencePercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Resolve SOS Modal */}
      {resolveModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-slate-300 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Resolve Emergency SOS</h3>
                <p className="text-xs text-slate-500">Record a resolution note for the SOC 2 audit trail</p>
              </div>
            </div>

            <textarea
              value={resolveNote}
              onChange={(e) => setResolveNote(e.target.value)}
              placeholder="e.g. Spoke to parent on phone. False alarm, doing fine."
              rows={3}
              className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none mb-4"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setResolveModalOpen(false)}
                className="btn-tactile flex-1 bg-slate-200 text-slate-800 text-sm font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleResolveSos}
                disabled={isResolving}
                className="btn-tactile flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold"
              >
                <Check className="w-4 h-4 mr-1" />
                <span>{isResolving ? 'Resolving...' : 'Confirm Resolution'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
