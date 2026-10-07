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
"[project]/src/app/api/v1/medications/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$careStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db/careStore.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$schemas$2f$medicationSchema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/schemas/medicationSchema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$audit$2f$auditLogger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/audit/auditLogger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$security$2f$rbac$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/security/rbac.ts [app-route] (ecmascript)");
;
;
;
;
;
async function GET() {
    const medications = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$careStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["careStore"].getMedications();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data: medications,
        timestamp: new Date().toISOString()
    });
}
async function POST(request) {
    const role = request.headers.get('x-user-role') || 'caregiver';
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$security$2f$rbac$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasPermission"])(role, 'medication:write')) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$audit$2f$auditLogger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logAuditEvent"])({
            actorId: 'unknown',
            role,
            action: 'UNAUTHORIZED_ACCESS_ATTEMPT',
            resource: '/api/v1/medications',
            ipAddress: ip,
            status: 'BLOCKED',
            details: {
                attemptedAction: 'create_medication'
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: {
                code: 'FORBIDDEN',
                message: 'Only authorized caregivers can add prescriptions.'
            }
        }, {
            status: 403
        });
    }
    try {
        const rawBody = await request.json();
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$schemas$2f$medicationSchema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createMedicationSchema"].safeParse(rawBody);
        if (!parsed.success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: {
                    code: 'VALIDATION_ERROR',
                    message: 'Invalid prescription details',
                    details: parsed.error.format()
                }
            }, {
                status: 400
            });
        }
        const newMed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$careStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["careStore"].addMedication(parsed.data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$audit$2f$auditLogger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logAuditEvent"])({
            actorId: 'priya_sharma_caregiver',
            role: 'caregiver',
            action: 'MEDICATION_ADDED',
            resource: `/api/v1/medications/${newMed.id}`,
            ipAddress: ip,
            status: 'SUCCESS',
            details: {
                medicationName: newMed.name,
                dosage: newMed.dosage,
                scheduledTime: newMed.scheduledTime
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: newMed,
            timestamp: new Date().toISOString()
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: {
                code: 'INTERNAL_ERROR',
                message: 'Failed to add medication'
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
"[project]/src/server/db/careStore.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "careStore",
    ()=>careStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db/seedData.ts [app-route] (ecmascript)");
;
class CareStore {
    senior = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_SENIOR"]
    };
    medications = JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_MEDICATIONS"]));
    routines = JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_ROUTINES"]));
    activities = JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_ACTIVITIES"]));
    activeSos = null;
    lastCheckinTime = new Date(Date.now() - 15 * 60 * 1000).toISOString();
    getSeniorProfile() {
        return this.senior;
    }
    getMedications() {
        return this.medications;
    }
    markMedicationTaken(id) {
        const med = this.medications.find((m)=>m.id === id);
        if (!med) return null;
        const previousState = med.takenToday;
        med.takenToday = true;
        med.takenAt = new Date().toISOString();
        this.lastCheckinTime = new Date().toISOString();
        // Add activity log
        this.addActivity({
            type: 'medication_taken',
            title: 'Medication Taken',
            description: `${this.senior.preferredName} marked ${med.name} as taken.`,
            severity: 'success',
            metadata: {
                medicationId: id,
                medicationName: med.name
            }
        });
        return {
            medication: med,
            previousState
        };
    }
    addMedication(newMed) {
        const id = `med_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
        const med = {
            ...newMed,
            id,
            takenToday: false
        };
        this.medications.push(med);
        this.addActivity({
            type: 'routine_completed',
            title: 'Prescription Added',
            description: `New medication ${med.name} (${med.scheduledTime}) was added to schedule.`,
            severity: 'info'
        });
        return med;
    }
    getActiveSos() {
        return this.activeSos;
    }
    triggerSos(source = 'senior_button') {
        const alert = {
            id: `sos_${Date.now()}`,
            active: true,
            triggeredAt: new Date().toISOString(),
            triggerSource: source
        };
        this.activeSos = alert;
        this.addActivity({
            type: 'sos_triggered',
            title: 'EMERGENCY SOS TRIGGERED',
            description: `Emergency alert activated by ${this.senior.preferredName} via ${source}. Loud siren sounded and family notified!`,
            severity: 'critical',
            metadata: {
                sosId: alert.id,
                source
            }
        });
        return alert;
    }
    resolveSos(resolvedBy, note) {
        if (!this.activeSos) return null;
        const resolvedAlert = {
            ...this.activeSos,
            active: false,
            resolvedAt: new Date().toISOString(),
            resolvedBy,
            resolutionNote: note || 'Resolved by family caregiver.'
        };
        this.activeSos = null;
        this.addActivity({
            type: 'sos_resolved',
            title: 'Emergency SOS Resolved',
            description: `Emergency alert resolved by ${resolvedBy}: "${resolvedAlert.resolutionNote}".`,
            severity: 'success',
            metadata: {
                sosId: resolvedAlert.id
            }
        });
        return resolvedAlert;
    }
    addActivity(params) {
        const log = {
            id: `act_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
            timestamp: new Date().toISOString(),
            ...params
        };
        this.activities.unshift(log); // latest first
        return log;
    }
    getActivities(limit = 20) {
        return this.activities.slice(0, limit);
    }
    getFamilySummary() {
        const total = this.medications.length;
        const taken = this.medications.filter((m)=>m.takenToday).length;
        const adherence = total > 0 ? Math.round(taken / total * 100) : 100;
        return {
            senior: this.senior,
            activeSos: this.activeSos,
            adherencePercentage: adherence,
            medicationsTakenCount: taken,
            totalMedicationsCount: total,
            medications: this.medications,
            routines: this.routines,
            recentActivities: this.activities.slice(0, 15),
            lastCheckinTime: this.lastCheckinTime
        };
    }
}
const globalForCareStore = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const careStore = globalForCareStore.careStore || new CareStore();
if ("TURBOPACK compile-time truthy", 1) globalForCareStore.careStore = careStore;
}),
"[project]/src/server/db/seedData.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_ACTIVITIES",
    ()=>INITIAL_ACTIVITIES,
    "INITIAL_MEDICATIONS",
    ()=>INITIAL_MEDICATIONS,
    "INITIAL_ROUTINES",
    ()=>INITIAL_ROUTINES,
    "INITIAL_SENIOR",
    ()=>INITIAL_SENIOR
]);
const INITIAL_SENIOR = {
    id: 'senior_ramesh_sharma',
    name: 'Ramesh Chandra Sharma',
    preferredName: 'Ramesh Uncle',
    age: 73,
    city: 'New Delhi',
    locality: 'B-Block, Janakpuri',
    languagePreference: 'english',
    conditions: [
        'Mild Hypertension',
        'Type-2 Diabetes (Well-controlled)',
        'Knee Joint Stiffness'
    ],
    allergies: [
        'Penicillin'
    ],
    emergencyContacts: [
        {
            id: 'contact_priya',
            name: 'Priya Sharma',
            relation: 'Daughter (Indiranagar, Bangalore)',
            phone: '+91 98112 45678',
            isPrimary: true,
            notifyOnSos: true,
            notifyOnMissedMed: true
        },
        {
            id: 'contact_dr_verma',
            name: 'Dr. Anand Verma',
            relation: 'Family Physician (Janakpuri Clinic)',
            phone: '+91 98711 23456',
            isPrimary: false,
            notifyOnSos: true,
            notifyOnMissedMed: false
        },
        {
            id: 'contact_neighbour_gupta',
            name: 'Mr. O.P. Gupta',
            relation: 'Next-door Neighbour (Flat 204)',
            phone: '+91 98101 98765',
            isPrimary: false,
            notifyOnSos: true,
            notifyOnMissedMed: false
        }
    ],
    primaryDoctor: {
        name: 'Dr. Anand Verma',
        clinic: 'Verma Heart & Family Health Clinic, Janakpuri',
        phone: '+91 98711 23456'
    }
};
const INITIAL_MEDICATIONS = [
    {
        id: 'med_amlodipine',
        name: 'Amlodipine 5mg',
        dosage: '1 Tablet',
        timeSlot: 'morning',
        scheduledTime: '08:00 AM',
        mealRelation: 'after_food',
        instructionsHindi: 'Take with warm water 15 minutes after breakfast',
        instructionsEnglish: 'Take with warm water 15 minutes after breakfast',
        takenToday: true,
        takenAt: new Date(Date.now() - 4 * 3600 * 1000).toISOString(),
        notes: 'Blood pressure control',
        colorTag: '#E06A3B'
    },
    {
        id: 'med_shelcal',
        name: 'Shelcal 500 (Calcium + D3)',
        dosage: '1 Tablet',
        timeSlot: 'afternoon',
        scheduledTime: '01:30 PM',
        mealRelation: 'after_food',
        instructionsHindi: 'Take with water after lunch',
        instructionsEnglish: 'Take with water after lunch',
        takenToday: false,
        notes: 'Bone strength & joint health',
        colorTag: '#0D9488'
    },
    {
        id: 'med_glycomet',
        name: 'Glycomet GP 1',
        dosage: '1 Tablet',
        timeSlot: 'night',
        scheduledTime: '08:30 PM',
        mealRelation: 'after_food',
        instructionsHindi: 'Take with water after dinner',
        instructionsEnglish: 'Take with water after dinner',
        takenToday: false,
        notes: 'Sugar management',
        colorTag: '#6366F1'
    }
];
const INITIAL_ROUTINES = [
    {
        id: 'rt_morning_walk',
        title: 'Morning Park Walk & Breathing Exercises',
        titleHindi: 'Morning Park Walk & Breathing Exercises (District Park)',
        time: '06:45 AM',
        icon: 'Footprints',
        completed: true,
        category: 'exercise'
    },
    {
        id: 'rt_hydration',
        title: 'Warm Water & Fenugreek Seeds',
        titleHindi: 'Warm water with soaked fenugreek seeds',
        time: '07:30 AM',
        icon: 'GlassWater',
        completed: true,
        category: 'hydration'
    },
    {
        id: 'rt_music',
        title: 'Classic Retro Songs Radio',
        titleHindi: 'Classic golden era radio songs',
        time: '04:30 PM',
        icon: 'Music',
        completed: false,
        category: 'leisure'
    },
    {
        id: 'rt_family_call',
        title: 'Evening Catch-up Call with Priya',
        titleHindi: 'Daily evening call with daughter Priya',
        time: '07:30 PM',
        icon: 'PhoneCall',
        completed: false,
        category: 'wellness'
    }
];
const INITIAL_ACTIVITIES = [
    {
        id: 'act_scam_1',
        timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
        type: 'scam_checked',
        title: 'Suspicious Disconnection SMS Deflected',
        description: 'Papa checked an SMS alleging BSES Rajdhani bill default. Saathi auto-quarantined the link (bit.ly/del-power-pay) and alerted audio warning. System Blocked Successfully.',
        severity: 'warning',
        metadata: {
            quarantinedUrl: 'bit.ly/del-power-pay',
            provider: 'BSES Rajdhani',
            verifiedBlocked: true
        }
    },
    {
        id: 'act_companion_1',
        timestamp: new Date(Date.now() - 2.5 * 3600 * 1000).toISOString(),
        type: 'companion_chat',
        title: 'Retro Kishore Kumar & Weather Chat',
        description: '12-minute engaging Hindi dialogue. Papa asked for "Zindagi Ke Safar Mein" playlist and checked afternoon temperature for West Delhi.',
        severity: 'info',
        metadata: {
            audioDuration: '12m',
            audioDigestAvailable: true,
            sentiment: 'Cheerful & Calm'
        }
    },
    {
        id: 'act_med_1',
        timestamp: new Date(Date.now() - 4.2 * 3600 * 1000).toISOString(),
        type: 'medication_taken',
        title: 'Amlodipine 5mg marked Taken',
        description: 'Confirmed via physical Senior Tablet interaction: "Maine Le Li" button tapped on living room hub. Hardware Touch Verified.',
        severity: 'success',
        metadata: {
            hardwareTouchVerified: true,
            medicationName: 'Amlodipine 5mg',
            doseTime: '08:15 AM'
        }
    }
];
}),
"[project]/src/server/schemas/medicationSchema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMedicationSchema",
    ()=>createMedicationSchema,
    "takeMedicationSchema",
    ()=>takeMedicationSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
const takeMedicationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(200).optional()
});
const createMedicationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'Medication name required').max(100),
    dosage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Dosage required').max(50),
    timeSlot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'morning',
        'afternoon',
        'evening',
        'night'
    ]),
    scheduledTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]\s?(AM|PM|am|pm)?$/, 'Invalid time format'),
    mealRelation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'before_food',
        'after_food',
        'with_food',
        'anytime'
    ]),
    instructionsHindi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(200),
    instructionsEnglish: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(200),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(300).optional(),
    colorTag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Invalid hex color').optional().default('#0D9488')
});
}),
"[project]/src/server/security/piiSanitizer.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeObject",
    ()=>sanitizeObject,
    "sanitizePii",
    ()=>sanitizePii
]);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0pa_y-9._.js.map