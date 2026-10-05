'use client';

import React, { useState, useEffect } from 'react';
import { AlertTriangle, PhoneCall, X, ShieldAlert } from 'lucide-react';
import { useAudioSynth } from '@/client/hooks/useAudioSynth';
import { postTriggerSos } from '@/client/services/apiClient';

interface EmergencySosButtonProps {
  onSosTriggered: () => void;
}

export function EmergencySosButton({ onSosTriggered }: EmergencySosButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isTriggered, setIsTriggered] = useState(false);

  const { startEmergencySiren, stopEmergencySiren } = useAudioSynth();

  // Countdown effect when modal opens
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (modalOpen && !isTriggered && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((c) => c - 1);
      }, 1000);
    } else if (modalOpen && !isTriggered && countdown === 0) {
      triggerEmergency();
    }
    return () => clearTimeout(timer);
  }, [modalOpen, countdown, isTriggered]);

  const triggerEmergency = async () => {
    setIsTriggered(true);
    startEmergencySiren();
    try {
      await postTriggerSos('senior_button');
      onSosTriggered();
    } catch (err) {
      console.error('Failed to trigger SOS:', err);
    }
  };

  const handleCancel = () => {
    setModalOpen(false);
    setCountdown(5);
    setIsTriggered(false);
    stopEmergencySiren();
  };

  return (
    <>
      <div className="bg-gradient-to-r from-rose-50 to-red-100/70 border-2 border-rose-300 rounded-3xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-lg animate-pulse">
            <AlertTriangle className="w-9 h-9" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-rose-950">Emergency SOS</h3>
            <p className="text-rose-800 text-base font-medium">
              If you feel unwell or need urgent help, press this button. Priya and your doctor will be notified immediately.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setModalOpen(true);
            setCountdown(5);
          }}
          className="btn-tactile bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white px-8 py-5 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl border-2 border-rose-700 shrink-0 w-full sm:w-auto"
        >
          <ShieldAlert className="w-7 h-7 mr-2" />
          <span>PRESS EMERGENCY SOS</span>
        </button>
      </div>

      {/* Safety Countdown Confirmation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 border-4 border-rose-600 text-center shadow-2xl animate-scale-up">
            <div className="w-20 h-20 rounded-full bg-rose-100 text-rose-600 mx-auto flex items-center justify-center mb-4">
              <AlertTriangle className="w-12 h-12 animate-bounce" />
            </div>

            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
              {isTriggered ? 'Emergency Alarm Active!' : 'Emergency Siren About to Sound'}
            </h3>

            {!isTriggered ? (
              <>
                <p className="text-lg text-slate-600 font-medium mb-6">
                  Notifying Priya and your emergency contacts. If you pressed this by mistake, tap Cancel below.
                </p>

                {/* Big Countdown Number */}
                <div className="my-6">
                  <span className="inline-block w-24 h-24 rounded-full bg-rose-600 text-white text-5xl font-black leading-[96px] shadow-lg animate-pulse">
                    {countdown}
                  </span>
                  <p className="text-xs font-semibold text-rose-700 uppercase tracking-wider mt-2">Seconds remaining</p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleCancel}
                    className="btn-tactile flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 text-lg font-bold"
                  >
                    <X className="w-6 h-6 mr-1" />
                    <span>Cancel (Pressed by Mistake)</span>
                  </button>
                  <button
                    onClick={triggerEmergency}
                    className="btn-tactile flex-1 bg-rose-600 hover:bg-rose-700 text-white text-lg font-bold"
                  >
                    <span>Send Alert Now</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl my-5 text-left space-y-2">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-base">
                    <PhoneCall className="w-5 h-5 text-rose-600 animate-pulse" />
                    <span>Emergency dispatches triggered to:</span>
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1 pl-4 list-disc">
                    <li>Priya Sharma (+91 XXXXX-XXX78) — Daughter</li>
                    <li>Dr. Anand Verma (+91 XXXXX-XXX56) — Family Physician</li>
                  </ul>
                </div>

                <button
                  onClick={handleCancel}
                  className="btn-tactile w-full bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold"
                >
                  <X className="w-5 h-5 mr-2" />
                  <span>Silence Alarm</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
