# Saathi — Technical Architecture Specification

## 1. Architectural Philosophy
Saathi (साथी) is designed to solve a high-stakes, asymmetric human problem:
- **The Senior User** requires maximum emotional warmth, zero tech jargon, voice-led natural interaction in their vernacular language/Hinglish, high-contrast oversized tactile elements, and dignified autonomy.
- **The Family Caregiver** requires verifiable peace of mind, high data fidelity, immediate emergency notifications, and structured adherence logs.
- **Compliance & Privacy** requires strict SOC 2 Type II alignment to safeguard sensitive elder health, location, and communication logs.

To achieve this without fragmented codebases or operational sprawl, Saathi is built on a **Unified Next.js Fullstack Architecture** with physical server-boundary isolation.

---

## 2. Layered Architecture

```
+-----------------------------------------------------------------------------------+
|                           EDGE LAYER (middleware.ts)                              |
|  - Content Security Policy (CSP)       - HTTP Strict Transport Security (HSTS)    |
|  - X-Frame-Options: DENY               - Role-Based Access Control (RBAC)         |
+-----------------------------------------------------------------------------------+
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼                                               ▼
+----------------------------------+            +----------------------------------+
|      SENIOR COMPANION MODE       |            |     FAMILY CAREGIVER PORTAL      |
|           (/senior)              |            |            (/family)             |
|  - Voice Companion Orb (Web      |            |  - Peace-of-Mind Summary Header  |
|    Speech API STT/TTS)           |            |  - Real-time Activity Timeline   |
|  - Tactile Med Checklist         |            |  - Medication Adherence Metric   |
|  - Hold-to-Trigger SOS Button    |            |  - Remote Routine Editor         |
|  - Scam Shield Paste & Test      |            |  - SOC 2 Audit Trail Viewer      |
+----------------------------------+            +----------------------------------+
                 │                                               │
                 └───────────────────────┬───────────────────────┘
                                         ▼
+-----------------------------------------------------------------------------------+
|                       API ROUTE HANDLERS (/api/v1/*)                              |
|  - Input validation via Zod Schemas                                               |
|  - Sliding-Window Rate Limiting (DOS & Abuse Protection)                          |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
|                     SERVER-ONLY RUNTIME CORE (src/server/*)                       |
|                                                                                   |
|   ┌────────────────────────┐  ┌────────────────────────┐  ┌────────────────────┐  |
|   │     AUDIT ENGINE       │  │     SECURITY LAYER     │  │   AI PROXY CORE    │  |
|   │ - Append-only stream   │  │ - PII Sanitizer        │  │ - Gemini 2.5 Flash │  |
|   │ - SHA-256 event hash   │  │ - Sliding rate limiter │  │ - Hinglish Persona │  |
|   │ - SOC 2 CC7.2 trail    │  │ - RBAC policy engine   │  │ - Scam Heuristics  │  |
|   └────────────────────────┘  └────────────────────────┘  └────────────────────┘  |
|                                        │                                          |
|                                        ▼                                          |
|   ┌────────────────────────────────────────────────────────────────────────────┐  |
|   │                     DOMAIN REPOSITORIES & DATA STORE                       │  |
|   │ - Ramesh Sharma (73, Delhi) & Priya Sharma (34, Bangalore)                 │  |
|   │ - Prescriptions, Routine Logs, Emergency Contacts, Health Conditions       │  |
|   └────────────────────────────────────────────────────────────────────────────┘  |
+-----------------------------------------------------------------------------------+
```

---

## 3. Core Subsystems

### 3.1 AI Companion Subsystem
* **Voice-First Loop**: Captures audio input via standard Web Speech API, passes transcribed prompts to `/api/v1/companion/converse`.
* **Persona Configuration**: Culturally attuned companion named "Saathi". Speaks respectfully in Hindi, English, and Hinglish. Uses respectful phrasing (`Namaste Ramesh ji`, `Aapne nashta kiya?`).
* **Emotional Valence**: Recognizes signs of loneliness, sadness, or physical distress and flags them for the Family Activity Feed.

### 3.2 Medication & Adherence Subsystem
* **Time-Slot Grouping**: Morning (8:00 AM), Afternoon (1:30 PM), Evening/Night (8:30 PM).
* **Meal Context**: Nashte ke baad (After breakfast), Khane ke baad (After lunch), Sone se pehle (Before sleep).
* **Adherence Loop**: Tapping "Maine Le Li" immediately computes adherence %, generates celebratory visual feedback, and posts a verified log to the Family timeline.

### 3.3 Emergency Escalation (SOS) Subsystem
* **Two-Stage Activation**: 5-second cancel buffer to prevent accidental presses.
* **Alert Cascade**:
  1. On-device synthesized loud siren audio.
  2. Urgent SOS event posted to `/api/v1/sos/trigger`.
  3. High-priority red banner rendered across all caregiver sessions.
  4. Audit entry recorded with actor, IP, and timestamp.

### 3.4 Scam & Fraud Shield Subsystem
* **Threat Heuristics**: Targets common scams targeting Indian seniors:
  - Electricity disconnection threats with fake helpline numbers.
  - Fake lottery / Kaun Banega Crorepati WhatsApp prize forwards.
  - Urgent bank KYC suspension & APK download links.
  - Impersonation of police or government officials ("Digital Arrest").
* **Output Format**: Vernacular explanation, risk level (`HIGH`, `MEDIUM`, `SAFE`), and strict rule (`DO NOT CLICK`, `DO NOT SHARE OTP`).
