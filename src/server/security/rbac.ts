import { UserRole } from '@/types/audit';

export type Permission = 
  | 'medication:read'
  | 'medication:take'
  | 'medication:write'
  | 'sos:trigger'
  | 'sos:resolve'
  | 'companion:converse'
  | 'scam:analyze'
  | 'family:view_dashboard'
  | 'audit:read';

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  senior: [
    'medication:read',
    'medication:take',
    'sos:trigger',
    'companion:converse',
    'scam:analyze',
  ],
  caregiver: [
    'medication:read',
    'medication:take',
    'medication:write',
    'sos:trigger',
    'sos:resolve',
    'companion:converse',
    'scam:analyze',
    'family:view_dashboard',
    'audit:read',
  ],
  emergency_contact: [
    'sos:trigger',
    'family:view_dashboard',
  ],
  system: [
    'medication:read',
    'medication:take',
    'medication:write',
    'sos:trigger',
    'sos:resolve',
    'companion:converse',
    'scam:analyze',
    'family:view_dashboard',
    'audit:read',
  ],
};

export function hasPermission(role: UserRole, permission: Permission): boolean {
  const allowed = ROLE_PERMISSIONS[role] || [];
  return allowed.includes(permission);
}
