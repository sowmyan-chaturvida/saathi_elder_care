'use client';

import React, { useState } from 'react';
import { postLogVitals } from '@/client/services/apiClient';

interface LogVitalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function LogVitalsModal({ isOpen, onClose, onSuccess }: LogVitalsModalProps) {
  const [systolic, setSystolic] = useState('124');
  const [diastolic, setDiastolic] = useState('80');
  const [sugar, setSugar] = useState('110');
  const [sugarType, setSugarType] = useState<'fasting' | 'post_meal' | 'random'>('fasting');
  const [pulse, setPulse] = useState('72');
  const [recordedBy, setRecordedBy] = useState('Priya Sharma (Caregiver)');
  const [notes, setNotes] = useState('Checked via Omron Home Monitor');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const numSys = Number(systolic);
  const numDia = Number(diastolic);
  const numSugar = Number(sugar);

  const isBpHigh = numSys >= 140 || numDia >= 90;
  const isSugarHigh = sugarType === 'fasting' ? numSugar >= 126 : numSugar >= 180;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isNaN(numSys) || isNaN(numDia) || isNaN(numSugar)) {
      setError('Please enter valid numbers for vitals');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await postLogVitals({
        bloodPressureSystolic: numSys,
        bloodPressureDiastolic: numDia,
        bloodSugar: numSugar,
        bloodSugarType: sugarType,
        pulse: pulse ? Number(pulse) : undefined,
        recordedBy,
        notes,
      });
      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err?.message || 'Failed to save health vitals');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 shadow-2xl border border-outline-variant/40 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">vital_signs</span>
            </div>
            <div>
              <h2 className="font-headline font-bold text-lg text-on-surface">Log Senior Vitals</h2>
              <p className="text-[11px] text-on-surface-variant">Ramesh Chandra Sharma • Delhi Residence</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {error && (
          <div className="mt-3 p-2.5 rounded-xl bg-error-container text-on-error-container text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs font-body">
          {/* Blood Pressure Input */}
          <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-headline font-bold text-on-surface flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-base">cardiology</span>
                Blood Pressure (mmHg)
              </label>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${isBpHigh ? 'bg-error-container text-on-error-container' : 'bg-primary-container text-on-primary-container'}`}>
                {isBpHigh ? '⚠️ Elevated BP' : '✓ Normal Range'}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[10px] text-on-surface-variant">Systolic (Top)</span>
                <input
                  type="number"
                  value={systolic}
                  onChange={(e) => setSystolic(e.target.value)}
                  placeholder="120"
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/60 font-mono font-bold text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
                  required
                />
              </div>
              <div>
                <span className="text-[10px] text-on-surface-variant">Diastolic (Bottom)</span>
                <input
                  type="number"
                  value={diastolic}
                  onChange={(e) => setDiastolic(e.target.value)}
                  placeholder="80"
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/60 font-mono font-bold text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
                  required
                />
              </div>
            </div>
          </div>

          {/* Blood Sugar Input */}
          <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-headline font-bold text-on-surface flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-base">bloodtype</span>
                Blood Sugar (mg/dL)
              </label>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${isSugarHigh ? 'bg-error-container text-on-error-container' : 'bg-secondary-container text-on-secondary-container'}`}>
                {isSugarHigh ? '⚠️ High Sugar' : '✓ Target Range'}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[10px] text-on-surface-variant">Reading (mg/dL)</span>
                <input
                  type="number"
                  value={sugar}
                  onChange={(e) => setSugar(e.target.value)}
                  placeholder="110"
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/60 font-mono font-bold text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
                  required
                />
              </div>
              <div>
                <span className="text-[10px] text-on-surface-variant">Condition Slot</span>
                <select
                  value={sugarType}
                  onChange={(e) => setSugarType(e.target.value as any)}
                  className="w-full mt-1 px-2.5 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/60 font-semibold text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <option value="fasting">Fasting (Morning)</option>
                  <option value="post_meal">Post-Meal (2h after)</option>
                  <option value="random">Random / Bedtime</option>
                </select>
              </div>
            </div>
          </div>

          {/* Pulse */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-on-surface-variant text-[11px] font-semibold">Pulse Rate (BPM)</label>
              <input
                type="number"
                value={pulse}
                onChange={(e) => setPulse(e.target.value)}
                placeholder="72"
                className="w-full mt-1 px-3 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/60 font-mono font-semibold text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label className="text-on-surface-variant text-[11px] font-semibold">Logged By</label>
              <input
                type="text"
                value={recordedBy}
                onChange={(e) => setRecordedBy(e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/60 font-semibold text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="text-on-surface-variant text-[11px] font-semibold">Caregiver Observations</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Papa felt energetic after evening walk"
              className="w-full mt-1 px-3 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/60 text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          {/* Submit buttons */}
          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-outline-variant/60 text-on-surface font-headline font-bold text-xs hover:bg-surface-container cursor-pointer transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2.5 rounded-xl bg-primary text-on-primary font-headline font-bold text-xs shadow-md hover:bg-primary/90 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-sm">check</span>
                  <span>Record Vitals</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
