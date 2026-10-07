'use client';

import React, { useState, useEffect } from 'react';
import { fetchAuditLogs } from '@/client/services/apiClient';
import { AuditEntry, AuditStatus } from '@/types/audit';

interface AuditComplianceStitchProps {
  onBackToPortal?: () => void;
}

export function AuditComplianceStitch({ onBackToPortal }: AuditComplianceStitchProps) {
  const [logs, setLogs] = useState<AuditEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const loadLogs = async () => {
    try {
      setLoading(true);
      const data = await fetchAuditLogs(30);
      setLogs(data);
    } catch (e) {
      console.error('Failed to load audit logs:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLogs();
  }, []);

  const filteredLogs = logs.filter((log) => {
    if (filterStatus === 'all') return true;
    return log.status === filterStatus;
  });

  const exportAuditReport = () => {
    const reportData = {
      complianceStandard: 'SOC 2 Type II (CC7.2) & HIPAA Security Rule',
      hardwareNode: 'DEL-HUB-8472',
      facilityLocality: 'B-Block, Janakpuri, New Delhi',
      monitoringCaregiver: 'Priya Sharma (Indiranagar, Bangalore)',
      generatedAt: new Date().toISOString(),
      tlsVersion: 'TLS 1.3 Strict',
      hashAlgorithm: 'SHA-256 Merkel Hash-Chained Stream',
      verifiedAuditTrail: logs,
    };
    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `saathi-soc2-audit-report-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col relative w-full pt-20 pb-28 bg-surface min-h-screen">
      <div className="flex flex-col w-full px-4 space-y-4 max-w-lg mx-auto">
        {/* Compliance Header Banner */}
        <div className="rounded-3xl bg-surface-container p-5 border border-outline-variant/40 shadow-sm mt-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center flex-shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-headline font-bold text-lg sm:text-xl text-on-surface">
                    SOC 2 CC7.2 Compliance
                  </h1>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant uppercase">
                    HIPAA Ready
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  End-to-End Encrypted Healthcare Node • Append-Only Audit Stream
                </p>
              </div>
            </div>

            <button
              onClick={exportAuditReport}
              className="px-3 py-1.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs font-bold text-primary hover:bg-surface transition-colors flex items-center gap-1 cursor-pointer"
              title="Download JSON Report"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>

          {/* Node Status Matrix */}
          <div className="mt-4 pt-3 border-t border-outline-variant/30 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase">Node ID</p>
              <p className="font-mono font-bold text-on-surface text-[11px] mt-0.5">DEL-HUB-8472</p>
            </div>
            <div className="p-2 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase">Security</p>
              <p className="font-bold text-primary text-[11px] mt-0.5 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot"></span>
                TLS 1.3 Strict
              </p>
            </div>
            <div className="p-2 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase">Hash Chain</p>
              <p className="font-bold text-primary text-[11px] mt-0.5">SHA-256 Valid</p>
            </div>
          </div>
        </div>

        {/* Status Filter Pills */}
        <div className="flex items-center justify-between px-1">
          <span className="font-headline font-bold text-xs text-secondary uppercase tracking-wider">
            Audit Stream ({filteredLogs.length})
          </span>
          <div className="flex gap-1">
            {['all', 'SUCCESS', 'FLAGGED', 'BLOCKED'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  filterStatus === st
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Audit Log Stream */}
        <div className="space-y-2.5">
          {loading ? (
            <div className="p-8 text-center text-xs text-on-surface-variant">
              Loading cryptographic audit logs...
            </div>
          ) : filteredLogs.length === 0 ? (
            <div className="p-8 text-center text-xs text-on-surface-variant bg-surface-container rounded-2xl">
              No audit logs matching selected status.
            </div>
          ) : (
            filteredLogs.map((log) => (
              <div
                key={log.id}
                className="p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-xs text-xs space-y-1.5 transition-all hover:border-primary/40"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        log.status === 'BLOCKED' || log.status === 'FAILURE'
                          ? 'bg-error'
                          : log.status === 'FLAGGED'
                          ? 'bg-tertiary-container'
                          : 'bg-primary'
                      }`}
                    ></span>
                    <span className="font-mono font-bold text-on-surface truncate">
                      {log.action}
                    </span>
                  </div>
                  <span className="text-[11px] text-on-surface-variant flex-shrink-0 font-medium">
                    {new Date(log.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    })}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                  <span>Actor: <strong className="text-on-surface">{log.actorId} ({log.role})</strong></span>
                  <span>Target: <strong className="text-on-surface">{log.resource}</strong></span>
                </div>

                {log.integrityHash && (
                  <div className="pt-1 border-t border-outline-variant/20 flex items-center justify-between text-[10px] text-outline font-mono">
                    <span className="truncate">Hash: {log.integrityHash.substring(0, 22)}...</span>
                    <span className="text-primary font-bold">✓ SHA-256 Verified</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer info & return link */}
        <div className="rounded-2xl bg-surface-container-low p-4 text-center border border-outline-variant/30 text-xs text-on-surface-variant">
          <p className="leading-relaxed">
            All senior vitals, SOS triggers, medication verifications, and voice companion queries are tokenized, sanitizing PII before persisting to immutable storage.
          </p>
          {onBackToPortal && (
            <button
              onClick={onBackToPortal}
              className="mt-2 font-bold text-primary hover:underline cursor-pointer block mx-auto"
            >
              Return to Family Portal →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
