import { FamilySummary, Medication } from '@/types/care';
import { ScamReport } from '@/types/scam';
import { AuditEntry } from '@/types/audit';

export async function fetchFamilySummary(): Promise<FamilySummary> {
  const res = await fetch('/api/v1/family/summary', { cache: 'no-store' });
  const json = await res.json();
  if (!json.success) throw new Error(json.error?.message || 'Failed to fetch summary');
  return json.data;
}

export async function postTakeMedication(id: string): Promise<Medication> {
  const res = await fetch(`/api/v1/medications/${id}/take`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error?.message || 'Failed to mark medication');
  return json.data.medication;
}

export async function postAddMedication(data: any): Promise<Medication> {
  const res = await fetch('/api/v1/medications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-user-role': 'caregiver' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error?.message || 'Failed to add medication');
  return json.data;
}

export async function postTriggerSos(source = 'senior_button') {
  const res = await fetch('/api/v1/sos/trigger', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ source }),
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error?.message || 'Failed to trigger SOS');
  return json.data;
}

export async function postResolveSos(resolvedBy: string, note?: string) {
  const res = await fetch('/api/v1/sos/resolve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-user-role': 'caregiver' },
    body: JSON.stringify({ resolvedBy, note }),
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error?.message || 'Failed to resolve SOS');
  return json.data;
}

export async function postConverse(message: string, history: Array<{ role: 'user' | 'assistant'; content: string }> = []) {
  const res = await fetch('/api/v1/companion/converse', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, conversationHistory: history }),
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error?.message || 'Failed to converse with Saathi');
  return json.data;
}

export async function postAnalyzeScam(text?: string, imageBase64?: string): Promise<ScamReport> {
  const res = await fetch('/api/v1/scam/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, imageBase64 }),
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error?.message || 'Failed to analyze scam message');
  return json.data;
}

export async function fetchVitals() {
  const res = await fetch('/api/v1/vitals', { cache: 'no-store' });
  const json = await res.json();
  if (!json.success) throw new Error(json.error?.message || 'Failed to fetch vitals');
  return json.data;
}

export async function postLogVitals(data: {
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  bloodSugar: number;
  bloodSugarType: 'fasting' | 'post_meal' | 'random';
  pulse?: number;
  recordedBy?: string;
  notes?: string;
}) {
  const res = await fetch('/api/v1/vitals', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-user-role': 'caregiver' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error?.message || 'Failed to log vitals');
  return json.data;
}

export async function fetchAuditLogs(limit = 30): Promise<AuditEntry[]> {
  const res = await fetch(`/api/v1/audit-logs?limit=${limit}`, {
    headers: { 'x-user-role': 'caregiver' },
    cache: 'no-store',
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error?.message || 'Failed to fetch audit logs');
  return json.data.logs;
}

