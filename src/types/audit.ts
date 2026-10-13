export type UserRole = 'senior' | 'caregiver' | 'emergency_contact' | 'system';

export type AuditAction = 
  | 'MEDICATION_TAKEN'
  | 'MEDICATION_ADDED'
  | 'MEDICATION_UPDATED'
  | 'SOS_TRIGGERED'
  | 'SOS_RESOLVED'
  | 'SCAM_ANALYZED'
  | 'COMPANION_CONVERSATION'
  | 'VITALS_RECORDED'
  | 'PROFILE_UPDATED'
  | 'UNAUTHORIZED_ACCESS_ATTEMPT'
  | 'RATE_LIMIT_EXCEEDED';

export type AuditStatus = 'SUCCESS' | 'FAILURE' | 'BLOCKED' | 'FLAGGED';

export interface AuditEntry {
  id: string;
  timestamp: string; // ISO 8601
  actorId: string;
  role: UserRole;
  action: AuditAction;
  resource: string;
  ipAddress: string;
  userAgent?: string;
  status: AuditStatus;
  details: Record<string, unknown>;
  integrityHash: string; // Cryptographic SHA-256 hash of previous hash + entry fields
}

export interface AuditFilter {
  role?: UserRole;
  action?: AuditAction;
  status?: AuditStatus;
  limit?: number;
}
