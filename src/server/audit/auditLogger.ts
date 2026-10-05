import { AuditAction, AuditEntry, AuditStatus, UserRole } from '@/types/audit';
import { sanitizeObject } from '../security/piiSanitizer';
import { auditStore } from './auditStore';

export interface LogAuditParams {
  actorId: string;
  role: UserRole;
  action: AuditAction;
  resource: string;
  ipAddress?: string;
  userAgent?: string;
  status: AuditStatus;
  details?: Record<string, unknown>;
}

export function logAuditEvent(params: LogAuditParams): AuditEntry {
  const sanitizedDetails = sanitizeObject(params.details || {});

  return auditStore.append({
    actorId: params.actorId,
    role: params.role,
    action: params.action,
    resource: params.resource,
    ipAddress: params.ipAddress || '127.0.0.1',
    userAgent: params.userAgent,
    status: params.status,
    details: sanitizedDetails,
  });
}
