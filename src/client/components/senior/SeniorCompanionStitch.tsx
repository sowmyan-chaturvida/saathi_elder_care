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

type SeniorLanguage = 'hindi' | 'hinglish' | 'english';
type TextScale = 'normal' | 'large' | 'extra-large';

export function SeniorCompanionStitch({
  summary,
  onRefresh,
  onOpenScamShield,
}: SeniorCompanionStitchProps) {
  const [currentTime, setCurrentTime] = useState('');
  const [language, setLanguage] = useState<SeniorLanguage>('hinglish');
  const [textScale, setTextScale] = useState<TextScale>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [speechRate, setSpeechRate] = useState<0.92 | 0.75>(0.92);

  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [companionReply, setCompanionReply] = useState(
    'Namaste Ramesh ji! Aaj subah mausam suhana hai. Aapki chai ho gayi?'
  );
  const [sosCountdown, setSosCountdown] = useState<number | null>(null);
  const [sosFired, setSosFired] = useState(false);
  const [medLoadingId, setMedLoadingId] = useState<string | null>(null);
  const [fallSimulating, setFallSimulating] = useState(false);

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
      utterance.rate = speechRate;
      utterance.lang = language === 'hindi' ? 'hi-IN' : 'en-IN';
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleTestAudio = () => {
    if (language === 'hindi') {
      const msg = 'नमस्ते रमेश जी! आपका स्वास्थ्य बहुत अच्छा रहे। अपनी दवाई समय पर ले लीजिए। साथी हमेशा आपके साथ है।';
      setCompanionReply(msg);
      speakText(msg);
    } else if (language === 'english') {
      const msg = 'Good morning Ramesh ji! Wishing you energy, health, and a happy day. Saathi companion is active.';
      setCompanionReply(msg);
      speakText(msg);
    } else {
      const msg = 'Namaste Ramesh ji! Aaj mausam bahut achha hai. Chai peene ke baad thodi der dhoop mein baithiye.';
      setCompanionReply(msg);
      speakText(msg);
    }
  };

  const handleOrbClick = async () => {
    if (isListening) return;

    setIsListening(true);
    setCompanionReply(
      language === 'hindi'
        ? 'सुन रहे हैं, रमेश जी... (Listening)'
        : language === 'english'
        ? 'Listening to you, Ramesh ji...'
        : 'Sunte hain, Ramesh ji... (Listening)'
    );

    // Check SpeechRecognition support
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = language === 'hindi' ? 'hi-IN' : 'en-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = async (event: any) => {
        setIsListening(false);
        const transcript = event.results[0][0].transcript;
        setCompanionReply(`"${transcript}"`);

        try {
          const res = await postConverse(transcript);
          const reply = res.reply || (language === 'hindi' ? 'बहुत बढ़िया रमेश जी, मैं समझ गया!' : 'Bahut badhiya Ramesh ji, main samajh gaya!');
          setCompanionReply(reply);
          speakText(reply);
          onRefresh();
        } catch (e) {
          const fallback = language === 'hindi' ? 'हाँ रमेश जी! मैं आपकी सेवा में हाज़िर हूँ।' : 'Haan Ramesh ji! Main aapki seva mein hazir hoon.';
          setCompanionReply(fallback);
          speakText(fallback);
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
        const fallback = language === 'hindi'
          ? 'हाँ रमेश जी! मैं आपको सुन रहा हूँ, बताइए कैसा लग रहा है?'
          : 'Haan Ramesh ji! Main aapko sun raha hoon, bataiye kaisa lag raha hai?';
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

  const handleServerPrompt = async (promptText: string) => {
    setIsListening(false);
    setCompanionReply(language === 'hindi' ? 'सोच रहे हैं, रमेश जी...' : 'Soch rahe hain, Ramesh ji... (Consulting Saathi)');
    try {
      const res = await postConverse(promptText);
      const reply = res.reply || 'Bahut badhiya Ramesh ji!';
      setCompanionReply(reply);
      speakText(reply);
      onRefresh();
    } catch (e) {
      console.error('Server conversation error:', e);
      const fallback = 'Haan Ramesh ji! Main aapki seva mein hazir hoon.';
      setCompanionReply(fallback);
      speakText(fallback);
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

      const praise = language === 'hindi'
        ? `शाबाश रमेश जी! ${med.name} लेने के लिए धन्यवाद।`
        : language === 'english'
        ? `Well done Ramesh ji! ${med.name} recorded successfully.`
        : `Shabash Ramesh ji! ${med.name} lene ke liye dhanyavaad.`;

      speakText(praise);
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

  const handleSimulateFall = async () => {
    setFallSimulating(true);
    playSiren();
    try {
      await postTriggerSos('fall_sensor');
      setSosFired(true);
      onRefresh();
      speakText('Dhyan dein! Fall sensor ne girne ka aabhas kiya hai. Priya ji ko turant suchit kiya gaya hai!');
    } catch (e) {
      console.error(e);
    } finally {
      setFallSimulating(false);
    }
  };

  // Scale classes
  const scaleClass =
    textScale === 'extra-large'
      ? 'text-lg sm:text-xl'
      : textScale === 'large'
      ? 'text-base sm:text-lg'
      : 'text-sm';

  const headingScale =
    textScale === 'extra-large'
      ? 'text-3xl sm:text-4xl'
      : textScale === 'large'
      ? 'text-2xl sm:text-3xl'
      : 'text-xl sm:text-2xl';

  return (
    <div
      className={`flex flex-col relative w-full pt-20 pb-28 min-h-screen transition-colors ${
        highContrast ? 'bg-black text-white font-sans' : 'bg-surface text-on-surface'
      }`}
    >
      <div className="flex flex-col w-full px-4 space-y-4 max-w-lg mx-auto">
        {/* Accessibility & Language Quick Switcher Bar */}
        <div
          className={`p-3 rounded-2xl border shadow-xs flex flex-col gap-2.5 ${
            highContrast
              ? 'bg-zinc-900 border-yellow-400 text-yellow-300'
              : 'bg-surface-container-low border-outline-variant/40'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-headline font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-base">accessibility_new</span>
              Senior Easy Controls
            </span>
            {/* Audio Test Button */}
            <button
              onClick={handleTestAudio}
              className="px-2.5 py-1 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
              title="Speak a greeting aloud"
            >
              <span className="material-symbols-outlined text-sm">volume_up</span>
              <span>Test Voice</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            {/* Language Selector */}
            <div className="flex items-center bg-surface-container rounded-xl p-1 border border-outline-variant/30">
              <button
                onClick={() => setLanguage('hindi')}
                className={`flex-1 py-1 rounded-lg text-center font-bold text-[11px] transition-all cursor-pointer ${
                  language === 'hindi' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant'
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => setLanguage('hinglish')}
                className={`flex-1 py-1 rounded-lg text-center font-bold text-[11px] transition-all cursor-pointer ${
                  language === 'hinglish' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant'
                }`}
              >
                Hinglish
              </button>
              <button
                onClick={() => setLanguage('english')}
                className={`flex-1 py-1 rounded-lg text-center font-bold text-[11px] transition-all cursor-pointer ${
                  language === 'english' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant'
                }`}
              >
                English
              </button>
            </div>

            {/* Font Zoom Controls */}
            <div className="flex items-center bg-surface-container rounded-xl p-1 border border-outline-variant/30">
              <button
                onClick={() => setTextScale('normal')}
                className={`flex-1 py-1 rounded-lg text-center font-bold text-[11px] transition-all cursor-pointer ${
                  textScale === 'normal' ? 'bg-secondary text-on-secondary shadow-xs' : 'text-on-surface-variant'
                }`}
                title="Normal text"
              >
                A
              </button>
              <button
                onClick={() => setTextScale('large')}
                className={`flex-1 py-1 rounded-lg text-center font-bold text-xs transition-all cursor-pointer ${
                  textScale === 'large' ? 'bg-secondary text-on-secondary shadow-xs' : 'text-on-surface-variant'
                }`}
                title="Large text (+20%)"
              >
                A+
              </button>
              <button
                onClick={() => setTextScale('extra-large')}
                className={`flex-1 py-1 rounded-lg text-center font-extrabold text-sm transition-all cursor-pointer ${
                  textScale === 'extra-large' ? 'bg-secondary text-on-secondary shadow-xs' : 'text-on-surface-variant'
                }`}
                title="Extra large text (+40%)"
              >
                A++
              </button>
            </div>
          </div>

          {/* High Contrast & Speech Speed toggles */}
          <div className="flex items-center justify-between pt-1 border-t border-outline-variant/20 text-[11px]">
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-bold cursor-pointer transition-colors ${
                highContrast ? 'bg-yellow-400 text-black' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
              }`}
            >
              <span className="material-symbols-outlined text-sm">contrast</span>
              <span>{highContrast ? 'High Contrast ON' : 'High Contrast'}</span>
            </button>

            <button
              onClick={() => setSpeechRate(speechRate === 0.92 ? 0.75 : 0.92)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined text-sm">speed</span>
              <span>Speech: {speechRate === 0.75 ? 'Gentle Slow (0.75x)' : 'Normal (0.9x)'}</span>
            </button>
          </div>
        </div>

        {/* Dignified Senior Greeting Card */}
        <div
          className={`rounded-3xl p-5 shadow-md relative overflow-hidden transition-all ${
            highContrast
              ? 'bg-zinc-900 border-2 border-yellow-400 text-yellow-300'
              : 'bg-gradient-to-br from-primary via-primary-container to-surface-tint text-on-primary'
          }`}
        >
          <div className="flex items-start justify-between relative z-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-90">
                <span>Janakpuri, New Delhi</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  {currentTime || '08:45 AM'}
                </span>
              </div>

              <h1 className={`font-headline font-bold ${headingScale} mt-1 tracking-tight`}>
                {language === 'hindi'
                  ? 'नमस्ते रमेश जी! 🙏'
                  : language === 'english'
                  ? 'Good Day Ramesh Uncle! 🙏'
                  : 'Namaste Ramesh Uncle! 🙏'}
              </h1>
              <p className={`opacity-90 ${scaleClass} font-medium mt-1`}>
                {language === 'hindi'
                  ? 'आपका स्वास्थ्य अच्छा रहे। साथी हमेशा आपके साथ है।'
                  : language === 'english'
                  ? 'Wishing you a peaceful and energetic day.'
                  : 'Wishing you a peaceful, healthy day. Saathi is always here with you.'}
              </p>
            </div>

            <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot"></span>
              <span>Priya Connected</span>
            </div>
          </div>
        </div>

        {/* 1. Voice Companion Orb Card */}
        <div
          className={`rounded-3xl p-5 border shadow-sm text-center flex flex-col items-center ${
            highContrast
              ? 'bg-zinc-900 border-yellow-400/80 text-white'
              : 'bg-surface-container border-outline-variant/40'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-2">
            <span className="font-headline font-bold text-xs uppercase tracking-wide flex items-center gap-1">
              <span className="material-symbols-outlined text-base text-primary">psychology</span>
              {language === 'hindi' ? 'एआई आवाज साथी' : 'AI Voice Companion'}
            </span>
            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant">
              {language.toUpperCase()}
            </span>
          </div>

          {/* Interactive Breathing Orb */}
          <div className="my-3 relative flex items-center justify-center">
            <button
              onClick={handleOrbClick}
              aria-label="Tap to speak with Saathi"
              className={`w-32 h-32 rounded-full flex flex-col items-center justify-center transition-all cursor-pointer shadow-lg ${
                isListening
                  ? 'bg-error text-on-error scale-110 animate-pulse'
                  : isSpeaking
                  ? 'bg-tertiary-container text-on-tertiary-container orb-active-pulse'
                  : 'bg-gradient-to-tr from-primary to-primary-container text-on-primary orb-breathe hover:scale-105 active:scale-95'
              }`}
            >
              <span className="material-symbols-outlined text-5xl">
                {isListening ? 'mic' : isSpeaking ? 'volume_up' : 'graphic_eq'}
              </span>
              <span className="text-xs font-bold mt-1 uppercase tracking-tight">
                {isListening
                  ? 'Listening...'
                  : isSpeaking
                  ? 'Speaking...'
                  : language === 'hindi'
                  ? 'बोलने के लिए छुएं'
                  : 'Tap to Speak'}
              </span>
            </button>
          </div>

          {/* Spoken Companion Dialogue Box */}
          <div
            className={`w-full mt-2 p-3.5 rounded-2xl border text-left ${
              highContrast
                ? 'bg-black border-yellow-400/50 text-yellow-200'
                : 'bg-surface-container-lowest border-outline-variant/30 text-on-surface'
            }`}
          >
            <p className="text-xs text-on-surface-variant font-medium flex items-center gap-1.5 mb-1">
              <span className="material-symbols-outlined text-sm text-primary">chat_bubble</span>
              <span>Saathi Response:</span>
            </p>
            <p className={`font-headline ${scaleClass} font-semibold leading-relaxed`}>
              &ldquo;{companionReply}&rdquo;
            </p>
          </div>

          {/* 1-Tap Quick Conversation Topics */}
          <div className="w-full mt-3 grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleServerPrompt('Mujhe Kishore Kumar ji ka koi gaana aur trivia batayein')}
              className="p-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/30 text-left font-semibold text-on-surface flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>🎵</span>
              <span className="truncate">Kishore Kumar Trivia</span>
            </button>
            <button
              onClick={() => handleServerPrompt('Aaj New Delhi Janakpuri ka mausam kaisa hai?')}
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
            <h2 className={`font-headline font-bold ${headingScale} text-on-surface flex items-center gap-2`}>
              <span className="material-symbols-outlined text-primary text-2xl">medication</span>
              {language === 'hindi' ? 'आज की दवाई' : "Aaj Ki Dawai (Today's Medicines)"}
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
                    : highContrast
                    ? 'bg-zinc-900 border-2 border-yellow-400'
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

                    <h3 className={`font-headline font-bold ${scaleClass} text-on-surface mt-1 truncate`}>
                      {med.name}
                    </h3>
                    <p className="text-xs text-on-surface-variant font-medium">
                      {med.dosage} • {med.notes || 'Routine prescription'}
                    </p>
                    <p className="text-xs text-primary font-semibold mt-1">
                      {language === 'hindi' ? med.instructionsHindi : med.instructionsHindi || med.instructionsEnglish}
                    </p>
                  </div>

                  {/* Giant Tactile Button */}
                  <button
                    onClick={() => handleTakeMedication(med)}
                    disabled={isTaken || isLoading}
                    className={`px-4 py-3 rounded-2xl font-headline font-bold ${scaleClass} flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
                      isTaken
                        ? 'bg-primary/10 text-primary border border-primary/20 cursor-default'
                        : 'bg-primary text-on-primary hover:bg-primary-container active:scale-95'
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {isTaken ? 'check' : 'check_circle'}
                    </span>
                    <span>
                      {isTaken
                        ? 'Taken ✓'
                        : isLoading
                        ? 'Saving...'
                        : language === 'hindi'
                        ? 'मैंने ले ली'
                        : 'Maine Le Li'}
                    </span>
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
                Sandehik Message &amp; Screenshot Checker (Scam Shield)
              </h3>
              <p className="text-xs text-on-surface-variant">
                WhatsApp, SMS ya Screenshot photo upload karke check karein
              </p>
            </div>
          </div>
          <span className="material-symbols-outlined text-xl text-primary">arrow_forward_ios</span>
        </div>

        {/* 4. Fall Detection Simulation Widget */}
        <div className="p-3.5 rounded-2xl bg-secondary-container/30 border border-secondary/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-secondary text-on-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">personal_injury</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-xs text-on-surface">Fall Detection Motion Sensor</h4>
              <p className="text-[11px] text-on-surface-variant">Simulate living room impact / fall alert</p>
            </div>
          </div>
          <button
            onClick={handleSimulateFall}
            disabled={fallSimulating}
            className="px-3 py-1.5 rounded-xl bg-secondary text-on-secondary font-headline font-bold text-xs hover:bg-secondary/90 transition-all cursor-pointer shadow-xs flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">notification_important</span>
            <span>{fallSimulating ? 'Testing...' : 'Simulate Fall'}</span>
          </button>
        </div>

        {/* 5. Giant Emergency SOS Trigger with Accidental Cancel Countdown */}
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
