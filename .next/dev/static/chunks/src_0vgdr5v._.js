(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/senior/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeniorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/client/services/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$components$2f$common$2f$SaathiHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/client/components/common/SaathiHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$components$2f$common$2f$SaathiBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/client/components/common/SaathiBottomNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$components$2f$senior$2f$SeniorCompanionStitch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/client/components/senior/SeniorCompanionStitch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$components$2f$modals$2f$CareProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/client/components/modals/CareProfileModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function SeniorPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profileModalOpen, setProfileModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const loadData = async ()=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchFamilySummary"])();
            setSummary(data);
        } catch (e) {
            console.error('Failed to load senior data:', e);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeniorPage.useEffect": ()=>{
            loadData();
            const interval = setInterval(loadData, 4000);
            return ({
                "SeniorPage.useEffect": ()=>clearInterval(interval)
            })["SeniorPage.useEffect"];
        }
    }["SeniorPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-surface font-body text-on-surface flex flex-col antialiased",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$components$2f$common$2f$SaathiHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaathiHeader"], {
                currentTab: "senior",
                onTabChange: (tab)=>{
                    if (tab === 'senior') return;
                    if (tab === 'family') router.push('/family');
                    else router.push(`/?tab=${tab}`);
                },
                onOpenProfile: ()=>setProfileModalOpen(true),
                senior: summary?.senior
            }, void 0, false, {
                fileName: "[project]/src/app/senior/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 w-full",
                children: summary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$components$2f$senior$2f$SeniorCompanionStitch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeniorCompanionStitch"], {
                    summary: summary,
                    onRefresh: loadData,
                    onOpenScamShield: ()=>router.push('/?tab=scam')
                }, void 0, false, {
                    fileName: "[project]/src/app/senior/page.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center min-h-[60vh] text-on-surface-variant text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined text-3xl text-primary animate-spin mr-2",
                            children: "progress_activity"
                        }, void 0, false, {
                            fileName: "[project]/src/app/senior/page.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        "Loading Senior Companion Hub..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/senior/page.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/senior/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$components$2f$common$2f$SaathiBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaathiBottomNav"], {
                currentTab: "senior",
                onTabChange: (tab)=>{
                    if (tab === 'senior') return;
                    if (tab === 'family') router.push('/family');
                    else router.push(`/?tab=${tab}`);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/senior/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$components$2f$modals$2f$CareProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CareProfileModal"], {
                isOpen: profileModalOpen,
                onClose: ()=>setProfileModalOpen(false),
                senior: summary?.senior,
                onSwitchMode: (mode)=>{
                    if (mode === 'family') router.push('/family');
                }
            }, void 0, false, {
                fileName: "[project]/src/app/senior/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/senior/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(SeniorPage, "5eMMSfQqn4FFYWTHmjOvc6HYlNA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SeniorPage;
var _c;
__turbopack_context__.k.register(_c, "SeniorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/client/components/common/SaathiBottomNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaathiBottomNav",
    ()=>SaathiBottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function SaathiBottomNav({ currentTab, onTabChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl border-t border-surface-container-high/80 shadow-[0_-2px_12px_rgba(25,29,25,0.04)]",
        "aria-label": "Bottom Navigation",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-around items-stretch h-16 px-2 max-w-lg mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onTabChange('senior'),
                    className: `flex flex-1 flex-col items-center justify-center gap-0.5 min-w-[64px] min-h-[44px] transition-all py-1 relative group cursor-pointer ${currentTab === 'senior' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`,
                    "data-path": "senior-companion",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `material-symbols-outlined text-2xl transition-transform duration-200 ${currentTab === 'senior' ? 'scale-110' : 'group-hover:-translate-y-0.5'}`,
                            children: "volunteer_activism"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-semibold tracking-tight text-center",
                            children: "Senior Care"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        currentTab === 'senior' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-primary absolute bottom-1 animate-pulse-dot"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onTabChange('family'),
                    "aria-current": currentTab === 'family' ? 'page' : undefined,
                    className: `flex flex-1 flex-col items-center justify-center gap-0.5 min-w-[64px] min-h-[44px] transition-all py-1 relative group cursor-pointer ${currentTab === 'family' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`,
                    "data-path": "family-portal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `material-symbols-outlined text-2xl transition-transform duration-200 ${currentTab === 'family' ? 'scale-110' : 'group-hover:-translate-y-0.5'}`,
                            children: "monitor_heart"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-bold tracking-tight text-center",
                            children: "Family Portal"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        currentTab === 'family' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-primary absolute bottom-1 animate-pulse-dot"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onTabChange('scam'),
                    className: `flex flex-1 flex-col items-center justify-center gap-0.5 min-w-[64px] min-h-[44px] transition-all py-1 relative group cursor-pointer ${currentTab === 'scam' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`,
                    "data-path": "scam-shield",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `material-symbols-outlined text-2xl transition-transform duration-200 ${currentTab === 'scam' ? 'scale-110' : 'group-hover:-translate-y-0.5'}`,
                            children: "gshield"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-semibold tracking-tight text-center",
                            children: "Scam Shield"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        currentTab === 'scam' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-primary absolute bottom-1 animate-pulse-dot"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onTabChange('audit'),
                    className: `flex flex-1 flex-col items-center justify-center gap-0.5 min-w-[64px] min-h-[44px] transition-all py-1 relative group cursor-pointer ${currentTab === 'audit' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`,
                    "data-path": "soc-2-audit-care",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `material-symbols-outlined text-2xl transition-transform duration-200 ${currentTab === 'audit' ? 'scale-110' : 'group-hover:-translate-y-0.5'}`,
                            children: "verified_user"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-semibold tracking-tight text-center",
                            children: "Audit & Care"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        currentTab === 'audit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-primary absolute bottom-1 animate-pulse-dot"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/client/components/common/SaathiBottomNav.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = SaathiBottomNav;
var _c;
__turbopack_context__.k.register(_c, "SaathiBottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/client/components/common/SaathiHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaathiHeader",
    ()=>SaathiHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function SaathiHeader({ currentTab, onTabChange, onOpenProfile, senior }) {
    const getTabLabel = ()=>{
        switch(currentTab){
            case 'family':
                return 'Family Portal';
            case 'senior':
                return 'Senior Hub';
            case 'scam':
                return 'Scam Shield';
            case 'audit':
                return 'Audit & Care';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl border-b border-surface-container-high/60 shadow-[0_2px_12px_rgba(25,29,25,0.03)] transition-all",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-20 px-4 sm:px-6 flex items-center justify-between gap-3 max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onTabChange('family'),
                            className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary border border-primary/20 transition-transform hover:scale-105 active:scale-95 cursor-pointer",
                            title: "Saathi Home",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-2xl text-primary",
                                children: "nest_eco_leaf"
                            }, void 0, false, {
                                fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 leading-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-headline font-bold text-xl text-primary tracking-tight",
                                            children: "Saathi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-outline font-medium",
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-body text-xs font-bold text-secondary uppercase tracking-wider truncate",
                                            children: getTabLabel()
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-primary animate-pulse-dot flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-on-surface-variant font-medium truncate",
                                            children: [
                                                senior?.preferredName || 'Papa',
                                                " Active • ",
                                                senior?.locality ? 'Janakpuri' : 'Delhi'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 text-xs font-semibold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onTabChange('family'),
                            className: `px-3 py-1.5 rounded-lg transition-all cursor-pointer ${currentTab === 'family' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`,
                            children: "Family Portal"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onTabChange('senior'),
                            className: `px-3 py-1.5 rounded-lg transition-all cursor-pointer ${currentTab === 'senior' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`,
                            children: "Senior Care"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onTabChange('scam'),
                            className: `px-3 py-1.5 rounded-lg transition-all cursor-pointer ${currentTab === 'scam' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`,
                            children: "Scam Shield"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onTabChange('audit'),
                            className: `px-3 py-1.5 rounded-lg transition-all cursor-pointer ${currentTab === 'audit' ? 'bg-primary text-on-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`,
                            children: "SOC 2 Audit"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onOpenProfile,
                        "aria-label": "Care Profile Switcher",
                        className: "relative p-0.5 rounded-full ring-2 ring-primary/20 hover:ring-primary/50 transition-all hover:scale-105 active:scale-95 focus:outline-none cursor-pointer",
                        title: "View Caregiver & Senior Profile",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                alt: "Priya Sharma",
                                className: "w-10 h-10 rounded-full object-cover",
                                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW085qJ3na6gbyskBvjQAW_MEINbKgEUPK76FRqtyru509luuXv-8JcvDU0U67Qp4E8m5cVAfJOEJnY0HWZwybDkGVS6SpO3wb27j25Y98krcuukay3SvZM-3MxsIynmt7ADS47bPIHrGsyitXNbYGUCyhnRha2Po_cyJFJGB2VzQ3A96C0NNrpsxfXKTRFEhcK6WbQodLaAZaUvRTHcf_0Blo3F_yzxT221fxixgrLN6Vsn8DvCY"
                            }, void 0, false, {
                                fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-surface animate-pulse-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/client/components/common/SaathiHeader.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = SaathiHeader;
var _c;
__turbopack_context__.k.register(_c, "SaathiHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/client/components/modals/CareProfileModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CareProfileModal",
    ()=>CareProfileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function CareProfileModal({ isOpen, onClose, senior, onSwitchMode }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-surface-container-lowest rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-outline-variant/40 max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pb-4 border-b border-outline-variant/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-primary text-2xl",
                                    children: "manage_accounts"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-headline font-bold text-xl text-on-surface",
                                    children: "Care Profile & Hub"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-lg",
                                children: "close"
                            }, void 0, false, {
                                fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: "Priya Sharma",
                            className: "w-14 h-14 rounded-2xl object-cover ring-2 ring-primary/30",
                            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW085qJ3na6gbyskBvjQAW_MEINbKgEUPK76FRqtyru509luuXv-8JcvDU0U67Qp4E8m5cVAfJOEJnY0HWZwybDkGVS6SpO3wb27j25Y98krcuukay3SvZM-3MxsIynmt7ADS47bPIHrGsyitXNbYGUCyhnRha2Po_cyJFJGB2VzQ3A96C0NNrpsxfXKTRFEhcK6WbQodLaAZaUvRTHcf_0Blo3F_yzxT221fxixgrLN6Vsn8DvCY"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-headline font-bold text-base text-on-surface",
                                            children: "Priya Sharma"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant uppercase",
                                            children: "Primary Caregiver"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-on-surface-variant mt-0.5",
                                    children: "Monitoring remotely from Indiranagar, Bangalore"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-primary font-semibold mt-1 flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-sm",
                                            children: "wifi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        " Connected to Delhi Tablet Node DEL-8472"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 p-4 rounded-2xl bg-surface-container border border-outline-variant/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: "Ramesh Sharma",
                                    className: "w-14 h-14 rounded-2xl object-cover ring-2 ring-primary/30",
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvigIpS2ATby-uoiW00Ja_LbcvXuy5ug_3HH5KCbuALXUU22gKcTNW06fG0cm_PCqJVtixSMvhrtPg5cITOhAMR8_RIxZrkUZZ2Urla2xsNSkRhYNGV4cYTPPkM1D66PMyfedIk6pYDa-4UKqeMxNqg8JvTCCHUj_s7UM6XMEfKforiaX8zMwSB4-rbNjN3KBlGo456Yy-XTDGeXBjTm4NKnKQCQ8TRzxpSsIgkh9lBDcuuFwTbByR"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-headline font-bold text-base text-on-surface",
                                            children: senior?.name || 'Ramesh Chandra Sharma'
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-on-surface-variant",
                                            children: [
                                                senior?.age || 73,
                                                " yrs • ",
                                                senior?.locality || 'B-Block, Janakpuri',
                                                ", ",
                                                senior?.city || 'New Delhi'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1 mt-1.5",
                                            children: (senior?.conditions || [
                                                'Mild Hypertension',
                                                'Type-2 Diabetes'
                                            ]).map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-semibold bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded-md",
                                                    children: c
                                                }, i, false, {
                                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 pt-3 border-t border-outline-variant/30 flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onSwitchMode('family');
                                        onClose();
                                    },
                                    className: "flex-1 py-2 px-3 rounded-xl bg-primary text-on-primary font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-primary-container transition-all cursor-pointer shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-base",
                                            children: "monitor_heart"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        "Family Portal"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onSwitchMode('senior');
                                        onClose();
                                    },
                                    className: "flex-1 py-2 px-3 rounded-xl bg-secondary text-on-secondary font-bold text-xs flex items-center justify-center gap-1.5 hover:opacity-90 transition-all cursor-pointer shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-base",
                                            children: "volunteer_activism"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this),
                                        "Senior Companion"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-headline font-semibold text-xs text-secondary uppercase tracking-wider mb-2.5",
                            children: "Emergency Escalation Circle"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: (senior?.emergencyContacts || [
                                {
                                    id: '1',
                                    name: 'Priya Sharma',
                                    relation: 'Daughter (Bangalore)',
                                    phone: '+91 98112 45678'
                                },
                                {
                                    id: '2',
                                    name: 'Dr. Anand Verma',
                                    relation: 'Family Physician (Janakpuri)',
                                    phone: '+91 98711 23456'
                                },
                                {
                                    id: '3',
                                    name: 'Mr. O.P. Gupta',
                                    relation: 'Neighbour (Flat 204)',
                                    phone: '+91 98101 98765'
                                }
                            ]).map((contact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-on-surface",
                                                    children: contact.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-on-surface-variant",
                                                    children: contact.relation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${contact.phone}`,
                                            className: "px-2.5 py-1 rounded-lg bg-surface-container text-primary font-bold hover:bg-primary hover:text-on-primary transition-all flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-sm",
                                                    children: "call"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: contact.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, contact.id, true, {
                                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 pt-3 border-t border-outline-variant/30 text-[11px] text-on-surface-variant flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Encryption: AES-256-GCM / TLS 1.3"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-primary",
                            children: "SOC 2 CC7.2 Verified"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/client/components/modals/CareProfileModal.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = CareProfileModal;
var _c;
__turbopack_context__.k.register(_c, "CareProfileModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/client/components/senior/SeniorCompanionStitch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeniorCompanionStitch",
    ()=>SeniorCompanionStitch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/client/services/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SeniorCompanionStitch({ summary, onRefresh, onOpenScamShield }) {
    _s();
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [textScale, setTextScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('normal');
    const [highContrast, setHighContrast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [speechRate, setSpeechRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.92);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [companionReply, setCompanionReply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Good morning Ramesh Uncle! The weather is pleasant today. Have you had your morning tea?');
    const [sosCountdown, setSosCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sosFired, setSosFired] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [medLoadingId, setMedLoadingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fallSimulating, setFallSimulating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeniorCompanionStitch.useEffect": ()=>{
            const updateTime = {
                "SeniorCompanionStitch.useEffect.updateTime": ()=>{
                    const now = new Date();
                    setCurrentTime(now.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                    }));
                }
            }["SeniorCompanionStitch.useEffect.updateTime"];
            updateTime();
            const interval = setInterval(updateTime, 1000);
            return ({
                "SeniorCompanionStitch.useEffect": ()=>clearInterval(interval)
            })["SeniorCompanionStitch.useEffect"];
        }
    }["SeniorCompanionStitch.useEffect"], []);
    // Web Audio chime for celebrations
    const playChime = ()=>{
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
            osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15); // E5
            osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.3); // G5
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.65);
        } catch (e) {
            console.warn('Audio chime error', e);
        }
    };
    // Web Audio emergency siren
    const playSiren = ()=>{
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(1400, ctx.currentTime + 0.4);
            osc.frequency.linearRampToValueAtTime(800, ctx.currentTime + 0.8);
            gain.gain.setValueAtTime(0.4, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 1.2);
        } catch (e) {
            console.warn('Siren error', e);
        }
    };
    const speakText = (text)=>{
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = speechRate;
            utterance.lang = 'en-US';
            utterance.onstart = ()=>setIsSpeaking(true);
            utterance.onend = ()=>setIsSpeaking(false);
            utterance.onerror = ()=>setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
        }
    };
    const handleTestAudio = ()=>{
        const msg = 'Good morning Ramesh Uncle! Wishing you health and an energetic day. Saathi companion is active.';
        setCompanionReply(msg);
        speakText(msg);
    };
    const handleOrbClick = async ()=>{
        if (isListening) return;
        setIsListening(true);
        setCompanionReply('Listening to you, Ramesh Uncle...');
        // Check SpeechRecognition support
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            recognition.onresult = async (event)=>{
                setIsListening(false);
                const transcript = event.results[0][0].transcript;
                setCompanionReply(`"${transcript}"`);
                try {
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postConverse"])(transcript);
                    const reply = res.reply || 'Very good Ramesh Uncle, I understand!';
                    setCompanionReply(reply);
                    speakText(reply);
                    onRefresh();
                } catch (e) {
                    const fallback = 'Yes Ramesh Uncle! I am always here to assist you.';
                    setCompanionReply(fallback);
                    speakText(fallback);
                }
            };
            recognition.onerror = ()=>{
                setIsListening(false);
                const fallback = 'Yes Ramesh Uncle, I am listening. How are you feeling right now?';
                setCompanionReply(fallback);
                speakText(fallback);
            };
            recognition.start();
        } else {
            // Simulation fallback
            setTimeout(async ()=>{
                setIsListening(false);
                const prompt = 'How is the weather today and play some classic retro music';
                try {
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postConverse"])(prompt);
                    const reply = res.reply || 'Ramesh Uncle, the weather in New Delhi is pleasant at 24°C! Let us enjoy some classic retro tunes.';
                    setCompanionReply(reply);
                    speakText(reply);
                    onRefresh();
                } catch (e) {
                    const fallback = 'Ramesh Uncle, New Delhi has pleasant 24°C weather today! How was your morning walk?';
                    setCompanionReply(fallback);
                    speakText(fallback);
                }
            }, 2000);
        }
    };
    const handleServerPrompt = async (promptText)=>{
        setIsListening(false);
        setCompanionReply('Consulting Saathi, Ramesh Uncle...');
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postConverse"])(promptText);
            const reply = res.reply || 'Very good Ramesh Uncle!';
            setCompanionReply(reply);
            speakText(reply);
            onRefresh();
        } catch (e) {
            console.error('Server conversation error:', e);
            const fallback = 'Yes Ramesh Uncle! I am always here to assist you.';
            setCompanionReply(fallback);
            speakText(fallback);
        }
    };
    const handleTakeMedication = async (med)=>{
        if (med.takenToday) return;
        setMedLoadingId(med.id);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postTakeMedication"])(med.id);
            playChime();
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    particleCount: 65,
                    spread: 70,
                    origin: {
                        y: 0.7
                    },
                    colors: [
                        '#316342',
                        '#b9efc5',
                        '#886e38',
                        '#ffdea0'
                    ]
                });
            } catch (err) {}
            const praise = `Well done Ramesh Uncle! ${med.name} recorded successfully.`;
            speakText(praise);
            onRefresh();
        } catch (e) {
            console.error(e);
        } finally{
            setMedLoadingId(null);
        }
    };
    // SOS button handler with 3-second accidental-touch protection
    const handleSosStart = ()=>{
        if (sosCountdown !== null || sosFired) return;
        setSosCountdown(3);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeniorCompanionStitch.useEffect": ()=>{
            if (sosCountdown === null) return;
            if (sosCountdown > 0) {
                const timer = setTimeout({
                    "SeniorCompanionStitch.useEffect.timer": ()=>{
                        setSosCountdown(sosCountdown - 1);
                    }
                }["SeniorCompanionStitch.useEffect.timer"], 1000);
                return ({
                    "SeniorCompanionStitch.useEffect": ()=>clearTimeout(timer)
                })["SeniorCompanionStitch.useEffect"];
            } else if (sosCountdown === 0) {
                // Fire SOS
                setSosFired(true);
                playSiren();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postTriggerSos"])('senior_button').then({
                    "SeniorCompanionStitch.useEffect": ()=>{
                        onRefresh();
                    }
                }["SeniorCompanionStitch.useEffect"]);
                speakText('Your emergency alert has been sent to Priya immediately!');
            }
        }
    }["SeniorCompanionStitch.useEffect"], [
        sosCountdown
    ]);
    const handleCancelSos = ()=>{
        setSosCountdown(null);
        setSosFired(false);
    };
    const handleSimulateFall = async ()=>{
        setFallSimulating(true);
        playSiren();
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$client$2f$services$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postTriggerSos"])('fall_sensor');
            setSosFired(true);
            onRefresh();
            speakText('Attention! Fall sensor impact detected. Priya has been alerted immediately!');
        } catch (e) {
            console.error(e);
        } finally{
            setFallSimulating(false);
        }
    };
    // Scale classes
    const scaleClass = textScale === 'extra-large' ? 'text-lg sm:text-xl' : textScale === 'large' ? 'text-base sm:text-lg' : 'text-sm';
    const headingScale = textScale === 'extra-large' ? 'text-3xl sm:text-4xl' : textScale === 'large' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col relative w-full pt-20 pb-28 min-h-screen transition-colors ${highContrast ? 'bg-black text-white font-sans' : 'bg-surface text-on-surface'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col w-full px-4 space-y-4 max-w-lg mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-3 rounded-2xl border shadow-xs flex flex-col gap-2.5 ${highContrast ? 'bg-zinc-900 border-yellow-400 text-yellow-300' : 'bg-surface-container-low border-outline-variant/40'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-headline font-bold text-xs uppercase tracking-wider flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-primary text-base",
                                            children: "accessibility_new"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        "Senior Accessibility Controls"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleTestAudio,
                                    className: "px-2.5 py-1 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors",
                                    title: "Speak a greeting aloud",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-sm",
                                            children: "volume_up"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Test Voice"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center bg-surface-container rounded-xl p-1 border border-outline-variant/30 flex-1 max-w-[200px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold text-on-surface-variant px-1.5",
                                            children: "Text Size:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setTextScale('normal'),
                                            className: `flex-1 py-1 rounded-lg text-center font-bold text-[11px] transition-all cursor-pointer ${textScale === 'normal' ? 'bg-secondary text-on-secondary shadow-xs' : 'text-on-surface-variant'}`,
                                            title: "Normal text",
                                            children: "A"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 314,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setTextScale('large'),
                                            className: `flex-1 py-1 rounded-lg text-center font-bold text-xs transition-all cursor-pointer ${textScale === 'large' ? 'bg-secondary text-on-secondary shadow-xs' : 'text-on-surface-variant'}`,
                                            title: "Large text (+20%)",
                                            children: "A+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setTextScale('extra-large'),
                                            className: `flex-1 py-1 rounded-lg text-center font-extrabold text-sm transition-all cursor-pointer ${textScale === 'extra-large' ? 'bg-secondary text-on-secondary shadow-xs' : 'text-on-surface-variant'}`,
                                            title: "Extra large text (+40%)",
                                            children: "A++"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setHighContrast(!highContrast),
                                    className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold cursor-pointer transition-colors ${highContrast ? 'bg-yellow-400 text-black' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-sm",
                                            children: "contrast"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: highContrast ? 'High Contrast ON' : 'High Contrast'
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pt-1 border-t border-outline-variant/20 text-[11px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-on-surface-variant",
                                    children: "Voice Pace:"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSpeechRate(speechRate === 0.92 ? 0.75 : 0.92),
                                    className: "flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold cursor-pointer transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-sm",
                                            children: "speed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: speechRate === 0.75 ? 'Gentle Slow (0.75x)' : 'Normal Pace (0.9x)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 356,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-3xl p-5 shadow-md relative overflow-hidden transition-all ${highContrast ? 'bg-zinc-900 border-2 border-yellow-400 text-yellow-300' : 'bg-gradient-to-br from-primary via-primary-container to-surface-tint text-on-primary'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-90",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Janakpuri, New Delhi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                                lineNumber: 380,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-sm",
                                                        children: "schedule"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, this),
                                                    currentTime || '08:45 AM'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                                lineNumber: 381,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: `font-headline font-bold ${headingScale} mt-1 tracking-tight`,
                                        children: "Good Day Ramesh Uncle! 🙏"
                                    }, void 0, false, {
                                        fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `opacity-90 ${scaleClass} font-medium mt-1`,
                                        children: "Wishing you a peaceful, healthy day. Saathi is always here with you."
                                    }, void 0, false, {
                                        fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                        lineNumber: 396,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Priya Connected"
                                    }, void 0, false, {
                                        fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                lineNumber: 395,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-3xl p-5 border shadow-sm text-center flex flex-col items-center ${highContrast ? 'bg-zinc-900 border-yellow-400/80 text-white' : 'bg-surface-container border-outline-variant/40'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between w-full mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-headline font-bold text-xs uppercase tracking-wide flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-base text-primary",
                                            children: "psychology"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 412,
                                            columnNumber: 15
                                        }, this),
                                        "AI Voice Companion"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant",
                                    children: "English Audio"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 410,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "my-3 relative flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleOrbClick,
                                "aria-label": "Tap to speak with Saathi",
                                className: `w-32 h-32 rounded-full flex flex-col items-center justify-center transition-all cursor-pointer shadow-lg ${isListening ? 'bg-error text-on-error scale-110 animate-pulse' : isSpeaking ? 'bg-tertiary-container text-on-tertiary-container orb-active-pulse' : 'bg-gradient-to-tr from-primary to-primary-container text-on-primary orb-breathe hover:scale-105 active:scale-95'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-5xl",
                                        children: isListening ? 'mic' : isSpeaking ? 'volume_up' : 'graphic_eq'
                                    }, void 0, false, {
                                        fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold mt-1 uppercase tracking-tight",
                                        children: isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Tap to Speak'
                                    }, void 0, false, {
                                        fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                        lineNumber: 436,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 421,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-full mt-2 p-3.5 rounded-2xl border text-left ${highContrast ? 'bg-black border-yellow-400/50 text-yellow-200' : 'bg-surface-container-lowest border-outline-variant/30 text-on-surface'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-on-surface-variant font-medium flex items-center gap-1.5 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-sm text-primary",
                                            children: "chat_bubble"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Saathi Response:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 452,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `font-headline ${scaleClass} font-semibold leading-relaxed`,
                                    children: [
                                        "“",
                                        companionReply,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 454,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full mt-3 grid grid-cols-2 gap-2 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleServerPrompt('Tell me trivia about classic golden era songs and melodies'),
                                    className: "p-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/30 text-left font-semibold text-on-surface flex items-center gap-2 cursor-pointer transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🎵"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: "Classic Golden Era Music"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 461,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleServerPrompt('How is the weather today in New Delhi?'),
                                    className: "p-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/30 text-left font-semibold text-on-surface flex items-center gap-2 cursor-pointer transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "⛅"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 472,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: "New Delhi Weather"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 473,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 468,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 460,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `font-headline font-bold ${headingScale} text-on-surface flex items-center gap-2`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-primary text-2xl",
                                            children: "medication"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 482,
                                            columnNumber: 15
                                        }, this),
                                        "Today's Medications"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 481,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-primary font-bold bg-primary/10 px-2.5 py-0.5 rounded-lg",
                                    children: [
                                        summary.medicationsTakenCount,
                                        " of ",
                                        summary.totalMedicationsCount,
                                        " Taken"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 480,
                            columnNumber: 11
                        }, this),
                        summary.medications.map((med)=>{
                            const isTaken = med.takenToday;
                            const isLoading = medLoadingId === med.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 rounded-2xl border transition-all shadow-xs ${isTaken ? 'bg-surface-container-low border-primary/30 opacity-90' : highContrast ? 'bg-zinc-900 border-2 border-yellow-400' : 'bg-surface-container-lowest border-outline-variant/40 hover:border-primary/50'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[10px] font-bold px-2 py-0.5 rounded uppercase ${med.timeSlot === 'morning' ? 'bg-primary-fixed text-on-primary-fixed-variant' : med.timeSlot === 'afternoon' ? 'bg-secondary-fixed text-on-secondary-fixed-variant' : 'bg-tertiary-fixed text-on-tertiary-fixed-variant'}`,
                                                            children: [
                                                                med.timeSlot,
                                                                " • ",
                                                                med.scheduledTime
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 23
                                                        }, this),
                                                        isTaken && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold text-primary flex items-center gap-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-sm",
                                                                    children: "check_circle"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                                                    lineNumber: 521,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "Taken ✓"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                                            lineNumber: 520,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `font-headline font-bold ${scaleClass} text-on-surface mt-1 truncate`,
                                                    children: med.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-on-surface-variant font-medium",
                                                    children: [
                                                        med.dosage,
                                                        " • ",
                                                        med.notes || 'Routine prescription'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-primary font-semibold mt-1",
                                                    children: med.instructionsEnglish
                                                }, void 0, false, {
                                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 506,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTakeMedication(med),
                                            disabled: isTaken || isLoading,
                                            className: `px-4 py-3 rounded-2xl font-headline font-bold ${scaleClass} flex items-center gap-2 transition-all cursor-pointer shadow-xs ${isTaken ? 'bg-primary/10 text-primary border border-primary/20 cursor-default' : 'bg-primary text-on-primary hover:bg-primary-container active:scale-95'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-xl",
                                                    children: isTaken ? 'check' : 'check_circle'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isTaken ? 'Taken ✓' : isLoading ? 'Saving...' : 'Mark as Taken'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                                    lineNumber: 551,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 539,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 505,
                                    columnNumber: 17
                                }, this)
                            }, med.id, false, {
                                fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                lineNumber: 495,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                    lineNumber: 479,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: onOpenScamShield,
                    className: "p-4 rounded-2xl bg-surface-container border border-outline-variant/40 shadow-xs flex items-center justify-between hover:border-primary/50 cursor-pointer transition-all hover:shadow-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-11 h-11 rounded-2xl bg-error-container text-on-error-container flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-2xl",
                                        children: "gshield"
                                    }, void 0, false, {
                                        fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                        lineNumber: 568,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-headline font-bold text-sm text-on-surface",
                                            children: "Suspicious Message & Screenshot Checker (Scam Shield)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 571,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-on-surface-variant",
                                            children: "Verify WhatsApp, SMS, or screenshot images for cyber fraud"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 574,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 570,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 566,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined text-xl text-primary",
                            children: "arrow_forward_ios"
                        }, void 0, false, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 579,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                    lineNumber: 562,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3.5 rounded-2xl bg-secondary-container/30 border border-secondary/30 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 rounded-xl bg-secondary text-on-secondary flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-xl",
                                        children: "personal_injury"
                                    }, void 0, false, {
                                        fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                        lineNumber: 586,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 585,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-headline font-bold text-xs text-on-surface",
                                            children: "Fall Detection Motion Sensor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 589,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-on-surface-variant",
                                            children: "Simulate living room impact / fall alert"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 590,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 588,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 584,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSimulateFall,
                            disabled: fallSimulating,
                            className: "px-3 py-1.5 rounded-xl bg-secondary text-on-secondary font-headline font-bold text-xs hover:bg-secondary/90 transition-all cursor-pointer shadow-xs flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-sm",
                                    children: "notification_important"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 598,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: fallSimulating ? 'Testing...' : 'Simulate Fall'
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 593,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                    lineNumber: 583,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl bg-error-container/40 p-4 border border-error/30 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-headline font-bold text-xs uppercase tracking-wide text-error flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-base",
                                            children: "emergency_home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                            lineNumber: 607,
                                            columnNumber: 15
                                        }, this),
                                        "Emergency Escalation"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 606,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-semibold text-on-error-container",
                                    children: "Siren + Family Alert"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 610,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 605,
                            columnNumber: 11
                        }, this),
                        sosCountdown !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-2xl bg-error text-on-error animate-pulse flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-headline font-bold text-lg",
                                    children: [
                                        "Emergency Alert Triggering in ",
                                        sosCountdown,
                                        "s!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 617,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-error-container mt-0.5",
                                    children: "Priya and Dr. Verma will be notified immediately."
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 620,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCancelSos,
                                    className: "mt-3 px-6 py-2.5 rounded-xl bg-surface-container-lowest text-error font-bold text-xs hover:bg-surface shadow-md cursor-pointer",
                                    children: "Tapped by mistake? Tap to Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 623,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 616,
                            columnNumber: 13
                        }, this) : sosFired ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-2xl bg-error text-on-error flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-3xl",
                                    children: "warning"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 632,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-headline font-bold text-base mt-1",
                                    children: "EMERGENCY SOS ACTIVE"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 633,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-error-container mt-0.5",
                                    children: "Siren sounded. Priya has received your urgent location and alert."
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 634,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCancelSos,
                                    className: "mt-3 px-5 py-2 rounded-xl bg-surface-container-lowest text-error font-bold text-xs hover:bg-surface shadow-md cursor-pointer",
                                    children: "I Am Safe Now (Reset SOS)"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 637,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 631,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSosStart,
                            className: "w-full py-4 rounded-2xl bg-error text-on-error font-headline font-extrabold text-lg flex items-center justify-center gap-2 hover:bg-error/90 active:scale-95 transition-all cursor-pointer shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-2xl",
                                    children: "sos"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 649,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "EMERGENCY SOS (I Need Help)"
                                }, void 0, false, {
                                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                                    lineNumber: 650,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                            lineNumber: 645,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
                    lineNumber: 604,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
            lineNumber: 285,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/client/components/senior/SeniorCompanionStitch.tsx",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
_s(SeniorCompanionStitch, "6rMqaB/czvhqHzYrgDqcmyF9lUo=");
_c = SeniorCompanionStitch;
var _c;
__turbopack_context__.k.register(_c, "SeniorCompanionStitch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/client/services/apiClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAuditLogs",
    ()=>fetchAuditLogs,
    "fetchFamilySummary",
    ()=>fetchFamilySummary,
    "fetchVitals",
    ()=>fetchVitals,
    "postAddMedication",
    ()=>postAddMedication,
    "postAnalyzeScam",
    ()=>postAnalyzeScam,
    "postConverse",
    ()=>postConverse,
    "postLogVitals",
    ()=>postLogVitals,
    "postResolveSos",
    ()=>postResolveSos,
    "postTakeMedication",
    ()=>postTakeMedication,
    "postTriggerSos",
    ()=>postTriggerSos
]);
async function fetchFamilySummary() {
    const res = await fetch('/api/v1/family/summary', {
        cache: 'no-store'
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error?.message || 'Failed to fetch summary');
    return json.data;
}
async function postTakeMedication(id) {
    const res = await fetch(`/api/v1/medications/${id}/take`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error?.message || 'Failed to mark medication');
    return json.data.medication;
}
async function postAddMedication(data) {
    const res = await fetch('/api/v1/medications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-user-role': 'caregiver'
        },
        body: JSON.stringify(data)
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error?.message || 'Failed to add medication');
    return json.data;
}
async function postTriggerSos(source = 'senior_button') {
    const res = await fetch('/api/v1/sos/trigger', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            source
        })
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error?.message || 'Failed to trigger SOS');
    return json.data;
}
async function postResolveSos(resolvedBy, note) {
    const res = await fetch('/api/v1/sos/resolve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-user-role': 'caregiver'
        },
        body: JSON.stringify({
            resolvedBy,
            note
        })
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error?.message || 'Failed to resolve SOS');
    return json.data;
}
async function postConverse(message, history = []) {
    const res = await fetch('/api/v1/companion/converse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message,
            conversationHistory: history
        })
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error?.message || 'Failed to converse with Saathi');
    return json.data;
}
async function postAnalyzeScam(text, imageBase64) {
    const res = await fetch('/api/v1/scam/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text,
            imageBase64
        })
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error?.message || 'Failed to analyze scam message');
    return json.data;
}
async function fetchVitals() {
    const res = await fetch('/api/v1/vitals', {
        cache: 'no-store'
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error?.message || 'Failed to fetch vitals');
    return json.data;
}
async function postLogVitals(data) {
    const res = await fetch('/api/v1/vitals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-user-role': 'caregiver'
        },
        body: JSON.stringify(data)
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error?.message || 'Failed to log vitals');
    return json.data;
}
async function fetchAuditLogs(limit = 30) {
    const res = await fetch(`/api/v1/audit-logs?limit=${limit}`, {
        headers: {
            'x-user-role': 'caregiver'
        },
        cache: 'no-store'
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error?.message || 'Failed to fetch audit logs');
    return json.data.logs;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0vgdr5v._.js.map