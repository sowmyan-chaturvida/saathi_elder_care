'use client';

import React, { useState } from 'react';
import { FamilySummary } from '@/types/care';
import { VoiceNoteModal } from '@/client/components/modals/VoiceNoteModal';
import { VoIPCallModal } from '@/client/components/modals/VoIPCallModal';
import { AddMedModal } from '@/client/components/modals/AddMedModal';
import { HomeAmbienceModal } from '@/client/components/modals/HomeAmbienceModal';
import { LogVitalsModal } from '@/client/components/modals/LogVitalsModal';
import { EmergencyDispatchModal } from '@/client/components/modals/EmergencyDispatchModal';
import { postTriggerSos } from '@/client/services/apiClient';

interface FamilyPortalStitchProps {
  summary: FamilySummary;
  onRefresh: () => void;
  onOpenAudit: () => void;
  onSwitchToSenior: () => void;
  onSwitchToScam: () => void;
}

export function FamilyPortalStitch({
  summary,
  onRefresh,
  onOpenAudit,
  onSwitchToSenior,
  onSwitchToScam,
}: FamilyPortalStitchProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isPlayingAudioDigest, setIsPlayingAudioDigest] = useState(false);
  const [voiceNoteOpen, setVoiceNoteOpen] = useState(false);
  const [voipCallOpen, setVoipCallOpen] = useState(false);
  const [addMedOpen, setAddMedOpen] = useState(false);
  const [ambienceModalOpen, setAmbienceModalOpen] = useState(false);
  const [vitalsModalOpen, setVitalsModalOpen] = useState(false);
  const [dispatchModalOpen, setDispatchModalOpen] = useState(false);
  const [fallSimulating, setFallSimulating] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSimulateFallCaregiver = async () => {
    setFallSimulating(true);
    try {
      await postTriggerSos('fall_sensor');
      onRefresh();
      setDispatchModalOpen(true);
      showToast('⚠️ Fall Sensor Alert triggered and broadcasted to emergency contacts!');
    } catch (e) {
      console.error('Failed to trigger fall simulation', e);
    } finally {
      setFallSimulating(false);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleRefreshClick = () => {
    setIsSpinning(true);
    onRefresh();
    setTimeout(() => setIsSpinning(false), 700);
    showToast('Status synced with Delhi Tablet Node DEL-8472');
  };

  const handlePlayAudioDigest = () => {
    if (isPlayingAudioDigest) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudioDigest(false);
      return;
    }

    setIsPlayingAudioDigest(true);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const text =
        "Namaste Ramesh ji! Aaj subah dhoop bahut suhaani hai. Kishore Kumar ka gaana 'Zindagi Ke Safar Mein' suniye aur apni subah ki dawai samay par le lijiye.";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudioDigest(false);
      utterance.onerror = () => setIsPlayingAudioDigest(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlayingAudioDigest(false), 4000);
    }
  };

  // Meds adherence computation
  const totalMeds = summary.totalMedicationsCount || summary.medications.length || 3;
  const takenMeds = summary.medicationsTakenCount || summary.medications.filter((m) => m.takenToday).length || 2;
  const adherencePercent = totalMeds > 0 ? Math.round((takenMeds / totalMeds) * 100) : 100;
  // Circumference for r=19 is 119.38
  const strokeDashoffset = 119.38 - (adherencePercent / 100) * 119.38;

  // Next scheduled medication
  const pendingMed = summary.medications.find((m) => !m.takenToday) || summary.medications[0];

  return (
    <div className="flex flex-col relative w-full pt-20 pb-24 bg-surface min-h-screen">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-inverse-surface text-surface-bright px-4 py-2 rounded-xl text-xs font-semibold shadow-lg border border-white/20 animate-fade-in flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-primary-fixed">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="flex flex-col w-full px-4 space-y-4 max-w-lg mx-auto">
        {/* Active SOS High-Priority Interactive Card */}
        {summary.activeSos && (
          <div className="rounded-2xl bg-error text-on-error p-4 shadow-lg border-2 border-white/30 flex items-center justify-between animate-pulse mt-3">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl">warning</span>
              <div>
                <h3 className="font-headline font-bold text-sm">
                  {summary.activeSos.triggerSource === 'fall_sensor'
                    ? 'FALL SENSOR ALERT DETECTED!'
                    : 'EMERGENCY SOS ACTIVE!'}
                </h3>
                <p className="text-xs text-error-container mt-0.5">
                  Ramesh Papa triggered emergency from Janakpuri Hub
                </p>
              </div>
            </div>
            <button
              onClick={() => setDispatchModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-surface-container-lowest text-error font-headline font-bold text-xs hover:bg-surface cursor-pointer shadow-md transition-all active:scale-95"
            >
              Dispatch WA/SMS
            </button>
          </div>
        )}

        {/* 1. Peace of Mind Status Banner (Terra Botanical Reassurance) */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-high/60 p-4 border border-outline-variant/40 shadow-sm mt-1 transition-all hover:shadow-md">
          <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-primary/8 blur-2xl pointer-events-none"></div>
          
          <div className="flex items-start justify-between gap-3 relative z-10">
            <div className="flex items-center gap-3">
              <div
                onClick={onSwitchToSenior}
                className="relative flex-shrink-0 group cursor-pointer"
                title="Switch to Ramesh Papa's View"
              >
                <img
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-primary/20 shadow-xs transition-transform duration-300 group-hover:scale-105"
                  data-alt="Warm documentary portrait of Indian grandfather Ramesh Sharma"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvigIpS2ATby-uoiW00Ja_LbcvXuy5ug_3HH5KCbuALXUU22gKcTNW06fG0cm_PCqJVtixSMvhrtPg5cITOhAMR8_RIxZrkUZZ2Urla2xsNSkRhYNGV4cYTPPkM1D66PMyfedIk6pYDa-4UKqeMxNqg8JvTCCHUj_s7UM6XMEfKforiaX8zMwSB4-rbNjN3KBlGo456Yy-XTDGeXBjTm4NKnKQCQ8TRzxpSsIgkh9lBDcuuFwTbByR"
                  alt="Ramesh Sharma"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary border-2 border-surface flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest animate-ping"></span>
                </span>
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <h2 className="font-headline font-bold text-lg text-on-surface truncate">
                    Papa is doing well today
                  </h2>
                  <span className="text-base leading-none transition-transform hover:scale-125 inline-block cursor-default">
                    💚
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant font-medium truncate mt-0.5">
                  {summary.senior?.name || 'Ramesh Sharma'} • {summary.senior?.age || 73} yrs • {summary.senior?.locality || 'Janakpuri, New Delhi'}
                </p>
              </div>
            </div>

            <button
              onClick={handleRefreshClick}
              aria-label="Refresh status"
              className="w-8 h-8 rounded-xl bg-surface-container-lowest border border-outline-variant/50 flex items-center justify-center text-on-surface-variant active:scale-90 hover:bg-surface hover:text-primary transition-all duration-200 group cursor-pointer"
              id="refreshBtn"
              title="Refresh telemetry"
            >
              <span
                className={`material-symbols-outlined text-lg transition-transform duration-300 ${
                  isSpinning ? 'spinning' : 'group-hover:rotate-45'
                }`}
                id="refreshIcon"
              >
                refresh
              </span>
            </button>
          </div>

          {/* Status Beacon Pill */}
          <div className="mt-3.5 bg-surface-container-lowest/90 backdrop-blur-sm rounded-xl p-2.5 flex items-center justify-between gap-2 border border-outline-variant/30 shadow-xs transition-all hover:border-outline-variant/60">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0 animate-pulse-dot"></span>
              <span className="text-xs text-on-surface font-medium truncate">
                Active 14m ago at home • Morning walk done
              </span>
            </div>
            <div className="flex items-center gap-1 text-primary flex-shrink-0 text-xs font-bold bg-primary/10 px-2 py-0.5 rounded-lg border border-primary/15 transition-transform hover:scale-105">
              <span className="material-symbols-outlined text-sm">directions_walk</span>
              <span>2,410 steps</span>
            </div>
          </div>
        </div>

        {/* 2. Caregiver Perspective Chip */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm text-primary">location_on</span>
            <span className="text-xs font-medium">Priya Sharma • Monitoring from Indiranagar, BLR</span>
          </div>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-primary-fixed text-on-primary-fixed-variant uppercase tracking-wider animate-live-sync shadow-xs">
            Sync Live
          </span>
        </div>

        {/* 3. Meds Adherence Card */}
        <div className="bg-surface-container rounded-2xl p-4 border border-outline-variant/40 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-primary">
                <span className="material-symbols-outlined text-lg">medication</span>
                <span className="font-headline font-semibold text-sm text-on-surface">Meds Adherence</span>
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-headline text-2xl font-bold text-on-surface tracking-tight">
                  {takenMeds} of {totalMeds}
                </span>
                <span className="text-xs text-on-surface-variant font-medium">Doses Taken</span>
              </div>
              <p className="text-xs text-primary font-medium flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                Morning BP taken at 8:15 AM
              </p>
            </div>

            {/* Terra Circular Ring Progress */}
            <div
              onClick={() => setAddMedOpen(true)}
              className="relative w-16 h-16 flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 cursor-pointer"
              title="Click to view/add medications"
            >
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 48 48">
                <circle
                  className="text-surface-container-highest"
                  cx="24"
                  cy="24"
                  fill="transparent"
                  r="19"
                  stroke="currentColor"
                  strokeWidth="4.5"
                ></circle>
                <circle
                  className="text-primary transition-all duration-700 ease-out"
                  cx="24"
                  cy="24"
                  fill="transparent"
                  r="19"
                  stroke="currentColor"
                  strokeDasharray="119.38"
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  strokeWidth="4.5"
                ></circle>
              </svg>
              <span className="absolute font-headline text-xs font-bold text-on-surface">
                {adherencePercent}%
              </span>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-outline-variant/30 flex items-center justify-between text-xs text-on-surface-variant">
            <span className="flex items-center gap-1.5 truncate">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse-dot flex-shrink-0"></span>
              <span className="truncate">Next: {pendingMed ? pendingMed.name : 'All done for today!'}</span>
            </span>
            <span className="font-bold text-tertiary font-headline flex-shrink-0 ml-2">
              {pendingMed ? pendingMed.scheduledTime : 'Great job'}
            </span>
          </div>
        </div>

        {/* 4. Two-Column Split (Vitals & Sentiment Mood) */}
        <div className="grid grid-cols-2 gap-3">
          {/* Health Vitals Card */}
          {(() => {
            const latestVitals = summary.vitals?.[0];
            const bp = latestVitals ? `${latestVitals.bloodPressureSystolic}/${latestVitals.bloodPressureDiastolic}` : '124/80';
            const pulse = latestVitals?.pulse || 72;
            const sugar = latestVitals ? `${latestVitals.bloodSugar}` : '108';
            return (
              <div
                onClick={() => setVitalsModalOpen(true)}
                className="bg-surface-container rounded-2xl p-4 border border-outline-variant/40 shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer group"
                title="Click to view & log vitals"
              >
                <div>
                  <div className="flex items-center justify-between text-secondary">
                    <span className="material-symbols-outlined text-lg text-primary">vital_signs</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant flex items-center gap-1 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot"></span> + Log Vitals
                    </span>
                  </div>
                  <div className="mt-2 flex items-baseline justify-between">
                    <div>
                      <span className="font-headline text-2xl font-bold text-on-surface leading-none">{pulse}</span>
                      <span className="text-xs text-on-surface-variant ml-0.5 font-medium">bpm</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-primary">{sugar} mg/dL</span>
                  </div>
                  <p className="text-xs text-on-surface font-semibold mt-1">
                    {bp} <span className="text-on-surface-variant font-normal">mmHg (BP)</span>
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="text-[11px] text-primary flex items-center gap-0.5 font-semibold">
                    <span className="material-symbols-outlined text-xs">check_circle</span> Normal Range
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-medium">Omron Sync</span>
                </div>
              </div>
            );
          })()}

          {/* Sentiment & Emotional Mood */}
          <div
            onClick={onSwitchToSenior}
            className="bg-surface-container rounded-2xl p-4 border border-outline-variant/40 shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-tertiary">
                <span className="material-symbols-outlined text-lg text-tertiary">sentiment_satisfied</span>
                <span className="text-sm animate-sparkle">✨</span>
              </div>
              <div className="mt-2">
                <span className="font-headline text-sm font-bold text-on-surface block leading-snug">
                  Cheerful &amp; Calm
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mt-1 line-clamp-2 leading-relaxed">
                Spoke 12m with Saathi AI about 70s Kishore Kumar songs.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-outline-variant/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 animate-pulse-dot"></span>
              <span className="text-[11px] text-on-surface-variant font-medium truncate">
                Voice Tone: Relaxed
              </span>
            </div>
          </div>
        </div>

        {/* 5. Remote Care Quick Action Bar */}
        <div className="bg-surface-container-high/80 rounded-2xl p-3 border border-outline-variant/50 shadow-sm">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <span className="font-headline text-xs font-bold text-on-surface uppercase tracking-wide">
              Remote Care &amp; Safety Actions
            </span>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded-full">
              Instant Relay
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {/* Voice Note */}
            <button
              onClick={() => setVoiceNoteOpen(true)}
              className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-surface-container-lowest hover:bg-surface hover:-translate-y-1 hover:shadow-md active:scale-95 transition-all duration-200 shadow-xs border border-outline-variant/30 text-on-surface group cursor-pointer"
              id="voiceNoteBtn"
            >
              <div className="w-9 h-9 rounded-xl bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center mb-1 shadow-xs transition-transform duration-200 group-hover:scale-110">
                <span className="material-symbols-outlined text-lg">mic</span>
              </div>
              <span className="text-[11px] font-semibold text-center text-on-surface truncate w-full">Voice Note</span>
            </button>

            {/* Call Ramesh */}
            <button
              onClick={() => setVoipCallOpen(true)}
              className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-surface-container-lowest hover:bg-surface hover:-translate-y-1 hover:shadow-md active:scale-95 transition-all duration-200 shadow-xs border border-outline-variant/30 text-on-surface group cursor-pointer"
              id="callPapaBtn"
            >
              <div className="w-9 h-9 rounded-xl bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center mb-1 shadow-xs transition-transform duration-200 group-hover:scale-110">
                <span className="material-symbols-outlined text-lg">call</span>
              </div>
              <span className="text-[11px] font-semibold text-center text-on-surface truncate w-full">Call Papa</span>
            </button>

            {/* Log Vitals */}
            <button
              onClick={() => setVitalsModalOpen(true)}
              className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-surface-container-lowest hover:bg-surface hover:-translate-y-1 hover:shadow-md active:scale-95 transition-all duration-200 shadow-xs border border-outline-variant/30 text-on-surface group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center mb-1 shadow-xs transition-transform duration-200 group-hover:scale-110">
                <span className="material-symbols-outlined text-lg">favorite</span>
              </div>
              <span className="text-[11px] font-semibold text-center text-on-surface truncate w-full">Log Vitals</span>
            </button>

            {/* Simulate Fall Sensor */}
            <button
              onClick={handleSimulateFallCaregiver}
              disabled={fallSimulating}
              className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-error-container/40 hover:bg-error-container/80 hover:-translate-y-1 hover:shadow-md active:scale-95 transition-all duration-200 shadow-xs border border-error/30 text-error group cursor-pointer"
              title="Test Fall Sensor trigger"
            >
              <div className="w-9 h-9 rounded-xl bg-error text-on-error flex items-center justify-center mb-1 shadow-xs transition-transform duration-200 group-hover:scale-110">
                <span className="material-symbols-outlined text-lg">personal_injury</span>
              </div>
              <span className="text-[11px] font-bold text-center text-error truncate w-full">
                {fallSimulating ? 'Testing...' : 'Test Fall'}
              </span>
            </button>
          </div>
        </div>


        {/* 6. Live Activity Feed & Audit Timeline */}
        <div className="bg-surface-container rounded-2xl p-4 border border-outline-variant/40 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">history</span>
              <h3 className="font-headline text-base text-on-surface font-bold">Today&apos;s Timeline</h3>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-semibold uppercase tracking-wider">
              Auto-Synced
            </span>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 space-y-3.5">
            {/* Continuous Timeline Vertical Line */}
            <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-outline-variant/50"></div>

            {/* Item 1: Scam Shield Incident */}
            <div className="relative group">
              <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-error-container text-on-error-container flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-110">
                <span className="material-symbols-outlined text-xs">gshield</span>
              </span>
              <div
                onClick={onSwitchToScam}
                className="flex flex-col bg-surface-container-lowest rounded-xl p-3 border border-outline-variant/30 shadow-xs timeline-card cursor-pointer"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-error-container text-on-error-container uppercase tracking-wider">
                    Scam Shield Scan
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">11:45 AM</span>
                </div>
                <p className="font-headline text-sm text-on-surface font-bold mt-1">
                  Suspicious Disconnection SMS Deflected
                </p>
                <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                  Papa checked an SMS alleging BSES Rajdhani bill default. Saathi auto-quarantined the link (
                  <code className="bg-error-container/40 text-error px-1 py-0.5 rounded text-[11px] font-mono">
                    bit.ly/del-power-pay
                  </code>
                  ) and alerted audio warning.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs text-primary flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-sm">verified_user</span> System Blocked Successfully
                  </span>
                </div>
              </div>
            </div>

            {/* Item 2: AI Voice Companion Banter */}
            <div className="relative group">
              <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-110">
                <span className="material-symbols-outlined text-xs">forum</span>
              </span>
              <div className="flex flex-col bg-surface-container-lowest rounded-xl p-3 border border-outline-variant/30 shadow-xs timeline-card cursor-pointer">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed uppercase tracking-wider">
                    Voice Companion
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">09:30 AM</span>
                </div>
                <p className="font-headline text-sm text-on-surface font-bold mt-1">
                  Retro Kishore Kumar &amp; Weather Chat
                </p>
                <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                  12-minute engaging voice dialogue. Papa asked for <em>&ldquo;Zindagi Ke Safar Mein&rdquo;</em> playlist and checked afternoon temperature for West Delhi.
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <button
                    onClick={handlePlayAudioDigest}
                    className="text-primary hover:text-primary-container text-xs font-bold flex items-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">
                      {isPlayingAudioDigest ? 'pause_circle' : 'play_circle'}
                    </span>
                    <span>{isPlayingAudioDigest ? 'Playing Audio Digest...' : 'Listen to Audio Digest'}</span>
                  </button>
                  {/* Simulated Equalizer Micro-interaction Bars */}
                  <div className="flex items-end gap-0.5 h-3.5 px-1.5 py-0.5 bg-primary/10 rounded-md" title="Live audio preview">
                    <span className={`w-0.5 bg-primary rounded-full ${isPlayingAudioDigest ? 'eq-bar-1' : 'h-1'}`}></span>
                    <span className={`w-0.5 bg-primary rounded-full ${isPlayingAudioDigest ? 'eq-bar-2' : 'h-2'}`}></span>
                    <span className={`w-0.5 bg-primary rounded-full ${isPlayingAudioDigest ? 'eq-bar-3' : 'h-1.5'}`}></span>
                    <span className={`w-0.5 bg-primary rounded-full ${isPlayingAudioDigest ? 'eq-bar-4' : 'h-2.5'}`}></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3: Medication Confirmed */}
            <div className="relative group">
              <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-110">
                <span className="material-symbols-outlined text-xs">check</span>
              </span>
              <div className="flex flex-col bg-surface-container-lowest rounded-xl p-3 border border-outline-variant/30 shadow-xs timeline-card cursor-pointer">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant uppercase tracking-wider">
                    Medication Taken
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">08:15 AM</span>
                </div>
                <p className="font-headline text-sm text-on-surface font-bold mt-1">
                  Amlodipine 5mg marked Taken
                </p>
                <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                  Confirmed via physical Senior Tablet interaction: &ldquo;Maine Le Li&rdquo; button tapped on living room hub.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-xs text-primary">check_circle</span> Hardware Touch Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Dynamic recent user activities (if any new ones) */}
            {summary.recentActivities.filter(a => !['act_scam_1', 'act_companion_1', 'act_med_1'].includes(a.id)).slice(0, 3).map((act) => (
              <div key={act.id} className="relative group">
                <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-xs">info</span>
                </span>
                <div className="flex flex-col bg-surface-container-lowest rounded-xl p-3 border border-outline-variant/30 shadow-xs timeline-card">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant uppercase">
                      {act.type.replace('_', ' ')}
                    </span>
                    <span className="text-xs text-on-surface-variant font-medium">
                      {new Date(act.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="font-headline text-sm text-on-surface font-bold mt-1">{act.title}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{act.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Home Ambience Live Card */}
        <div className="bg-surface-container rounded-2xl p-4 border border-outline-variant/40 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">sensors</span>
              <h3 className="font-headline text-base text-on-surface font-bold">Home Ambience</h3>
            </div>
            <span className="text-xs text-primary font-bold flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-lg border border-primary/15">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot"></span> Normal 24°C
            </span>
          </div>

          <div
            onClick={() => setAmbienceModalOpen(true)}
            className="relative rounded-xl overflow-hidden h-36 bg-cover bg-center shadow-xs border border-outline-variant/30 group cursor-pointer"
            data-alt="Warm tidy Indian living room in Janakpuri Delhi with brass diya and elder friendly tablet dock"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKyY_CY1Jz7lNscPqBU4FD-E7eA9mV737_3nTjRM1T0xPGSK5hsuXf3pcP5dmxW0jJPb9jdtiPU72V8il5G-_pIIM5f2u55uZOnl2nfx_kzQnBa-Q9pUcCY4KFAn8qm1Xz-V6Bl-sBRJRSeRImCtHmjC0uYCf9fnSYlNOVCBrCxxpUVyt48OY8mzaMOteSZnVtLOshu_HikpnDN5cYoyVIk08jfFMLU1gQWq1ScoYe40TYbID05OJt')",
            }}
            title="Click to view live home sensors"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-inverse-surface/30 to-transparent flex items-end p-3 transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="flex items-center justify-between w-full text-surface-container-lowest">
                <div className="flex items-center gap-1.5 text-xs font-medium">
                  <span className="material-symbols-outlined text-base text-primary-fixed animate-bounce" style={{ animationDuration: '2.2s' }}>
                    home_pin
                  </span>
                  <span>Janakpuri B-Block Hub • Motion in Living Room (5m ago)</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-inverse-surface/60 backdrop-blur-md px-2 py-0.5 rounded text-surface-bright border border-white/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-ping"></span> Quiet &amp; Safe
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 8. SOC 2 CC7.2 Trust & Security Compliance Shield */}
        <div className="rounded-2xl bg-surface-container-low p-4 text-on-surface-variant flex flex-col items-center text-center border border-outline-variant/40 shadow-xs mb-3 transition-all hover:bg-surface-container/60">
          <div className="flex items-center justify-center gap-1.5 text-primary mb-1">
            <span className="material-symbols-outlined text-xl">verified_user</span>
            <span className="font-headline text-xs font-bold tracking-wider uppercase text-on-surface">
              SOC 2 CC7.2 &amp; HIPAA Safeguarded
            </span>
          </div>
          <p className="text-xs leading-relaxed max-w-sm text-on-surface-variant">
            End-to-End Encrypted Healthcare Node. Real-time telemetry, panic logs, and AI companion conversations are tokenized and protected under ISO/IEC 27001 guidelines.
          </p>
          <div className="mt-2.5 flex items-center gap-2 text-[11px] font-medium text-outline">
            <span>Node: DEL-HUB-8472</span>
            <span>•</span>
            <span>TLS 1.3 Strict</span>
            <span>•</span>
            <button
              onClick={onOpenAudit}
              className="text-primary font-bold hover:underline transition-colors cursor-pointer"
            >
              Verified Audit Trail
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Modals */}
      <VoiceNoteModal
        isOpen={voiceNoteOpen}
        onClose={() => setVoiceNoteOpen(false)}
        onSendSuccess={(text) => {
          showToast(`Voice note relayed: "${text.substring(0, 28)}..."`);
          onRefresh();
        }}
      />

      <VoIPCallModal
        isOpen={voipCallOpen}
        onClose={() => setVoipCallOpen(false)}
        onCallEnded={(dur) => {
          showToast(`VoIP Call completed (${dur}s duration). Ramesh Papa was cheerful!`);
          onRefresh();
        }}
      />

      <AddMedModal
        isOpen={addMedOpen}
        onClose={() => setAddMedOpen(false)}
        onSuccess={() => {
          showToast('Prescription added and synced with Papa\'s hub!');
          onRefresh();
        }}
      />

      <HomeAmbienceModal
        isOpen={ambienceModalOpen}
        onClose={() => setAmbienceModalOpen(false)}
      />

      <LogVitalsModal
        isOpen={vitalsModalOpen}
        onClose={() => setVitalsModalOpen(false)}
        onSuccess={() => {
          showToast('Health vitals recorded and verified!');
          onRefresh();
        }}
      />

      {summary.activeSos && (
        <EmergencyDispatchModal
          isOpen={dispatchModalOpen || !!summary.activeSos}
          onClose={() => setDispatchModalOpen(false)}
          activeSos={summary.activeSos}
          senior={summary.senior}
          onResolved={() => {
            showToast('Emergency resolved and marked safe.');
            onRefresh();
          }}
        />
      )}
    </div>
  );
}

