'use client';

import React, { useState, useEffect } from 'react';

interface VoIPCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCallEnded: (durationSeconds: number) => void;
}

export function VoIPCallModal({ isOpen, onClose, onCallEnded }: VoIPCallModalProps) {
  const [callState, setCallState] = useState<'ringing' | 'connected' | 'ended'>('ringing');
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      setCallState('ringing');
      setDuration(0);
      return;
    }

    // Simulate ringing for 2.5 seconds then Papa answers!
    const ringTimeout = setTimeout(() => {
      setCallState('connected');
    }, 2500);

    return () => clearTimeout(ringTimeout);
  }, [isOpen]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (callState === 'connected') {
      timer = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [callState]);

  if (!isOpen) return null;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    setCallState('ended');
    setTimeout(() => {
      onCallEnded(duration);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/75 backdrop-blur-md animate-fade-in">
      <div className="bg-surface-container-lowest rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-outline-variant/40 flex flex-col items-center text-center">
        {/* Caller Avatar & Rings */}
        <div className="relative mt-2">
          {callState === 'ringing' && (
            <>
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
              <div className="absolute -inset-3 rounded-full bg-primary/10 animate-pulse"></div>
            </>
          )}
          <img
            alt="Ramesh Sharma"
            className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/40 relative z-10 shadow-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvigIpS2ATby-uoiW00Ja_LbcvXuy5ug_3HH5KCbuALXUU22gKcTNW06fG0cm_PCqJVtixSMvhrtPg5cITOhAMR8_RIxZrkUZZ2Urla2xsNSkRhYNGV4cYTPPkM1D66PMyfedIk6pYDa-4UKqeMxNqg8JvTCCHUj_s7UM6XMEfKforiaX8zMwSB4-rbNjN3KBlGo456Yy-XTDGeXBjTm4NKnKQCQ8TRzxpSsIgkh9lBDcuuFwTbByR"
          />
          <span className="absolute bottom-1 right-1 z-20 w-5 h-5 rounded-full bg-primary border-2 border-surface flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-surface-container-lowest animate-pulse-dot"></span>
          </span>
        </div>

        {/* Contact Name & Status */}
        <h3 className="font-headline font-bold text-xl text-on-surface mt-4">Ramesh Sharma (Papa)</h3>
        <p className="text-xs text-on-surface-variant mt-0.5">Janakpuri Smart Companion Hub • VoIP</p>

        {callState === 'ringing' && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-primary font-bold animate-pulse">
            <span className="material-symbols-outlined text-sm">ring_volume</span>
            <span>Ringing living room tablet...</span>
          </div>
        )}

        {callState === 'connected' && (
          <div className="mt-3 flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-xs text-primary font-bold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot"></span>
              <span>Connected • HD Audio ({formatTime(duration)})</span>
            </div>
            <p className="text-xs italic text-on-surface-variant mt-2 bg-surface-container-low px-3 py-1.5 rounded-xl border border-outline-variant/30">
              &ldquo;Haan Priya beta! Main bilkul theek hoon, abhi chai pi raha tha.&rdquo;
            </p>
          </div>
        )}

        {callState === 'ended' && (
          <div className="mt-3 text-xs text-secondary font-semibold">
            Call Finished ({formatTime(duration)})
          </div>
        )}

        {/* Call Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isMuted
                ? 'bg-secondary text-on-secondary'
                : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
            }`}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            <span className="material-symbols-outlined text-xl">
              {isMuted ? 'mic_off' : 'mic'}
            </span>
          </button>

          <button
            onClick={handleEndCall}
            className="w-14 h-14 rounded-full bg-error text-on-error flex items-center justify-center shadow-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            title="End Call"
          >
            <span className="material-symbols-outlined text-2xl">call_end</span>
          </button>

          <button
            onClick={() => setIsSpeaker(!isSpeaker)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isSpeaker
                ? 'bg-primary-fixed text-on-primary-fixed-variant'
                : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
            }`}
            title="Speaker"
          >
            <span className="material-symbols-outlined text-xl">
              {isSpeaker ? 'volume_up' : 'volume_down'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
