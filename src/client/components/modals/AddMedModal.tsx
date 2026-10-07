'use client';

import React, { useState } from 'react';
import { postAddMedication } from '@/client/services/apiClient';

interface AddMedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function AddMedModal({ isOpen, onClose, onSuccess }: AddMedModalProps) {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('1 Tablet');
  const [timeSlot, setTimeSlot] = useState<'morning' | 'afternoon' | 'evening' | 'night'>('night');
  const [scheduledTime, setScheduledTime] = useState('08:30 PM');
  const [mealRelation, setMealRelation] = useState<'before_food' | 'after_food' | 'with_food'>('after_food');
  const [instructionsEnglish, setInstructionsEnglish] = useState('Take with warm water after food');
  const [instructionsHindi, setInstructionsHindi] = useState('Khane ke baad gungune paani ke saath lein');
  const [notes, setNotes] = useState('Prescribed by Dr. Anand Verma');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter medicine name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await postAddMedication({
        name,
        dosage,
        timeSlot,
        scheduledTime,
        mealRelation,
        instructionsEnglish,
        instructionsHindi,
        notes,
        colorTag: timeSlot === 'morning' ? '#316342' : timeSlot === 'afternoon' ? '#655d52' : '#6d5622',
      });
      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err?.message || 'Failed to save medication');
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
            <div className="w-8 h-8 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">add_circle</span>
            </div>
            <div>
              <h2 className="font-headline font-bold text-lg text-on-surface">Add New Medication</h2>
              <p className="text-[11px] text-on-surface-variant">Syncs directly to Ramesh Papa&apos;s Senior Hub</p>
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

        <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
              Medicine Name & Strength
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Metformin 500mg, Shelcal 500"
              className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Dosage
              </label>
              <input
                type="text"
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
                placeholder="1 Tablet"
                className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Time Slot
              </label>
              <select
                value={timeSlot}
                onChange={(e) => {
                  const val = e.target.value as any;
                  setTimeSlot(val);
                  if (val === 'morning') setScheduledTime('08:00 AM');
                  else if (val === 'afternoon') setScheduledTime('01:30 PM');
                  else if (val === 'evening') setScheduledTime('05:30 PM');
                  else if (val === 'night') setScheduledTime('08:30 PM');
                }}
                className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="morning">Morning (सुबह)</option>
                <option value="afternoon">Afternoon (दोपहर)</option>
                <option value="evening">Evening (शाम)</option>
                <option value="night">Night (रात)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Scheduled Time
              </label>
              <input
                type="text"
                value={scheduledTime}
                onChange={(e) => setScheduledTime(e.target.value)}
                placeholder="08:30 PM"
                className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Meal Relation
              </label>
              <select
                value={mealRelation}
                onChange={(e) => setMealRelation(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="after_food">After Food (खाने के बाद)</option>
                <option value="before_food">Before Food (खाली पेट)</option>
                <option value="with_food">With Food (खाने के साथ)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
              Instructions (Hindi / Vernacular)
            </label>
            <input
              type="text"
              value={instructionsHindi}
              onChange={(e) => setInstructionsHindi(e.target.value)}
              placeholder="Khane ke baad paani ke saath"
              className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
              Doctor&apos;s Clinical Purpose
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Blood sugar / BP control"
              className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          <div className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-outline-variant/40 text-xs font-bold text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2.5 rounded-xl bg-primary text-on-primary text-xs font-bold hover:bg-primary-container transition-all disabled:opacity-50 cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base">save</span>
              <span>{loading ? 'Syncing...' : 'Save & Sync'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
