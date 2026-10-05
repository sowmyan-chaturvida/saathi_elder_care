'use client';

import { useCallback, useRef } from 'react';

export function useAudioSynth() {
  const sirenIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (typeof window === 'undefined') return null;
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Soothing Indian temple bell chime for medicine confirmation & positive routines
  const playTempleChime = useCallback(() => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const frequencies = [528, 792, 1056]; // Harmonic warm chime

      frequencies.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.15 / (i + 1), now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 2.5);
      });
    } catch (e) {
      console.warn('Audio chime failed to play:', e);
    }
  }, [getAudioContext]);

  // Gentle soft ping when Voice Companion activates
  const playSoftPing = useCallback(() => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, now); // E5 note

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.6);
    } catch (e) {
      console.warn('Soft ping failed:', e);
    }
  }, [getAudioContext]);

  // High-priority emergency SOS siren
  const startEmergencySiren = useCallback(() => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      if (sirenIntervalRef.current) clearInterval(sirenIntervalRef.current);

      let step = 0;
      const playSirenPulse = () => {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        const freq = step % 2 === 0 ? 880 : 660; // alternating high-low urgent tone
        step++;

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.linearRampToValueAtTime(freq + 100, now + 0.35);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.35);
      };

      playSirenPulse();
      sirenIntervalRef.current = setInterval(playSirenPulse, 400);
    } catch (e) {
      console.warn('Emergency siren failed:', e);
    }
  }, [getAudioContext]);

  const stopEmergencySiren = useCallback(() => {
    if (sirenIntervalRef.current) {
      clearInterval(sirenIntervalRef.current);
      sirenIntervalRef.current = null;
    }
  }, []);

  return {
    playTempleChime,
    playSoftPing,
    startEmergencySiren,
    stopEmergencySiren,
  };
}
