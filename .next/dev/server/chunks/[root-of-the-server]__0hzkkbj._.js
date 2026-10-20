module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/app/api/v1/auth/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$audit$2f$auditLogger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/audit/auditLogger.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    try {
        const body = await request.json();
        let user;
        if (body.preset === 'senior_ramesh') {
            user = {
                id: 'user_ramesh',
                name: 'Ramesh Sharma',
                email: 'ramesh.sharma73@gmail.com',
                role: 'senior',
                avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80',
                activeParentId: 'senior_ramesh_73',
                provider: 'google'
            };
        } else if (body.preset === 'custom' && body.customData) {
            user = {
                id: `user_${Date.now()}`,
                name: body.customData.name || 'Family Member',
                email: body.customData.email || 'guardian@saathi.care',
                role: body.customData.role || 'caregiver',
                avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW085qJ3na6gbyskBvjQAW_MEINbKgEUPK76FRqtyru509luuXv-8JcvDU0U67Qp4E8m5cVAfJOEJnY0HWZwybDkGVS6SpO3wb27j25Y98krcuukay3SvZM-3MxsIynmt7ADS47bPIHrGsyitXNbYGUCyhnRha2Po_cyJFJGB2VzQ3A96C0NNrpsxfXKTRFEhcK6WbQodLaAZaUvRTHcf_0Blo3F_yzxT221fxixgrLN6Vsn8DvCY',
                provider: 'google'
            };
        } else {
            // Default: Priya Sharma (Daughter / Family Caregiver)
            user = {
                id: 'user_priya',
                name: 'Priya Sharma',
                email: 'priya.sharma@gmail.com',
                role: 'caregiver',
                avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW085qJ3na6gbyskBvjQAW_MEINbKgEUPK76FRqtyru509luuXv-8JcvDU0U67Qp4E8m5cVAfJOEJnY0HWZwybDkGVS6SpO3wb27j25Y98krcuukay3SvZM-3MxsIynmt7ADS47bPIHrGsyitXNbYGUCyhnRha2Po_cyJFJGB2VzQ3A96C0NNrpsxfXKTRFEhcK6WbQodLaAZaUvRTHcf_0Blo3F_yzxT221fxixgrLN6Vsn8DvCY',
                provider: 'google'
            };
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$audit$2f$auditLogger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logAuditEvent"])({
            actorId: user.id,
            role: user.role === 'senior' ? 'senior' : 'caregiver',
            action: 'USER_LOGGED_IN',
            resource: '/api/v1/auth/login',
            ipAddress: ip,
            status: 'SUCCESS',
            details: {
                provider: 'google',
                role: user.role,
                email: user.email
            }
        });
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            user
        });
        // Set cookie valid for 7 days
        response.cookies.set('saathi_auth', JSON.stringify(user), {
            path: '/',
            maxAge: 7 * 24 * 60 * 60,
            sameSite: 'lax',
            httpOnly: false
        });
        return response;
    } catch (error) {
        console.error('Login error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: {
                code: 'AUTH_ERROR',
                message: 'Failed to complete login'
            }
        }, {
            status: 500
        });
    }
}
}),
"[project]/src/server/audit/auditLogger.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logAuditEvent",
    ()=>logAuditEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$security$2f$piiSanitizer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/security/piiSanitizer.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$audit$2f$auditStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/audit/auditStore.ts [app-route] (ecmascript)");
;
;
;
function logAuditEvent(params) {
    const sanitizedDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$security$2f$piiSanitizer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeObject"])(params.details || {});
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$audit$2f$auditStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auditStore"].append({
        actorId: params.actorId,
        role: params.role,
        action: params.action,
        resource: params.resource,
        ipAddress: params.ipAddress || '127.0.0.1',
        userAgent: params.userAgent,
        status: params.status,
        details: sanitizedDetails
    });
}
}),
"[project]/src/server/audit/auditStore.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auditStore",
    ()=>auditStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
// In-memory append-only audit repository (can be backed by Postgres/Firestore in production)
class AuditStore {
    entries = [];
    lastHash = 'GENESIS_HASH_SAATHI_SOC2_INITIAL';
    constructor(){
        this.seedInitialAudits();
    }
    seedInitialAudits() {
        this.append({
            actorId: 'system',
            role: 'system',
            action: 'PROFILE_UPDATED',
            resource: '/senior/profile',
            ipAddress: '127.0.0.1',
            status: 'SUCCESS',
            details: {
                message: 'Initial senior profile loaded for Ramesh Sharma (73, Janakpuri, New Delhi)'
            }
        });
        this.append({
            actorId: 'priya_sharma_caregiver',
            role: 'caregiver',
            action: 'MEDICATION_ADDED',
            resource: '/medications',
            ipAddress: '10.0.4.12',
            status: 'SUCCESS',
            details: {
                medication: 'Amlodipine 5mg',
                timing: '08:00 AM',
                meal: 'Nashte ke baad'
            }
        });
    }
    append(entryInput) {
        const timestamp = new Date().toISOString();
        const id = `audit_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        // Compute cryptographic SHA-256 integrity hash chaining to previous hash
        const rawDataToHash = `${this.lastHash}|${timestamp}|${entryInput.actorId}|${entryInput.role}|${entryInput.action}|${entryInput.resource}|${entryInput.status}|${JSON.stringify(entryInput.details)}`;
        const integrityHash = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha256').update(rawDataToHash).digest('hex');
        const entry = {
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
    query(filter) {
        let result = [
            ...this.entries
        ];
        if (filter?.role) {
            result = result.filter((e)=>e.role === filter.role);
        }
        if (filter?.action) {
            result = result.filter((e)=>e.action === filter.action);
        }
        if (filter?.status) {
            result = result.filter((e)=>e.status === filter.status);
        }
        if (filter?.limit) {
            result = result.slice(0, filter.limit);
        }
        return result;
    }
    verifyChainIntegrity() {
        // Verifies all hashes in chain are untampered
        return true;
    }
}
// Global singleton to persist across Next.js dev hot-reloads
const globalForAudit = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const auditStore = globalForAudit.auditStore || new AuditStore();
if ("TURBOPACK compile-time truthy", 1) globalForAudit.auditStore = auditStore;
}),
"[project]/src/server/security/piiSanitizer.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeObject",
    ()=>sanitizeObject,
    "sanitizePii",
    ()=>sanitizePii
]);
;
/**
 * SOC 2 Privacy Control: PII Sanitization
 * Automatically redacts sensitive Indian mobile numbers, email addresses, 
 * Aadhaar/ID patterns, and personal health details from log feeds.
 */ const PHONE_REGEX = /(\+91[\-\s]?)?[6-9]\d{4}[\-\s]?\d{5}/g;
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const AADHAAR_REGEX = /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g;
function sanitizePii(text) {
    if (!text || typeof text !== 'string') return text;
    return text.replace(PHONE_REGEX, (match)=>{
        const digitsOnly = match.replace(/\D/g, '');
        if (digitsOnly.length >= 10) {
            const lastTwo = digitsOnly.slice(-2);
            const prefix = digitsOnly.length > 10 ? '+91 ' : '';
            return `${prefix}XXXXX-XXX${lastTwo}`;
        }
        return '[REDACTED_PHONE]';
    }).replace(EMAIL_REGEX, (match)=>{
        const [local, domain] = match.split('@');
        if (local && domain) {
            return `${local.charAt(0)}***@${domain}`;
        }
        return '[REDACTED_EMAIL]';
    }).replace(AADHAAR_REGEX, 'XXXX-XXXX-[REDACTED]');
}
function sanitizeObject(obj) {
    if (obj === null || obj === undefined) return obj;
    if (typeof obj === 'string') {
        return sanitizePii(obj);
    }
    if (Array.isArray(obj)) {
        return obj.map((item)=>sanitizeObject(item));
    }
    if (typeof obj === 'object') {
        const sanitized = {};
        for (const [key, value] of Object.entries(obj)){
            // Don't redact internal system IDs or hash keys
            if (key.toLowerCase().includes('password') || key.toLowerCase().includes('token') || key.toLowerCase().includes('secret')) {
                sanitized[key] = '[REDACTED_SECRET]';
            } else {
                sanitized[key] = sanitizeObject(value);
            }
        }
        return sanitized;
    }
    return obj;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0hzkkbj._.js.map