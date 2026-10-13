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
"[project]/src/app/api/v1/family/summary/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$careStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db/careStore.ts [app-route] (ecmascript)");
;
;
async function GET() {
    const summary = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$careStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["careStore"].getFamilySummary();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data: summary,
        timestamp: new Date().toISOString()
    });
}
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
    senior = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_SENIOR"]
    };
    medications = JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_MEDICATIONS"]));
    routines = JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_ROUTINES"]));
    activities = JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_ACTIVITIES"]));
    vitals = JSON.parse(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$seedData$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INITIAL_VITALS"]));
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
        const sourceName = source === 'fall_sensor' ? 'Fall Detection Sensor (Living Room / Wearable)' : source === 'voice_trigger' ? 'Voice Distress Trigger ("Bachao / Help")' : 'Oversized Senior SOS Button';
        const description = source === 'fall_sensor' ? `CRITICAL: Sudden physical fall / hard impact detected by motion sensor for ${this.senior.preferredName}. Automated SOS triggered, siren sounded, and family emergency alert broadcasted immediately!` : `Emergency alert activated by ${this.senior.preferredName} via ${sourceName}. Loud siren sounded and family notified!`;
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
            senior: this.senior,
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
        description: 'Papa checked an SMS alleging electricity bill default. Saathi quarantined the link and sounded alert. Threat Blocked Successfully.',
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
        description: '12-minute engaging dialogue. Papa asked for classic golden era playlist and checked afternoon temperature for West Delhi.',
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__188cmwg._.js.map