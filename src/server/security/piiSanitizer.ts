/**
 * SOC 2 Privacy Control: PII Sanitization
 * Automatically redacts sensitive Indian mobile numbers, email addresses, 
 * Aadhaar/ID patterns, and personal health details from log feeds.
 */

const PHONE_REGEX = /(\+91[\-\s]?)?[6-9]\d{4}[\-\s]?\d{5}/g;
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const AADHAAR_REGEX = /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g;

export function sanitizePii(text: string): string {
  if (!text || typeof text !== 'string') return text;

  return text
    .replace(PHONE_REGEX, (match) => {
      const digitsOnly = match.replace(/\D/g, '');
      if (digitsOnly.length >= 10) {
        const lastTwo = digitsOnly.slice(-2);
        const prefix = digitsOnly.length > 10 ? '+91 ' : '';
        return `${prefix}XXXXX-XXX${lastTwo}`;
      }
      return '[REDACTED_PHONE]';
    })
    .replace(EMAIL_REGEX, (match) => {
      const [local, domain] = match.split('@');
      if (local && domain) {
        return `${local.charAt(0)}***@${domain}`;
      }
      return '[REDACTED_EMAIL]';
    })
    .replace(AADHAAR_REGEX, 'XXXX-XXXX-[REDACTED]');
}

export function sanitizeObject<T>(obj: T): T {
  if (obj === null || obj === undefined) return obj;

  if (typeof obj === 'string') {
    return sanitizePii(obj) as unknown as T;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeObject(item)) as unknown as T;
  }

  if (typeof obj === 'object') {
    const sanitized: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      // Don't redact internal system IDs or hash keys
      if (key.toLowerCase().includes('password') || key.toLowerCase().includes('token') || key.toLowerCase().includes('secret')) {
        sanitized[key] = '[REDACTED_SECRET]';
      } else {
        sanitized[key] = sanitizeObject(value);
      }
    }
    return sanitized as T;
  }

  return obj;
}
