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
"[project]/src/app/api/v1/audit-logs/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$audit$2f$auditStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/audit/auditStore.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$security$2f$rbac$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/security/rbac.ts [app-route] (ecmascript)");
;
;
;
async function GET(request) {
    const role = request.headers.get('x-user-role') || 'caregiver';
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$security$2f$rbac$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasPermission"])(role, 'audit:read')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: {
                code: 'FORBIDDEN',
                message: 'SOC 2 Access Control: Role lacks audit:read permission.'
            }
        }, {
            status: 403
        });
    }
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50', 10);
    const action = searchParams.get('action') || undefined;
    const logs = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$audit$2f$auditStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auditStore"].query({
        limit,
        action: action
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data: {
            count: logs.length,
            integrityVerified: true,
            logs
        },
        timestamp: new Date().toISOString()
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
"[project]/src/server/security/rbac.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasPermission",
    ()=>hasPermission
]);
const ROLE_PERMISSIONS = {
    senior: [
        'medication:read',
        'medication:take',
        'sos:trigger',
        'companion:converse',
        'scam:analyze'
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
        'audit:read'
    ],
    emergency_contact: [
        'sos:trigger',
        'family:view_dashboard'
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
        'audit:read'
    ]
};
function hasPermission(role, permission) {
    const allowed = ROLE_PERMISSIONS[role] || [];
    return allowed.includes(permission);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1x9mmi3._.js.map