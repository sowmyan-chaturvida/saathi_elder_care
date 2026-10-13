'use client';

import React, { useState } from 'react';

interface VoiceNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSendSuccess: (note: string) => void;
}

export function VoiceNoteModal({ isOpen, onClose, onSendSuccess }: VoiceNoteModalProps) {
  const [noteText, setNoteText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const presetMessages = [
    'Papa, doophar ka calcium tablet le lijiye khane ke baad. Love you!',
    'Papa, I will call you at 7:30 PM this evening after my meeting.',
    'Papa, doctor Verma se baat ho gayi hai, blood pressure bilkul normal hai.',
    'Papa, please drink a warm glass of water and rest your knees.',
  ];

  const handleRecordToggle = () => {
    if (isRecording) {
      setIsRecording(false);
    } else {
      setIsRecording(true);
      // Simulate speech-to-text recording
      setTimeout(() => {
        setNoteText('Papa, doophar ka calcium tablet le lijiye khane ke baad. Love you!');
        setIsRecording(false);
      }, 2500);
    }
  };

  const handleSend = () => {
    if (!noteText.trim()) return;

    setSentStatus('Relaying voice note to Ramesh Papa\'s Smart Hub in Janakpuri...');

    // Try text-to-speech preview if available
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        const utterance = new SpeechSynthesisUtterance(noteText);
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn('Speech synthesis error', e);
      }
    }

    setTimeout(() => {
      onSendSuccess(noteText);
      setSentStatus('Sent! Spoken aloud on Papa\'s tablet hub.');
      setTimeout(() => {
        setSentStatus(null);
        setNoteText('');
        onClose();
      }, 1200);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 shadow-2xl border border-outline-variant/40">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">mic</span>
            </div>
            <div>
              <h2 className="font-headline font-bold text-lg text-on-surface leading-tight">Instant Voice Note</h2>
              <p className="text-[11px] text-on-surface-variant">Spoken aloud on Ramesh Papa&apos;s living room hub</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Recording or Text area */}
        <div className="mt-4">
          <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5">
            Voice Note Message
          </label>
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Type your message or tap the microphone to dictate..."
            rows={3}
            className="w-full p-3 rounded-2xl bg-surface-container-low border border-outline-variant/50 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none"
          />

          {/* Mic dictation button */}
          <div className="mt-3 flex items-center justify-between">
            <button
              onClick={handleRecordToggle}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isRecording
                  ? 'bg-error text-on-error animate-pulse'
                  : 'bg-primary-fixed text-on-primary-fixed-variant hover:opacity-90'
              }`}
            >
              <span className="material-symbols-outlined text-base">
                {isRecording ? 'stop_circle' : 'mic'}
              </span>
              <span>{isRecording ? 'Listening...' : 'Dictate with Voice'}</span>
            </button>

            {noteText && (
              <button
                onClick={() => {
                  if ('speechSynthesis' in window) {
                    const u = new SpeechSynthesisUtterance(noteText);
                    window.speechSynthesis.speak(u);
                  }
                }}
                className="text-xs text-primary font-bold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">volume_up</span> Preview
              </button>
            )}
          </div>
        </div>

        {/* Quick Presets */}
        <div className="mt-4 pt-3 border-t border-outline-variant/30">
          <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-2">
            Quick Family Templates
          </p>
          <div className="space-y-1.5">
            {presetMessages.slice(0, 2).map((preset, idx) => (
              <button
                key={idx}
                onClick={() => setNoteText(preset)}
                className="w-full text-left p-2 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors text-xs text-on-surface cursor-pointer truncate"
              >
                &ldquo;{preset}&rdquo;
              </button>
            ))}
          </div>
        </div>

        {/* Status banner if sending */}
        {sentStatus && (
          <div className="mt-3 p-2.5 rounded-xl bg-primary-fixed text-on-primary-fixed-variant text-xs font-semibold flex items-center gap-2 animate-fade-in">
            <span className="material-symbols-outlined text-base">check_circle</span>
            <span>{sentStatus}</span>
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-5 flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-outline-variant/40 text-xs font-bold text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            disabled={!noteText.trim() || !!sentStatus}
            className="flex-1 py-2.5 rounded-xl bg-primary text-on-primary text-xs font-bold hover:bg-primary-container transition-all disabled:opacity-50 cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base">send</span>
            <span>Relay to Hub</span>
          </button>
        </div>
      </div>
    </div>
  );
}
