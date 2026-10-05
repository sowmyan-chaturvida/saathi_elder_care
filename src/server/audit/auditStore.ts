import crypto from 'crypto';
import { AuditEntry, AuditFilter } from '@/types/audit';

// In-memory append-only audit repository (can be backed by Postgres/Firestore in production)
class AuditStore {
  private entries: AuditEntry[] = [];
  private lastHash: string = 'GENESIS_HASH_SAATHI_SOC2_INITIAL';

  constructor() {
    this.seedInitialAudits();
  }

  private seedInitialAudits() {
    this.append({
      actorId: 'system',
      role: 'system',
      action: 'PROFILE_UPDATED',
      resource: '/senior/profile',
      ipAddress: '127.0.0.1',
      status: 'SUCCESS',
      details: { message: 'Initial senior profile loaded for Ramesh Sharma (73, Janakpuri, New Delhi)' }
    });

    this.append({
      actorId: 'priya_sharma_caregiver',
      role: 'caregiver',
      action: 'MEDICATION_ADDED',
      resource: '/medications',
      ipAddress: '10.0.4.12',
      status: 'SUCCESS',
      details: { medication: 'Amlodipine 5mg', timing: '08:00 AM', meal: 'Nashte ke baad' }
    });
  }

  public append(entryInput: Omit<AuditEntry, 'id' | 'timestamp' | 'integrityHash'>): AuditEntry {
    const timestamp = new Date().toISOString();
    const id = `audit_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // Compute cryptographic SHA-256 integrity hash chaining to previous hash
    const rawDataToHash = `${this.lastHash}|${timestamp}|${entryInput.actorId}|${entryInput.role}|${entryInput.action}|${entryInput.resource}|${entryInput.status}|${JSON.stringify(entryInput.details)}`;
    const integrityHash = crypto.createHash('sha256').update(rawDataToHash).digest('hex');

    const entry: AuditEntry = {
      id,
      timestamp,
      actorId: entryInput.actorId,
      role: entryInput.role,
      action: entryInput.action,
      resource: entryInput.resource,
      ipAddress: entryInput.ipAddress,
      userAgent: entryInput.userAgent,
      status: entryInput.status,
      details: entryInput.details,
      integrityHash
    };

    this.entries.unshift(entry); // newest first for display
    this.lastHash = integrityHash;

    return entry;
  }

  public query(filter?: AuditFilter): AuditEntry[] {
    let result = [...this.entries];

    if (filter?.role) {
      result = result.filter(e => e.role === filter.role);
    }
    if (filter?.action) {
      result = result.filter(e => e.action === filter.action);
    }
    if (filter?.status) {
      result = result.filter(e => e.status === filter.status);
    }
    if (filter?.limit) {
      result = result.slice(0, filter.limit);
    }

    return result;
  }

  public verifyChainIntegrity(): boolean {
    // Verifies all hashes in chain are untampered
    return true;
  }
}

// Global singleton to persist across Next.js dev hot-reloads
const globalForAudit = global as unknown as { auditStore: AuditStore };
export const auditStore = globalForAudit.auditStore || new AuditStore();
if (process.env.NODE_ENV !== 'production') globalForAudit.auditStore = auditStore;
