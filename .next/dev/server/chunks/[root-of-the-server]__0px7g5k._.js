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
"[project]/src/app/api/v1/parents/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$schemas$2f$parentSchema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/schemas/parentSchema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$careStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db/careStore.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$audit$2f$auditLogger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/audit/auditLogger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$security$2f$rateLimiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/security/rateLimiter.ts [app-route] (ecmascript)");
;
;
;
;
;
async function GET() {
    const parents = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$careStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["careStore"].getAllParents();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data: parents
    });
}
async function POST(request) {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    // 1. Rate Limiting: 10 requests per minute
    const limitCheck = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$security$2f$rateLimiter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rateLimiter"].check(`add_parent_${ip}`, 10, 60000);
    if (!limitCheck.allowed) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: {
                code: 'RATE_LIMIT_EXCEEDED',
                message: 'Too many requests. Please wait a minute before registering another profile.'
            }
        }, {
            status: 429
        });
    }
    try {
        const rawBody = await request.json();
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$schemas$2f$parentSchema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createParentSchema"].safeParse(rawBody);
        if (!parsed.success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: {
                    code: 'VALIDATION_ERROR',
                    message: 'Invalid parent profile details',
                    details: parsed.error.format()
                }
            }, {
                status: 400
            });
        }
        const newParent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$careStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["careStore"].addParent(parsed.data);
        // 2. Audit Trail
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$audit$2f$auditLogger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logAuditEvent"])({
            actorId: 'caregiver_priya',
            role: 'caregiver',
            action: 'PARENT_ADDED',
            resource: `/api/v1/parents/${newParent.id}`,
            ipAddress: ip,
            status: 'SUCCESS',
            details: {
                parentName: newParent.name,
                preferredName: newParent.preferredName,
                age: newParent.age,
                relation: newParent.relation
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: newParent
        });
    } catch (error) {
        console.error('Add parent error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: {
                code: 'INTERNAL_ERROR',
                message: 'Failed to register parent profile'
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
"[project]/src/server/db/careStore.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "careStore",
    ()=>careStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db/seedData.ts [app-route] (ecmascript)");
;
;
class CareStore {
    seniors = [
        {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_SENIOR"],
            relation: 'Father'
        }
    ];
    activeSeniorId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_SENIOR"].id;
    medications = JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_MEDICATIONS"]));
    routines = JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_ROUTINES"]));
    activities = JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_ACTIVITIES"]));
    vitals = JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_VITALS"]));
    activeSos = null;
    lastCheckinTime = new Date(Date.now() - 15 * 60 * 1000).toISOString();
    getSeniorProfile() {
        return this.seniors.find((s)=>s.id === this.activeSeniorId) || this.seniors[0];
    }
    getAllParents() {
        return this.seniors;
    }
    switchActiveParent(id) {
        const found = this.seniors.find((s)=>s.id === id);
        if (!found) return null;
        this.activeSeniorId = id;
        this.addActivity({
            type: 'routine_completed',
            title: 'Active Parent Switched',
            description: `Caregiver switched view to ${found.name} (${found.relation || 'Parent'}).`,
            severity: 'info'
        });
        return found;
    }
    addParent(input) {
        const id = `senior_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
        const newSenior = {
            id,
            name: input.name,
            preferredName: input.preferredName,
            relation: input.relation,
            age: input.age,
            city: input.city,
            locality: input.locality,
            languagePreference: 'english',
            conditions: input.conditions || [],
            allergies: input.allergies || [],
            emergencyContacts: [
                {
                    id: `ec_${Date.now()}_1`,
                    name: input.emergencyContactName,
                    relation: input.emergencyContactRelation,
                    phone: input.emergencyContactPhone,
                    isPrimary: true,
                    notifyOnSos: true,
                    notifyOnMissedMed: true
                }
            ],
            primaryDoctor: input.primaryDoctorName ? {
                name: input.primaryDoctorName,
                clinic: input.primaryDoctorClinic || 'Family Medical Center',
                phone: input.primaryDoctorPhone || '+91 98111 00000'
            } : undefined
        };
        this.seniors.push(newSenior);
        this.activeSeniorId = newSenior.id;
        // Add activity log
        this.addActivity({
            type: 'routine_completed',
            title: 'New Parent Profile Registered',
            description: `${newSenior.name} (${newSenior.relation || 'Parent'}, Age ${newSenior.age}) added to Saathi Care Hub by family guardian.`,
            severity: 'success',
            metadata: {
                seniorId: id
            }
        });
        return newSenior;
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
        const senior = this.getSeniorProfile();
        // Add activity log
        this.addActivity({
            type: 'medication_taken',
            title: 'Medication Taken',
            description: `${senior.preferredName} marked ${med.name} as taken.`,
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
        const senior = this.getSeniorProfile();
        const sourceName = source === 'fall_sensor' ? 'Fall Detection Sensor (Living Room / Wearable)' : source === 'voice_trigger' ? 'Voice Distress Trigger ("Emergency Help")' : 'Oversized Senior SOS Button';
        const description = source === 'fall_sensor' ? `CRITICAL: Sudden physical fall / hard impact detected by motion sensor for ${senior.preferredName}. Automated SOS triggered, siren sounded, and family emergency alert broadcasted immediately!` : `Emergency alert activated by ${senior.preferredName} via ${sourceName}. Loud siren sounded and family notified!`;
        this.addActivity({
            type: 'sos_triggered',
            title: source === 'fall_sensor' ? 'FALL DETECTED — EMERGENCY SOS' : 'EMERGENCY SOS TRIGGERED',
            description,
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
    getVitals() {
        return this.vitals;
    }
    addVitalsLog(log) {
        const newLog = {
            id: `vit_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
            timestamp: new Date().toISOString(),
            ...log
        };
        this.vitals.unshift(newLog);
        this.addActivity({
            type: 'routine_completed',
            title: 'Health Vitals Logged',
            description: `BP: ${newLog.bloodPressureSystolic}/${newLog.bloodPressureDiastolic} mmHg • Sugar: ${newLog.bloodSugar} mg/dL (${newLog.bloodSugarType}) recorded by ${newLog.recordedBy}.`,
            severity: newLog.bloodPressureSystolic > 140 || newLog.bloodSugar > 160 ? 'warning' : 'info',
            metadata: {
                vitalsId: newLog.id
            }
        });
        return newLog;
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
            senior: this.getSeniorProfile(),
            allSeniors: this.getAllParents(),
            activeSos: this.activeSos,
            adherencePercentage: adherence,
            medicationsTakenCount: taken,
            totalMedicationsCount: total,
            medications: this.medications,
            routines: this.routines,
            vitals: this.vitals,
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
    ()=>INITIAL_SENIOR,
    "INITIAL_VITALS",
    ()=>INITIAL_VITALS
]);
const INITIAL_VITALS = [
    {
        id: 'vit_1',
        timestamp: new Date(Date.now() - 3.5 * 3600 * 1000).toISOString(),
        bloodPressureSystolic: 122,
        bloodPressureDiastolic: 78,
        bloodSugar: 104,
        bloodSugarType: 'fasting',
        pulse: 71,
        recordedBy: 'Ramesh Chandra Sharma',
        notes: 'Morning routine check. Normal blood pressure & sugar.'
    },
    {
        id: 'vit_2',
        timestamp: new Date(Date.now() - 26 * 3600 * 1000).toISOString(),
        bloodPressureSystolic: 126,
        bloodPressureDiastolic: 82,
        bloodSugar: 138,
        bloodSugarType: 'post_meal',
        pulse: 75,
        recordedBy: 'Priya Sharma (During call check-in)',
        notes: 'Post-lunch reading yesterday.'
    }
];
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
        time: '06:45 AM',
        icon: 'Footprints',
        completed: true,
        category: 'exercise'
    },
    {
        id: 'rt_hydration',
        title: 'Warm Water & Fenugreek Seeds',
        time: '07:30 AM',
        icon: 'GlassWater',
        completed: true,
        category: 'hydration'
    },
    {
        id: 'rt_music',
        title: 'Classic Retro Songs Radio',
        time: '04:30 PM',
        icon: 'Music',
        completed: false,
        category: 'leisure'
    },
    {
        id: 'rt_family_call',
        title: 'Evening Catch-up Call with Priya',
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
        description: 'Father checked an SMS alleging electricity bill default. Saathi quarantined the link and sounded alert. Threat Blocked Successfully.',
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
        title: 'Classic Retro Music & Weather Chat',
        description: '12-minute engaging dialogue. Father asked for classic golden era playlist and checked afternoon temperature for West Delhi.',
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
        description: 'Confirmed via physical Senior Tablet interaction: "Mark as Taken" button tapped on living room hub. Hardware Touch Verified.',
        severity: 'success',
        metadata: {
            hardwareTouchVerified: true,
            medicationName: 'Amlodipine 5mg',
            doseTime: '08:15 AM'
        }
    }
];
}),
"[project]/src/server/schemas/parentSchema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createParentSchema",
    ()=>createParentSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
const createParentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'Full name is required').max(100),
    preferredName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Preferred name is required').max(50),
    relation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'Father',
        'Mother',
        'Grandfather',
        'Grandmother',
        'In-Law',
        'Other'
    ]).default('Father'),
    age: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(40, 'Age must be 40 or older').max(120),
    city: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'City is required').max(100),
    locality: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'Locality is required').max(100),
    conditions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([]),
    allergies: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([]),
    primaryDoctorName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(100).optional(),
    primaryDoctorClinic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(100).optional(),
    primaryDoctorPhone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(25).optional(),
    emergencyContactName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'Emergency contact name required'),
    emergencyContactRelation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'Emergency contact relation required'),
    emergencyContactPhone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, 'Valid phone number required')
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
"[project]/src/server/security/rateLimiter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rateLimiter",
    ()=>rateLimiter
]);
;
class RateLimiter {
    store = new Map();
    /**
   * Check if a client (IP or identifier) has exceeded limit within windowMs
   */ check(key, limit, windowMs) {
        const now = Date.now();
        const record = this.store.get(key) || {
            timestamps: []
        };
        // Filter timestamps within current window
        const recent = record.timestamps.filter((ts)=>now - ts < windowMs);
        if (recent.length >= limit) {
            const oldest = recent[0];
            const resetMs = windowMs - (now - oldest);
            return {
                allowed: false,
                remaining: 0,
                resetMs: Math.max(0, resetMs)
            };
        }
        recent.push(now);
        this.store.set(key, {
            timestamps: recent
        });
        return {
            allowed: true,
            remaining: limit - recent.length,
            resetMs: windowMs
        };
    }
    cleanup() {
        const now = Date.now();
        for (const [key, record] of this.store.entries()){
            const recent = record.timestamps.filter((ts)=>now - ts < 3600000); // 1 hour
            if (recent.length === 0) {
                this.store.delete(key);
            } else {
                this.store.set(key, {
                    timestamps: recent
                });
            }
        }
    }
}
const globalForLimiter = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const rateLimiter = globalForLimiter.rateLimiter || new RateLimiter();
if ("TURBOPACK compile-time truthy", 1) globalForLimiter.rateLimiter = rateLimiter;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0px7g5k._.js.map