'use client';

import React, { useState } from 'react';
import { Mic, MicOff, Volume2, Sparkles, Send } from 'lucide-react';
import { useSpeech } from '@/client/hooks/useSpeech';
import { useAudioSynth } from '@/client/hooks/useAudioSynth';
import { postConverse } from '@/client/services/apiClient';

interface VoiceCompanionOrbProps {
  onActivityLogged?: () => void;
}

export function VoiceCompanionOrb({ onActivityLogged }: VoiceCompanionOrbProps) {
  const [inputText, setInputText] = useState('');
  const [lastReply, setLastReply] = useState<string>('Hello Ramesh Uncle! I am Saathi, your companion. How are you feeling today?');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);

  const { isListening, isSpeaking, transcript, startListening, stopListening, speakText, stopSpeaking } = useSpeech();
  const { playSoftPing } = useAudioSynth();

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    setInputText('');
    setIsLoading(true);
    playSoftPing();

    try {
      const response = await postConverse(textToSend, conversationHistory);
      const assistantReply = response.reply;

      setLastReply(assistantReply);
      setConversationHistory(prev => [
        ...prev.slice(-4), // keep last 4 turns
        { role: 'user', content: textToSend },
        { role: 'assistant', content: assistantReply }
      ]);

      // Speak reply aloud in English
      speakText(assistantReply);
      onActivityLogged?.();
    } catch (err) {
      console.error('Companion conversation error:', err);
      const fallback = 'I am sorry Ramesh Uncle, I could not hear that clearly. Could you please repeat?';
      setLastReply(fallback);
      speakText(fallback);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMicToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      stopSpeaking();
      playSoftPing();
      startListening((detectedText) => {
        if (detectedText.trim()) {
          handleSendMessage(detectedText);
        }
      });
    }
  };

  const quickPrompts = [
    'Hello Saathi!',
    'How is the weather today?',
    'When is my next medicine?',
    'Play a classic retro song',
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 to-orange-50/60 rounded-3xl p-6 sm:p-8 border-2 border-amber-200/80 shadow-lg relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500 text-white rounded-2xl shadow-sm">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Saathi Voice Companion</h2>
            <p className="text-slate-600 text-sm">Speak naturally or tap any of the prompts below</p>
          </div>
        </div>

        {isSpeaking && (
          <button
            onClick={stopSpeaking}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-200 text-amber-900 hover:bg-amber-300 transition-colors"
          >
            <Volume2 className="w-3.5 h-3.5 animate-bounce" />
            <span>Stop Speaking</span>
          </button>
        )}
      </div>

      {/* Animated Orb Centerpiece */}
      <div className="flex flex-col items-center justify-center my-6">
        <div className="relative flex items-center justify-center">
          {/* Outer glowing pulsing ring */}
          <div
            className={`absolute w-36 h-36 rounded-full transition-all duration-700 ${
              isListening
                ? 'bg-amber-400/40 orb-active-pulse'
                : isSpeaking
                ? 'bg-teal-400/30 orb-pulse'
                : 'bg-amber-200/30 orb-pulse'
            }`}
          />

          {/* Central Touch Target Sphere */}
          <button
            onClick={handleMicToggle}
            className={`relative w-28 h-28 rounded-full flex flex-col items-center justify-center text-white shadow-xl transition-all duration-300 transform active:scale-95 ${
              isListening
                ? 'bg-gradient-to-tr from-amber-600 to-rose-500 scale-105 ring-4 ring-amber-300'
                : isSpeaking
                ? 'bg-gradient-to-tr from-teal-500 to-emerald-600'
                : 'bg-gradient-to-tr from-amber-500 to-orange-600 hover:scale-102 hover:shadow-2xl'
            }`}
          >
            {isListening ? (
              <>
                <MicOff className="w-10 h-10 animate-pulse text-white" />
                <span className="text-[11px] font-bold mt-1 uppercase tracking-wider">Listening...</span>
              </>
            ) : (
              <>
                <Mic className="w-10 h-10 text-white" />
                <span className="text-[11px] font-bold mt-1 uppercase tracking-wider">Tap to Speak</span>
              </>
            )}
          </button>
        </div>

        {/* Live speech transcription bubble */}
        {isListening && transcript && (
          <div className="mt-4 px-4 py-2 bg-white/90 backdrop-blur rounded-2xl border border-amber-300 text-slate-800 text-sm font-medium shadow-sm animate-fade-in">
            &ldquo;{transcript}&rdquo;
          </div>
        )}
      </div>

      {/* Assistant Voice Response Balloon */}
      <div className="bg-white rounded-2xl p-5 border border-amber-200/90 shadow-sm mb-5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold shrink-0 mt-0.5">
            S
          </div>
          <div className="flex-1">
            <p className="text-xs text-amber-800 font-semibold mb-1 uppercase tracking-wider">Saathi</p>
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              {isLoading ? 'Saathi is thinking...' : lastReply}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Prompt Pills */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Quick Suggestions:</p>
        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(prompt)}
              className="px-4 py-2.5 bg-white hover:bg-amber-100/80 active:bg-amber-200 border border-amber-200 text-slate-800 font-medium text-sm rounded-xl shadow-xs transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Manual Text Input Fallback */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputText);
        }}
        className="flex items-center gap-2 mt-4"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Or type your message here..."
          className="flex-1 px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-800 text-base focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className="p-3 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 disabled:opacity-50 text-white rounded-xl shadow-sm transition-colors"
          title="Send"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
