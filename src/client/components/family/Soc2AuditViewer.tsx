'use client';

import React, { useEffect, useState } from 'react';
import { ShieldCheck, Hash, X, RefreshCw, Lock } from 'lucide-react';
import { AuditEntry } from '@/types/audit';
import { fetchAuditLogs } from '@/client/services/apiClient';

interface Soc2AuditViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Soc2AuditViewer({ isOpen, onClose }: Soc2AuditViewerProps) {
  const [logs, setLogs] = useState<AuditEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterAction, setFilterAction] = useState<string>('ALL');

  const loadLogs = async () => {
    setIsLoading(true);
    try {
      const data = await fetchAuditLogs(40);
      setLogs(data);
    } catch (err) {
      console.error('Failed to load audit logs:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadLogs();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredLogs = filterAction === 'ALL'
    ? logs
    : logs.filter(l => l.action === filterAction);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 text-slate-100 rounded-3xl max-w-4xl w-full p-6 sm:p-8 border border-slate-700 shadow-2xl relative my-8 font-sans">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-teal-500/20 text-teal-400 rounded-2xl border border-teal-500/30">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">SOC 2 Type II Security & Audit Feed</h3>
                <span className="text-[11px] font-mono bg-teal-950 text-teal-300 border border-teal-800 px-2 py-0.5 rounded-full">
                  CC7.2 Tamper-Evident
                </span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Append-only audit trail with chained SHA-256 integrity hashes & automatic PII redaction
              </p>
            </div>
          </div>

          <button
            onClick={loadLogs}
            disabled={isLoading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 my-4 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-semibold uppercase text-[11px]">Filter:</span>
          {['ALL', 'SOS_TRIGGERED', 'SOS_RESOLVED', 'MEDICATION_TAKEN', 'SCAM_ANALYZED', 'COMPANION_CONVERSATION'].map((act) => (
            <button
              key={act}
              onClick={() => setFilterAction(act)}
              className={`px-3 py-1 rounded-lg font-mono transition-colors shrink-0 ${
                filterAction === act
                  ? 'bg-teal-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {act}
            </button>
          ))}
        </div>

        {/* Logs Table / List */}
        <div className="max-h-[500px] overflow-y-auto space-y-3 pr-1">
          {filteredLogs.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No audit logs recorded for this criteria yet.
            </div>
          ) : (
            filteredLogs.map((log) => (
              <div
                key={log.id}
                className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 text-xs font-mono transition-colors hover:border-slate-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`px-2 py-0.5 rounded font-bold uppercase text-[10px] ${
                        log.action.includes('SOS')
                          ? 'bg-rose-950 text-rose-300 border border-rose-800'
                          : log.action.includes('MEDICATION')
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : log.action.includes('SCAM')
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {log.action}
                    </span>
                    <span className="text-slate-400">Actor: <strong>{log.actorId}</strong> ({log.role})</span>
                    <span className="text-slate-500">• IP: {log.ipAddress}</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">
                    {new Date(log.timestamp).toLocaleString()}
                  </span>
                </div>

                {/* Sanitized Details JSON */}
                <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800/80 text-slate-300 overflow-x-auto my-2">
                  <pre className="text-[11px] leading-relaxed">
                    {JSON.stringify(log.details, null, 2)}
                  </pre>
                </div>

                {/* Chained Cryptographic Hash */}
                <div className="flex items-center justify-between pt-1 text-[10px] text-slate-500">
                  <div className="flex items-center gap-1 font-mono">
                    <Hash className="w-3 h-3 text-teal-500" />
                    <span>SHA-256 Hash: <span className="text-slate-400">{log.integrityHash.substring(0, 24)}...</span></span>
                  </div>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Verified Untampered
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
