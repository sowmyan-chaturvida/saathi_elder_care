'use client';

import React from 'react';
import { ActivityLog } from '@/types/care';
import { CheckCircle2, MessageSquare, AlertTriangle, ShieldAlert, Sparkles, Clock } from 'lucide-react';

interface ActivityTimelineProps {
  activities: ActivityLog[];
}

export function ActivityTimeline({ activities }: ActivityTimelineProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'medication_taken':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 'companion_chat':
        return <MessageSquare className="w-5 h-5 text-amber-600" />;
      case 'sos_triggered':
        return <AlertTriangle className="w-5 h-5 text-rose-600 animate-bounce" />;
      case 'sos_resolved':
        return <CheckCircle2 className="w-5 h-5 text-teal-600" />;
      case 'scam_checked':
        return <ShieldAlert className="w-5 h-5 text-amber-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-slate-500" />;
    }
  };

  const formatTimestamp = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Today&apos;s Activity Timeline</h3>
          <p className="text-slate-500 text-xs">Real-time check-ins and routine adherence stream</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
          <Clock className="w-3.5 h-3.5" />
          <span>Live Updates</span>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((act) => {
          return (
            <div
              key={act.id}
              className={`p-4 rounded-2xl border transition-all ${
                act.severity === 'critical'
                  ? 'bg-rose-50 border-rose-300'
                  : act.severity === 'warning'
                  ? 'bg-amber-50 border-amber-200'
                  : act.severity === 'success'
                  ? 'bg-emerald-50/50 border-emerald-200'
                  : 'bg-slate-50/60 border-slate-200'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-white shadow-xs shrink-0 mt-0.5">
                  {getIcon(act.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-slate-900 text-sm">{act.title}</h4>
                    <span className="text-xs font-semibold text-slate-500 shrink-0">
                      {formatTimestamp(act.timestamp)}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm mt-1 leading-relaxed font-medium">
                    {act.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
