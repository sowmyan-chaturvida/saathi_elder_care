'use client';

import React, { useState, useEffect } from 'react';
import { FamilySummary, Medication } from '@/types/care';
import { postTakeMedication, postTriggerSos, postConverse } from '@/client/services/apiClient';
import confetti from 'canvas-confetti';

interface SeniorCompanionStitchProps {
  summary: FamilySummary;
  onRefresh: () => void;
  onOpenScamShield: () => void;
}

export function SeniorCompanionStitch({
  summary,
  onRefresh,
  onOpenScamShield,
}: SeniorCompanionStitchProps) {
  const [currentTime, setCurrentTime] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [companionReply, setCompanionReply] = useState(
    'Namaste Ramesh ji! Aaj subah mausam suhana hai. Aapki chai ho gayi?'
  );
  const [sosCountdown, setSosCountdown] = useState<number | null>(null);
  const [sosFired, setSosFired] = useState(false);
  const [medLoadingId, setMedLoadingId] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Web Audio chime for celebrations
  const playChime = () => {
    try {
      if (typeof window === 'undefined') return;
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.3); // G5
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.65);
    } catch (e) {
      console.warn('Audio chime error', e);
    }
  };

  // Web Audio emergency siren
  const playSiren = () => {
    try {
      if (typeof window === 'undefined') return;
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(1400, ctx.currentTime + 0.4);
      osc.frequency.linearRampToValueAtTime(800, ctx.currentTime + 0.8);
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch (e) {
      console.warn('Siren error', e);
    }
  };

  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.92;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleOrbClick = async () => {
    if (isListening) return;

    setIsListening(true);
    setCompanionReply('Sunte hain, Ramesh ji... (Listening)');

    // Check SpeechRecognition support
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'hi-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = async (event: any) => {
        setIsListening(false);
        const transcript = event.results[0][0].transcript;
        setCompanionReply(`"${transcript}"`);

        try {
          const res = await postConverse(transcript);
          const reply = res.reply || 'Bahut badhiya Ramesh ji, main samajh gaya!';
          setCompanionReply(reply);
          speakText(reply);
          onRefresh();
        } catch (e) {
          const fallback = 'Haan Ramesh ji! Main aapki seva mein hazir hoon.';
          setCompanionReply(fallback);
          speakText(fallback);
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
        const fallback = 'Haan Ramesh ji! Main aapko sun raha hoon, bataiye kaisa lag raha hai?';
        setCompanionReply(fallback);
        speakText(fallback);
      };

      recognition.start();
    } else {
      // Simulation fallback
      setTimeout(async () => {
        setIsListening(false);
        const prompt = 'Aaj mausam kaisa hai aur Kishore Kumar ka gaana bajao';
        try {
          const res = await postConverse(prompt);
          const reply = res.reply || 'Ramesh ji, New Delhi mein mausam suhana hai 24°C! Chaliye Kishore da ka gaana sunte hain.';
          setCompanionReply(reply);
          speakText(reply);
          onRefresh();
        } catch (e) {
          const fallback = 'Ramesh ji, New Delhi mein 24°C suhana mausam hai! Subah ki sair kaisi rahi?';
          setCompanionReply(fallback);
          speakText(fallback);
        }
      }, 2000);
    }
  };

  const handleTakeMedication = async (med: Medication) => {
    if (med.takenToday) return;

    setMedLoadingId(med.id);
    try {
      await postTakeMedication(med.id);
      playChime();
      try {
        confetti({
          particleCount: 65,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#316342', '#b9efc5', '#886e38', '#ffdea0'],
        });
      } catch (err) {}

      speakText(`Shabash Ramesh ji! ${med.name} lene ke liye dhanyavaad.`);
      onRefresh();
    } catch (e) {
      console.error(e);
    } finally {
      setMedLoadingId(null);
    }
  };

  // SOS button handler with 3-second accidental-touch protection
  const handleSosStart = () => {
    if (sosCountdown !== null || sosFired) return;
    setSosCountdown(3);
  };

  useEffect(() => {
    if (sosCountdown === null) return;
    if (sosCountdown > 0) {
      const timer = setTimeout(() => {
        setSosCountdown(sosCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (sosCountdown === 0) {
      // Fire SOS
      setSosFired(true);
      playSiren();
      postTriggerSos('senior_button').then(() => {
        onRefresh();
      });
      speakText('Aapka emergency alert Priya ji ko bhej diya gaya hai!');
    }
  }, [sosCountdown]);

  const handleCancelSos = () => {
    setSosCountdown(null);
    setSosFired(false);
  };

  return (
    <div className="flex flex-col relative w-full pt-20 pb-28 bg-surface min-h-screen">
      <div className="flex flex-col w-full px-4 space-y-4 max-w-lg mx-auto">
        {/* Dignified Senior Greeting Card (Terra Botanical Theme) */}
        <div className="rounded-3xl bg-gradient-to-br from-primary via-primary-container to-surface-tint text-on-primary p-5 shadow-md relative overflow-hidden mt-3">
          <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none"></div>

          <div className="flex items-start justify-between relative z-10">
            <div>
              <div className="flex items-center gap-2 text-primary-fixed text-xs font-bold uppercase tracking-wider">
                <span>Janakpuri, New Delhi</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  {currentTime || '08:45 AM'}
                </span>
              </div>

              <h1 className="font-headline font-bold text-2xl sm:text-3xl text-white mt-1 tracking-tight">
                Namaste Ramesh Uncle! 🙏
              </h1>
              <p className="text-on-primary-container text-xs sm:text-sm font-medium mt-1">
                Wishing you a peaceful, healthy day. Saathi is always here with you.
              </p>
            </div>

            <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-primary-fixed">
              <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse-dot"></span>
              <span>Priya Connected</span>
            </div>
          </div>
        </div>

        {/* 1. Voice Companion Orb Card */}
        <div className="rounded-3xl bg-surface-container p-5 border border-outline-variant/40 shadow-sm text-center flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-2">
            <span className="font-headline font-bold text-xs uppercase tracking-wide text-secondary flex items-center gap-1">
              <span className="material-symbols-outlined text-base text-primary">psychology</span>
              AI Voice Companion
            </span>
            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant">
              Hindi &amp; English
            </span>
          </div>

          {/* Interactive Breathing Orb */}
          <div className="my-3 relative flex items-center justify-center">
            <button
              onClick={handleOrbClick}
              aria-label="Tap to speak with Saathi"
              className={`w-28 h-28 rounded-full flex flex-col items-center justify-center transition-all cursor-pointer shadow-lg ${
                isListening
                  ? 'bg-error text-on-error scale-110 animate-pulse'
                  : isSpeaking
                  ? 'bg-tertiary-container text-on-tertiary-container orb-active-pulse'
                  : 'bg-gradient-to-tr from-primary to-primary-container text-on-primary orb-breathe hover:scale-105 active:scale-95'
              }`}
            >
              <span className="material-symbols-outlined text-4xl">
                {isListening ? 'mic' : isSpeaking ? 'volume_up' : 'graphic_eq'}
              </span>
              <span className="text-[11px] font-bold mt-1 uppercase tracking-tight">
                {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Tap to Speak'}
              </span>
            </button>
          </div>

          {/* Spoken Companion Dialogue Box */}
          <div className="w-full mt-2 p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 text-left">
            <p className="text-xs text-on-surface-variant font-medium flex items-center gap-1.5 mb-1">
              <span className="material-symbols-outlined text-sm text-primary">chat_bubble</span>
              <span>Saathi Response:</span>
            </p>
            <p className="font-headline text-sm font-semibold text-on-surface leading-relaxed">
              &ldquo;{companionReply}&rdquo;
            </p>
          </div>

          {/* 1-Tap Quick Conversation Topics */}
          <div className="w-full mt-3 grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => {
                const text = "Kishore Kumar ji ka mashhoor gaana 'Zindagi Ke Safar Mein' 1971 ki film Aap Ki Kasam se hai. Is gaane ko R.D. Burman ji ne compose kiya tha.";
                setCompanionReply(text);
                speakText(text);
              }}
              className="p-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/30 text-left font-semibold text-on-surface flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>🎵</span>
              <span className="truncate">Kishore Kumar Trivia</span>
            </button>
            <button
              onClick={() => {
                const text = "New Delhi Janakpuri mein aaj aasmaan saaf hai, dhoop achhi hai aur taapmaan 24 degree Celsius hai.";
                setCompanionReply(text);
                speakText(text);
              }}
              className="p-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/30 text-left font-semibold text-on-surface flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>⛅</span>
              <span className="truncate">Janakpuri Weather</span>
            </button>
          </div>
        </div>

        {/* 2. Tactile Medication Adherence Checklist */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-headline font-bold text-base text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">medication</span>
              Aaj Ki Dawai (Today&apos;s Medicines)
            </h2>
            <span className="text-xs text-primary font-bold bg-primary/10 px-2.5 py-0.5 rounded-lg">
              {summary.medicationsTakenCount} of {summary.totalMedicationsCount} Taken
            </span>
          </div>

          {summary.medications.map((med) => {
            const isTaken = med.takenToday;
            const isLoading = medLoadingId === med.id;

            return (
              <div
                key={med.id}
                className={`p-4 rounded-2xl border transition-all shadow-xs ${
                  isTaken
                    ? 'bg-surface-container-low border-primary/30 opacity-90'
                    : 'bg-surface-container-lowest border-outline-variant/40 hover:border-primary/50'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          med.timeSlot === 'morning'
                            ? 'bg-primary-fixed text-on-primary-fixed-variant'
                            : med.timeSlot === 'afternoon'
                            ? 'bg-secondary-fixed text-on-secondary-fixed-variant'
                            : 'bg-tertiary-fixed text-on-tertiary-fixed-variant'
                        }`}
                      >
                        {med.timeSlot} • {med.scheduledTime}
                      </span>
                      {isTaken && (
                        <span className="text-[10px] font-bold text-primary flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-sm">check_circle</span>
                          Maine Le Li
                        </span>
                      )}
                    </div>

                    <h3 className="font-headline font-bold text-lg text-on-surface mt-1 truncate">
                      {med.name}
                    </h3>
                    <p className="text-xs text-on-surface-variant font-medium">
                      {med.dosage} • {med.notes || 'Routine prescription'}
                    </p>
                    <p className="text-xs text-primary font-semibold mt-1">
                      {med.instructionsHindi || med.instructionsEnglish}
                    </p>
                  </div>

                  {/* Giant Tactile Button */}
                  <button
                    onClick={() => handleTakeMedication(med)}
                    disabled={isTaken || isLoading}
                    className={`px-4 py-3 rounded-2xl font-headline font-bold text-sm flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
                      isTaken
                        ? 'bg-primary/10 text-primary border border-primary/20 cursor-default'
                        : 'bg-primary text-on-primary hover:bg-primary-container active:scale-95'
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {isTaken ? 'check' : 'check_circle'}
                    </span>
                    <span>{isTaken ? 'Taken ✓' : isLoading ? 'Saving...' : 'Maine Le Li'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Scam Shield Quick Entry */}
        <div
          onClick={onOpenScamShield}
          className="p-4 rounded-2xl bg-surface-container border border-outline-variant/40 shadow-xs flex items-center justify-between hover:border-primary/50 cursor-pointer transition-all hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-error-container text-on-error-container flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">gshield</span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-sm text-on-surface">
                Sandehik Message Checker (Scam Shield)
              </h3>
              <p className="text-xs text-on-surface-variant">
                WhatsApp ya Bank SMS ko check karein ki wo asli hai ya farzi
              </p>
            </div>
          </div>
          <span className="material-symbols-outlined text-xl text-primary">arrow_forward_ios</span>
        </div>

        {/* 4. Giant Emergency SOS Trigger with Accidental Cancel Countdown */}
        <div className="rounded-3xl bg-error-container/40 p-4 border border-error/30 text-center">
          <div className="flex items-center justify-between mb-2">
            <span className="font-headline font-bold text-xs uppercase tracking-wide text-error flex items-center gap-1">
              <span className="material-symbols-outlined text-base">emergency_home</span>
              Emergency Escalation
            </span>
            <span className="text-[11px] font-semibold text-on-error-container">
              Siren + Family Alert
            </span>
          </div>

          {sosCountdown !== null ? (
            <div className="p-4 rounded-2xl bg-error text-on-error animate-pulse flex flex-col items-center">
              <p className="font-headline font-bold text-lg">
                Emergency Alert Triggering in {sosCountdown}s!
              </p>
              <p className="text-xs text-error-container mt-0.5">
                Priya and Dr. Verma will be notified immediately.
              </p>
              <button
                onClick={handleCancelSos}
                className="mt-3 px-6 py-2.5 rounded-xl bg-surface-container-lowest text-error font-bold text-xs hover:bg-surface shadow-md cursor-pointer"
              >
                Galti se dab gaya? Tap to Cancel
              </button>
            </div>
          ) : sosFired ? (
            <div className="p-4 rounded-2xl bg-error text-on-error flex flex-col items-center">
              <span className="material-symbols-outlined text-3xl">warning</span>
              <p className="font-headline font-bold text-base mt-1">EMERGENCY SOS ACTIVE</p>
              <p className="text-xs text-error-container mt-0.5">
                Siren sounded. Priya has received your urgent location and alert.
              </p>
              <button
                onClick={handleCancelSos}
                className="mt-3 px-5 py-2 rounded-xl bg-surface-container-lowest text-error font-bold text-xs hover:bg-surface shadow-md cursor-pointer"
              >
                I am Safe Now (Reset SOS)
              </button>
            </div>
          ) : (
            <button
              onClick={handleSosStart}
              className="w-full py-4 rounded-2xl bg-error text-on-error font-headline font-extrabold text-lg flex items-center justify-center gap-2 hover:bg-error/90 active:scale-95 transition-all cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-2xl">sos</span>
              <span>EMERGENCY SOS (मदद चाहिए)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
