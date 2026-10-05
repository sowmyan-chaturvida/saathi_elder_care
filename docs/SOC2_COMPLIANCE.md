# Saathi — SOC 2 Type II Compliance Architecture & Control Matrix

## 1. Compliance Scope & Philosophy
Saathi processes sensitive elder healthcare data, daily routine patterns, emergency SOS signals, and family communication records. This document establishes how Saathi's architecture fulfills the American Institute of CPAs (AICPA) Trust Services Criteria (TSC) for SOC 2 Type II:
1. **Security (Common Criteria)**
2. **Availability**
3. **Processing Integrity**
4. **Confidentiality**
5. **Privacy**

---

## 2. Trust Services Criteria Mapping

### 2.1 Common Criteria 6.1 — Logical Access Controls
* **Requirement**: Access to data, software, and systems is restricted to authorized users.
* **Saathi Implementation**:
  - Role-Based Access Control (RBAC) categorizes users into:
    - `senior`: Can interact with companion, mark own meds, trigger SOS, check scams.
    - `caregiver`: Can view activity logs, edit prescriptions, resolve SOS, inspect audit logs.
    - `emergency_contact`: Read-only access to SOS alert dispatch.
  - Role enforcement is validated at the Edge in `src/middleware.ts` and deep in `src/server/security/rbac.ts`.

### 2.2 Common Criteria 6.6 — Defense in Depth & Perimeter Security
* **Requirement**: Security headers, content isolation, and perimeter defenses prevent common web vulnerabilities.
* **Saathi Implementation**:
  - `src/middleware.ts` injects standard HTTP security headers on all responses:
    - `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;`
    - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
    - `X-Frame-Options: DENY` (prevents clickjacking attacks)
    - `X-Content-Type-Options: nosniff` (prevents MIME sniffing)
    - `Referrer-Policy: strict-origin-when-cross-origin`

### 2.3 Common Criteria 6.7 — Secrets Management & Data in Transit
* **Requirement**: Cryptographic keys and confidential external credentials are protected from disclosure.
* **Saathi Implementation**:
  - **Zero Client Secrets**: Third-party API keys (e.g. Google Gemini API, Twilio SMS) are strictly prohibited from client-side bundles.
  - Files under `src/server/*` are isolated and marked with `server-only`.
  - All communication between client and server routes is transmitted over TLS 1.3 / HTTPS.

### 2.4 Common Criteria 6.8 — Input Sanitization & Abuse Prevention
* **Requirement**: Systems protect against unauthorized code execution, injection, and denial of service.
* **Saathi Implementation**:
  - **Zod Validation**: Every endpoint under `/api/v1/*` parses payloads using strict Zod schemas (`companionSchema`, `medicationSchema`, `sosSchema`, `scamSchema`). Excess or unknown keys are stripped.
  - **Rate Limiting**: Sliding-window rate limiter in `src/server/security/rateLimiter.ts` limits request frequencies:
    - Emergency SOS: 5 requests / 60 seconds per IP.
    - AI Conversational Proxy: 20 requests / 60 seconds per IP.
    - Scam Analysis: 15 requests / 60 seconds per IP.

### 2.5 Common Criteria 7.2 — Security Audit & Incident Monitoring
* **Requirement**: Security-relevant events are logged in an immutable, tamper-resistant format.
* **Saathi Implementation**:
  - The `AuditLogService` (`src/server/audit/auditLogger.ts`) logs every mutation:
    - Field attributes: `id`, `timestamp`, `actorId`, `role`, `action`, `resource`, `ipAddress`, `status`, `hash`.
    - Event Action Hash: A cryptographic SHA-256 hash linking the payload and timestamp, providing tamper evidence.
  - Audit trail viewer is available exclusively to authenticated caregivers at `/family` and `/api/v1/audit-logs`.

### 2.6 Privacy Criteria — PII Redaction & Data Minimization
* **Requirement**: Personal Identifiable Information (PII) is minimized and masked.
* **Saathi Implementation**:
  - `src/server/security/piiSanitizer.ts` intercepts all log payloads and masks:
    - Indian Mobile Numbers: `+91 98765 43210` -> `+91 98*** ***10`
    - Email Addresses: `user@example.com` -> `u***@example.com`
    - Free-form text containing health conditions or medication specifics in audit notes.
