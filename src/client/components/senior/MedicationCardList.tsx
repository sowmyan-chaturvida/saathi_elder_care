'use client';

import React, { useState } from 'react';
import { Pill, CheckCircle2, Clock, Utensils } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Medication } from '@/types/care';
import { useAudioSynth } from '@/client/hooks/useAudioSynth';
import { useSpeech } from '@/client/hooks/useSpeech';
import { postTakeMedication } from '@/client/services/apiClient';

interface MedicationCardListProps {
  medications: Medication[];
  onMedicationUpdated: () => void;
}

export function MedicationCardList({ medications, onMedicationUpdated }: MedicationCardListProps) {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const { playTempleChime } = useAudioSynth();
  const { speakText } = useSpeech();

  const handleTakeMedication = async (med: Medication) => {
    if (med.takenToday) return;

    setLoadingId(med.id);
    playTempleChime();

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#059669', '#10B981', '#E06A3B', '#F59E0B'],
      });
    } catch (e) {
      // Confetti fallback
    }

    try {
      await postTakeMedication(med.id);
      speakText(`Well done Ramesh Uncle! Your ${med.name} dosage has been recorded, and Priya has been notified.`);
      onMedicationUpdated();
    } catch (err) {
      console.error('Error taking medication:', err);
    } finally {
      setLoadingId(null);
    }
  };

  const getTimeSlotTitle = (slot: string) => {
    switch (slot) {
      case 'morning':
        return 'Morning Medicine';
      case 'afternoon':
        return 'Afternoon Medicine';
      case 'evening':
        return 'Evening Medicine';
      case 'night':
        return 'Night Medicine';
      default:
        return 'Scheduled Medicine';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Today&apos;s Medications</h2>
          <p className="text-slate-600 text-sm">Tap &apos;Mark as Taken&apos; after taking your medicine</p>
        </div>
        <div className="bg-amber-100 text-amber-900 px-3.5 py-1.5 rounded-full text-sm font-bold border border-amber-300">
          {medications.filter(m => m.takenToday).length} / {medications.length} Taken
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {medications.map((med) => {
          const isTaken = med.takenToday;

          return (
            <div
              key={med.id}
              className={`rounded-2xl p-5 border-2 transition-all shadow-sm ${
                isTaken
                  ? 'bg-emerald-50/70 border-emerald-300'
                  : 'bg-white border-slate-200 hover:border-amber-300 hover:shadow-md'
              }`}
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                  {getTimeSlotTitle(med.timeSlot)}
                </span>
                <div className="flex items-center gap-1 text-slate-600 font-semibold text-sm">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{med.scheduledTime}</span>
                </div>
              </div>

              {/* Medicine Name & Dosage */}
              <div className="flex items-start gap-3 my-2">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xs"
                  style={{ backgroundColor: `${med.colorTag}15`, color: med.colorTag }}
                >
                  <Pill className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">{med.name}</h3>
                  <p className="text-slate-600 font-medium text-sm">Dosage: {med.dosage}</p>
                </div>
              </div>

              {/* Instructions */}
              <div className="my-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-1">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>When to take:</span>
                </div>
                <p className="text-sm font-medium text-slate-800">{med.instructionsEnglish}</p>
              </div>

              {/* Action Button */}
              {isTaken ? (
                <div className="w-full py-3.5 bg-emerald-100/80 border border-emerald-300 rounded-xl flex items-center justify-center gap-2 text-emerald-800 font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Medicine Taken Today</span>
                </div>
              ) : (
                <button
                  onClick={() => handleTakeMedication(med)}
                  disabled={loadingId === med.id}
                  className="btn-tactile w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white gap-2.5 text-lg"
                >
                  <CheckCircle2 className="w-6 h-6" />
                  <span>{loadingId === med.id ? 'Recording...' : 'Mark as Taken'}</span>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
