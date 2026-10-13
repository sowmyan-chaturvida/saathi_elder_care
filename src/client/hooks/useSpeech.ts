'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// Browser Web Speech Recognition interface
interface SpeechRecognitionEvent {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
}

interface ISpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onstart: () => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: { error: string }) => void;
  onend: () => void;
}

export function useSpeech() {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [speechSupported, setSpeechSupported] = useState(false);

  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as unknown as { SpeechRecognition?: new () => ISpeechRecognition }).SpeechRecognition ||
        (window as unknown as { webkitSpeechRecognition?: new () => ISpeechRecognition }).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US'; // English speech recognition

        recognition.onstart = () => setIsListening(true);
        recognition.onresult = (event: SpeechRecognitionEvent) => {
          const current = event.results[0][0].transcript;
          setTranscript(current);
        };
        recognition.onerror = () => setIsListening(false);
        recognition.onend = () => setIsListening(false);

        recognitionRef.current = recognition;
        setSpeechSupported(true);
      }
    }
  }, []);

  const startListening = useCallback((onSpeechDetected?: (text: string) => void) => {
    if (recognitionRef.current) {
      setTranscript('');
      try {
        if (onSpeechDetected) {
          recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
            const current = event.results[0][0].transcript;
            setTranscript(current);
            onSpeechDetected(current);
          };
        }
        recognitionRef.current.start();
      } catch (e) {
        console.warn('Speech recognition start error:', e);
      }
    }
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        console.warn('Speech recognition stop error:', e);
      }
      setIsListening(false);
    }
  }, []);

  const speakText = useCallback((text: string, onComplete?: () => void) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Stop any active speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.92; // Slightly measured, respectful pace for senior
    utterance.pitch = 1.0;
    utterance.lang = 'en-US';

    // Pick clear English voice if available
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') || v.lang.includes('en-US') || v.lang.includes('en-IN') || v.name.includes('English'));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      onComplete?.();
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      onComplete?.();
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  return {
    isListening,
    isSpeaking,
    transcript,
    speechSupported,
    startListening,
    stopListening,
    speakText,
    stopSpeaking,
  };
}
