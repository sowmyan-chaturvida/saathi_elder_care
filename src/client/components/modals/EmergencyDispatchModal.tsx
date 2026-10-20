'use client';

import React, { useState } from 'react';
import { SosAlert, SeniorProfile } from '@/types/care';
import { postResolveSos } from '@/client/services/apiClient';

interface EmergencyDispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSos: SosAlert;
  senior: SeniorProfile;
  onResolved: () => void;
}

export function EmergencyDispatchModal({
  isOpen,
  onClose,
  activeSos,
  senior,
  onResolved,
}: EmergencyDispatchModalProps) {
  const [resolving, setResolving] = useState(false);
  const [resolveNote, setResolveNote] = useState(`Spoke with ${senior.preferredName || 'parent'} and verified status. Everything is safe.`);

  if (!isOpen) return null;

  const isFall = activeSos.triggerSource === 'fall_sensor';
  const triggerLabel = isFall
    ? 'Fall Detection Sensor Alert'
    : activeSos.triggerSource === 'voice_trigger'
    ? 'Voice Distress Call'
    : 'Physical SOS Button Press';

  const timeFormatted = new Date(activeSos.triggeredAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const whatsappMessage = encodeURIComponent(
    `🚨 SAATHI EMERGENCY ALERT 🚨\n\nElder: ${senior.name} (Age ${senior.age})\nLocation: ${senior.locality}, ${senior.city}\nEvent: ${triggerLabel}\nTime: ${timeFormatted}\n\nLive GPS / Status Link: https://saathi.care/status/${senior.id}\nPlease respond immediately or call emergency dispatch.`
  );

  const smsMessage = encodeURIComponent(
    `EMERGENCY: ${senior.preferredName} triggered ${triggerLabel} at ${timeFormatted} in ${senior.locality}. Call immediately: +91 98112 45678`
  );

  const handleResolve = async () => {
    setResolving(true);
    try {
      await postResolveSos('Priya Sharma (Daughter)', resolveNote);
      onResolved();
      onClose();
    } catch (e) {
      console.error(e);
    } finally {
      setResolving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-error-container/80 backdrop-blur-md animate-fade-in">
      <div className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-6 shadow-2xl border-2 border-error text-on-surface">
        {/* Urgent Header */}
        <div className="flex items-center justify-between pb-3 border-b border-error/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-error text-on-error flex items-center justify-center animate-bounce">
              <span className="material-symbols-outlined text-2xl">e911_emergency</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-extrabold tracking-wider bg-error text-on-error px-2 py-0.5 rounded-full">
                  LIVE EMERGENCY
                </span>
                <span className="text-xs text-on-surface-variant font-mono">{timeFormatted}</span>
              </div>
              <h2 className="font-headline font-bold text-lg text-error mt-0.5">
                {isFall ? '⚠️ Fall Detected in Living Room' : '🚨 Urgent SOS Triggered'}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Location & Senior Info */}
        <div className="mt-4 p-3.5 rounded-2xl bg-error/5 border border-error/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-error text-xl">location_on</span>
            <div>
              <p className="font-headline font-bold text-xs text-on-surface">{senior.name} ({senior.relation || 'Parent'})</p>
              <p className="text-[11px] text-on-surface-variant">{senior.locality}, {senior.city}</p>
            </div>
          </div>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(senior.locality + ', ' + senior.city)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-primary underline flex items-center gap-1 hover:text-primary/80"
          >
            <span>View Map</span>
            <span className="material-symbols-outlined text-xs">open_in_new</span>
          </a>
        </div>

        {/* Multi-Tier Notification Dispatches */}
        <div className="mt-4 space-y-2.5">
          <p className="text-[11px] font-headline font-bold uppercase tracking-wider text-on-surface-variant">
            Instant Caregiver Escalation Channels
          </p>

          {/* WhatsApp Primary Caregiver Button */}
          <a
            href={`https://api.whatsapp.com/send?phone=919811245678&text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-3 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-on-surface transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#25D366] text-white flex items-center justify-center font-bold">
                WA
              </div>
              <div>
                <p className="font-headline font-bold text-xs group-hover:text-[#128C7E]">
                  WhatsApp Alert to Priya (Daughter)
                </p>
                <p className="text-[10px] text-on-surface-variant">+91 98112 45678 • Indiranagar, Bangalore</p>
              </div>
            </div>
            <span className="text-[11px] font-bold text-[#128C7E] flex items-center gap-1">
              Send Alert <span className="material-symbols-outlined text-sm">send</span>
            </span>
          </a>

          {/* WhatsApp Doctor Button */}
          <a
            href={`https://api.whatsapp.com/send?phone=919871123456&text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-3 rounded-2xl bg-secondary-container/40 hover:bg-secondary-container/70 border border-secondary/30 text-on-surface transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-secondary text-on-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-base">medical_services</span>
              </div>
              <div>
                <p className="font-headline font-bold text-xs">WhatsApp Dr. Anand Verma (Physician)</p>
                <p className="text-[10px] text-on-surface-variant">+91 98711 23456 • Janakpuri Clinic</p>
              </div>
            </div>
            <span className="text-[11px] font-bold text-secondary flex items-center gap-1">
              Notify Clinic <span className="material-symbols-outlined text-sm">send</span>
            </span>
          </a>

          {/* Cellular & SMS Row */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href="tel:+919811245678"
              className="py-2.5 px-3 rounded-xl bg-error text-on-error font-headline font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-error/90 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">call</span>
              Direct Call ({senior.relation || 'Parent'})
            </a>
            <a
              href={`sms:+919811245678?body=${smsMessage}`}
              className="py-2.5 px-3 rounded-xl bg-surface-container-high text-on-surface font-headline font-bold text-xs flex items-center justify-center gap-1.5 border border-outline-variant hover:bg-surface-container-highest transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">sms</span>
              Send SMS Alert
            </a>
          </div>
        </div>

        {/* Resolution section */}
        <div className="mt-5 pt-3 border-t border-outline-variant/30 space-y-2">
          <label className="text-[11px] font-semibold text-on-surface-variant">Resolution Log Note</label>
          <input
            type="text"
            value={resolveNote}
            onChange={(e) => setResolveNote(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/60 text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            onClick={handleResolve}
            disabled={resolving}
            className="w-full py-2.5 rounded-xl bg-surface-container-highest text-on-surface font-headline font-bold text-xs border border-outline-variant hover:bg-surface-container transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            {resolving ? 'Resolving Emergency...' : 'Mark Emergency as Resolved & Safe'}
          </button>
        </div>
      </div>
    </div>
  );
}
