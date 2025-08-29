(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/Common/RPTLogoTitle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RPTLogoTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function RPTLogoTitle({ small = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-row items-center ${small ? "" : "mb-6"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/RPTracker/RPTLogo.png",
                alt: "RPTracker Logo",
                className: `${small ? "h-8 w-8 mr-2" : "h-16 w-16 mr-4"} object-contain drop-shadow-md`
            }, void 0, false, {
                fileName: "[project]/components/Common/RPTLogoTitle.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `font-bold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent ${small ? "text-xl" : "text-5xl"}`,
                children: "RPTracker"
            }, void 0, false, {
                fileName: "[project]/components/Common/RPTLogoTitle.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Common/RPTLogoTitle.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = RPTLogoTitle;
var _c;
__turbopack_context__.k.register(_c, "RPTLogoTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Proponent/Sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$RPTLogoTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Common/RPTLogoTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Memoized SVG icons to prevent unnecessary re-renders
const DashboardIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "7",
                height: "9",
                x: "3",
                y: "3",
                rx: "1",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "7",
                height: "5",
                x: "14",
                y: "3",
                rx: "1",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 10,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "7",
                height: "9",
                x: "14",
                y: "12",
                rx: "1",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "7",
                height: "5",
                x: "3",
                y: "16",
                rx: "1",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Proponent/Sidebar.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, this));
_c = DashboardIcon;
const CalendarIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "5",
                width: "18",
                height: "16",
                rx: "2",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "8",
                width: "18",
                height: "2",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "7",
                y: "12",
                width: "2",
                height: "2",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "11",
                y: "12",
                width: "2",
                height: "2",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "15",
                y: "12",
                width: "2",
                height: "2",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Proponent/Sidebar.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, this));
_c1 = CalendarIcon;
const StudentsIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "12",
                cy: "8",
                rx: "4",
                ry: "4",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 18v-2c0-2.66 5.33-4 8-4s8 1.34 8 4v2",
                stroke: "#013300",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Proponent/Sidebar.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c2 = StudentsIcon;
const TeachersIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "4",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "8",
                r: "4",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "16",
                width: "20",
                height: "4",
                rx: "2",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Proponent/Sidebar.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, this));
_c3 = TeachersIcon;
const MaterialsIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "7",
                width: "18",
                height: "14",
                rx: "2",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "7",
                y: "3",
                width: "10",
                height: "4",
                rx: "1",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Proponent/Sidebar.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, this));
_c4 = MaterialsIcon;
const RemedialIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "16",
                height: "20",
                x: "4",
                y: "2",
                rx: "2",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 6h4",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 51,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 10h4",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 52,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 14h4",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 18h4",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 8h5",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 55,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 12H16",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 56,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 16H14",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 57,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Proponent/Sidebar.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, this));
_c5 = RemedialIcon;
const ArchiveIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "5",
                rx: "2",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 63,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5",
                y: "9",
                width: "14",
                height: "11",
                rx: "2",
                stroke: "#013300",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 64,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12v4m0 0l2-2m-2 2l-2-2",
                stroke: "#013300",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 65,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Proponent/Sidebar.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, this));
_c6 = ArchiveIcon;
function Sidebar() {
    _s();
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Menu items with navigation paths
    const menuItems = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Sidebar.useMemo[menuItems]": ()=>[
                {
                    label: "Dashboard",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardIcon, {}, void 0, false, {
                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                        lineNumber: 77,
                        columnNumber: 35
                    }, this),
                    path: "/Proponent/dashboard"
                },
                {
                    label: "Calendar",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarIcon, {}, void 0, false, {
                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                        lineNumber: 78,
                        columnNumber: 34
                    }, this),
                    path: "/Proponent/calendar"
                },
                {
                    label: "Students",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentsIcon, {}, void 0, false, {
                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                        lineNumber: 79,
                        columnNumber: 34
                    }, this),
                    path: "/Proponent/students"
                },
                {
                    label: "Teachers",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeachersIcon, {}, void 0, false, {
                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                        lineNumber: 80,
                        columnNumber: 34
                    }, this),
                    path: "/Proponent/teachers"
                },
                {
                    label: "Materials",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MaterialsIcon, {}, void 0, false, {
                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                        lineNumber: 81,
                        columnNumber: 35
                    }, this),
                    path: "/Proponent/materials"
                },
                {
                    label: "Remedial",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RemedialIcon, {}, void 0, false, {
                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                        lineNumber: 82,
                        columnNumber: 34
                    }, this),
                    path: "/Proponent/remedial"
                },
                {
                    label: "Archive",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArchiveIcon, {}, void 0, false, {
                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                        lineNumber: 83,
                        columnNumber: 33
                    }, this),
                    path: "/Proponent/archive"
                }
            ]
    }["Sidebar.useMemo[menuItems]"], []);
    // Memoized toggle function
    const toggleSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Sidebar.useCallback[toggleSidebar]": ()=>{
            setOpen({
                "Sidebar.useCallback[toggleSidebar]": (prev)=>!prev
            }["Sidebar.useCallback[toggleSidebar]"]);
        }
    }["Sidebar.useCallback[toggleSidebar]"], []);
    // Memoized close function
    const closeSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Sidebar.useCallback[closeSidebar]": ()=>{
            setOpen(false);
        }
    }["Sidebar.useCallback[closeSidebar]"], []);
    // Handle navigation with sidebar close
    const handleNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Sidebar.useCallback[handleNavigation]": (path)=>{
            router.push(path);
            closeSidebar();
        }
    }["Sidebar.useCallback[handleNavigation]"], [
        router,
        closeSidebar
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "md:hidden fixed top-5 left-4 z-50 bg-green-50 p-2 rounded-lg shadow-md",
                onClick: toggleSidebar,
                "aria-label": "Open sidebar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    fill: "none",
                    stroke: "#013300",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "4",
                            y1: "6",
                            x2: "20",
                            y2: "6"
                        }, void 0, false, {
                            fileName: "[project]/components/Proponent/Sidebar.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "4",
                            y1: "12",
                            x2: "20",
                            y2: "12"
                        }, void 0, false, {
                            fileName: "[project]/components/Proponent/Sidebar.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "4",
                            y1: "18",
                            x2: "20",
                            y2: "18"
                        }, void 0, false, {
                            fileName: "[project]/components/Proponent/Sidebar.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Proponent/Sidebar.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `
          fixed z-50 top-0 left-0 h-full w-64 bg-green-50 flex flex-col px-6 py-8 font-sans 
          transition-transform duration-300 shadow-xl border-r border-green-100
          ${open ? "translate-x-0" : "-translate-x-full"} rounded-xl
          md:static md:translate-x-0 md:min-h-screen
        `,
                style: {
                    maxWidth: "100vw"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex md:hidden justify-end mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-2 rounded hover:bg-green-100",
                            onClick: closeSidebar,
                            "aria-label": "Close sidebar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                fill: "none",
                                stroke: "#013300",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Proponent/Sidebar.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Proponent/Sidebar.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$RPTLogoTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        small: true
                    }, void 0, false, {
                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-6 border-b border-[#013300]"
                    }, void 0, false, {
                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col gap-3",
                        children: menuItems.map((item)=>{
                            const isActive = pathname === item.path;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `
                  flex items-center gap-4 font-medium text-base px-3 py-2 rounded-lg transition-all
                  ${isActive ? "bg-[#013300] text-white shadow" : "text-[#013300]"}
                  hover:ring-2 hover:ring-[#013300] hover:scale-[1.03] hover:shadow
                  focus:outline-none focus:ring-2 focus:bg-[#013300] focus:text-white
                  active:bg-[#013300] active:text-white
                `,
                                onClick: ()=>handleNavigation(item.path),
                                "aria-current": isActive ? "page" : undefined,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `rounded-lg p-1 flex items-center justify-center shadow-md ${isActive ? "bg-white text-[#013300]" : "bg-green-50"}`,
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tracking-wide",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/components/Proponent/Sidebar.tsx",
                                lineNumber: 171,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/Proponent/Sidebar.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 backdrop-blur-xs bg-opacity-30 z-40 md:hidden",
                onClick: closeSidebar,
                "aria-label": "Close sidebar overlay"
            }, void 0, false, {
                fileName: "[project]/components/Proponent/Sidebar.tsx",
                lineNumber: 197,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Sidebar, "yZ3boicjdhUqb/I3o223thl2A1c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c7 = Sidebar;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "DashboardIcon");
__turbopack_context__.k.register(_c1, "CalendarIcon");
__turbopack_context__.k.register(_c2, "StudentsIcon");
__turbopack_context__.k.register(_c3, "TeachersIcon");
__turbopack_context__.k.register(_c4, "MaterialsIcon");
__turbopack_context__.k.register(_c5, "RemedialIcon");
__turbopack_context__.k.register(_c6, "ArchiveIcon");
__turbopack_context__.k.register(_c7, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Common/ProfileDropdown.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProfileDropdown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ProfileDropdown({ email, name, onProfile, onLogout }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " /* Mobile */ absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 z-50 p-4 flex flex-col items-center /* Tablet */ sm:w-72 sm:p-6 /* Desktop */ md:w-80 md:p-8 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-[#013300] font-semibold mb-2",
                children: email
            }, void 0, false, {
                fileName: "[project]/components/Common/ProfileDropdown.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "56",
                    height: "56",
                    fill: "none",
                    stroke: "#013300",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "8",
                            r: "6"
                        }, void 0, false, {
                            fileName: "[project]/components/Common/ProfileDropdown.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 20v-2c0-3.5 5-5 8-5s8 1.5 8 5v2"
                        }, void 0, false, {
                            fileName: "[project]/components/Common/ProfileDropdown.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Common/ProfileDropdown.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Common/ProfileDropdown.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-lg font-bold text-[#013300] mb-2 sm:text-xl md:text-2xl",
                children: [
                    "Hi! ",
                    name,
                    "!"
                ]
            }, void 0, true, {
                fileName: "[project]/components/Common/ProfileDropdown.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "w-full my-2 border-gray-300"
            }, void 0, false, {
                fileName: "[project]/components/Common/ProfileDropdown.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-full text-left px-2 py-2 rounded text-[#013300] hover:bg-green-50 font-medium sm:px-4 sm:py-3 md:px-6 md:py-4",
                onClick: ()=>router.push("/Proponent/profile"),
                children: "My Profile"
            }, void 0, false, {
                fileName: "[project]/components/Common/ProfileDropdown.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-full text-left px-2 py-2 rounded text-[#013300] hover:bg-green-50 font-medium sm:px-4 sm:py-3 md:px-6 md:py-4",
                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                        callbackUrl: '/auth/login?logout=true'
                    }),
                children: "Logout"
            }, void 0, false, {
                fileName: "[project]/components/Common/ProfileDropdown.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Common/ProfileDropdown.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(ProfileDropdown, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProfileDropdown;
var _c;
__turbopack_context__.k.register(_c, "ProfileDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Proponent/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$ProfileDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Common/ProfileDropdown.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Header({ title, onSearch }) {
    _s();
    const [searchQuery, setSearchQuery] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [showDropdown, setShowDropdown] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [showNotifications, setShowNotifications] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const profileBtnRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const dropdownRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const notificationBtnRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const notificationDropdownRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // Hide dropdowns when clicking outside
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Header.useEffect": ()=>{
            function handleClick(e) {
                if (!profileBtnRef.current?.contains(e.target) && !dropdownRef.current?.contains(e.target)) {
                    setShowDropdown(false);
                }
                if (!notificationBtnRef.current?.contains(e.target) && !notificationDropdownRef.current?.contains(e.target)) {
                    setShowNotifications(false);
                }
            }
            if (showDropdown || showNotifications) {
                document.addEventListener("mousedown", handleClick);
            }
            return ({
                "Header.useEffect": ()=>document.removeEventListener("mousedown", handleClick)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        showDropdown,
        showNotifications
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: `
            /* Mobile */
            fixed top-2 left-19 right-2 h-16 flex items-center justify-between px-4 bg-green-50 shadow-md z-30 rounded-xl transition-all
            /* Desktop */
            md:left-66 md:px-8
          `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-base font-semibold text-[#013300] tracking-wide md:text-lg",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/Proponent/Header.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: notificationBtnRef,
                                    className: "relative w-10 h-10 flex items-center justify-center hover:scale-[1.08] transition mr-4",
                                    "aria-label": "Notifications",
                                    onClick: ()=>setShowNotifications((prev)=>!prev),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "21",
                                        height: "21",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "#013300",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "lucide lucide-bell-icon lucide-bell",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M10.268 21a2 2 0 0 0 3.464 0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Proponent/Header.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Proponent/Header.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Proponent/Header.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Proponent/Header.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                showNotifications && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: notificationDropdownRef,
                                    className: `
                    fixed sm:absolute right-0 sm:right-0 mt-2 w-[calc(100vw-3rem)] sm:w-80 max-w-md 
                    bg-white rounded-lg shadow-lg z-50 border border-gray-200 max-h-[70vh] overflow-y-auto
                    transform transition-all duration-200 ease-out
                    ${showNotifications ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                    left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0
                  `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sticky top-0 bg-white px-4 py-3 border-b border-gray-100 flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-gray-800",
                                                    children: "Notifications"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Proponent/Header.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-sm text-green-600 hover:text-green-800",
                                                    onClick: ()=>setShowNotifications(false),
                                                    children: "Close"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Proponent/Header.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Proponent/Header.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center px-4 py-8 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "48",
                                                    height: "48",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "#9CA3AF",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10.268 21a2 2 0 0 0 3.464 0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Proponent/Header.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Proponent/Header.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Proponent/Header.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500",
                                                    children: "No notifications at this time"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Proponent/Header.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-400 mt-1",
                                                    children: "You'll see notifications here when you get them"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Proponent/Header.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Proponent/Header.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Proponent/Header.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Proponent/Header.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: profileBtnRef,
                            className: "w-10 h-10 flex items-center justify-center rounded-full border border-[#013300]  hover:border-[#013300] hover:border-2 hover:scale-[1.08] hover:shadow transition",
                            "aria-label": "Profile",
                            onClick: ()=>setShowDropdown((v)=>!v),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "32",
                                height: "32",
                                fill: "none",
                                stroke: "#013300",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "8",
                                        r: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Proponent/Header.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M4 20v-2c0-2.5 3.5-4 8-4s8 1.5 8 4v2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Proponent/Header.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Proponent/Header.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Proponent/Header.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this),
                        showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: dropdownRef,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$ProfileDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                email: "juandelacruz@gmail.com",
                                name: "Dela Cruz",
                                onProfile: ()=>{
                                    /* handle profile click */ setShowDropdown(false);
                                },
                                onLogout: ()=>{
                                    /* handle logout click */ setShowDropdown(false);
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Proponent/Header.tsx",
                                lineNumber: 137,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Proponent/Header.tsx",
                            lineNumber: 136,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Proponent/Header.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Proponent/Header.tsx",
            lineNumber: 40,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(Header, "YCKyE7bjhC+AodKSTgbd4J9kaQQ=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Common/Texts/SecondaryHeader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SecondaryHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SecondaryHeader({ title }) {
    // Sanitize the title to prevent XSS attacks
    const sanitizedTitle = typeof title === 'string' ? title : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: "text-xl font-bold text-[#013300] mb-2 md:mb-2",
        children: sanitizedTitle
    }, void 0, false, {
        fileName: "[project]/components/Common/Texts/SecondaryHeader.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = SecondaryHeader;
var _c;
__turbopack_context__.k.register(_c, "SecondaryHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Common/Buttons/DangerButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DangerButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function DangerButton({ children, className = "", small = false, ...props }) {
    const sizeClasses = small ? "px-3 py-1.5 text-sm" : "px-6 py-3";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `bg-red-600 text-white font-bold rounded-lg hover:bg-red-800 transition ${sizeClasses} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Common/Buttons/DangerButton.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = DangerButton;
var _c;
__turbopack_context__.k.register(_c, "DangerButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Common/Buttons/SecondaryButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SecondaryButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SecondaryButton({ children, className = "", small = false, ...props }) {
    const sizeClasses = small ? "px-3 py-1.5 text-sm" : "px-6 py-3";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `bg-transparent text-[#013300] font-semibold rounded-lg hover:bg-green-50 transition ${sizeClasses} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Common/Buttons/SecondaryButton.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = SecondaryButton;
var _c;
__turbopack_context__.k.register(_c, "SecondaryButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ActivityDetailModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$Texts$2f$SecondaryHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Common/Texts/SecondaryHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$Buttons$2f$DangerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Common/Buttons/DangerButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$Buttons$2f$SecondaryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Common/Buttons/SecondaryButton.tsx [app-client] (ecmascript)");
;
;
;
;
function ActivityDetailModal({ activity, onClose, onDelete }) {
    if (!activity) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 backdrop-blur-xs bg-black bg-opacity-30 flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-xl w-full max-w-md max-h-[95vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b border-gray-200 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$Texts$2f$SecondaryHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Activity Details"
                        }, void 0, false, {
                            fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-600",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Session Title*"
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-black",
                                    children: activity.title
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Date & Time"
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-black",
                                    children: [
                                        activity.date.toLocaleDateString(),
                                        " - ",
                                        activity.date.toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        }),
                                        " - ",
                                        activity.end.toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Location"
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-black",
                                    children: activity.roomNo
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-gray-200 flex justify-end space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$Buttons$2f$DangerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: "button",
                            onClick: ()=>onDelete && onDelete(activity.id),
                            className: "px-5 py-2.5",
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$Buttons$2f$SecondaryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: "button",
                            onClick: onClose,
                            className: "px-5 py-2.5",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = ActivityDetailModal;
var _c;
__turbopack_context__.k.register(_c, "ActivityDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ActivityDetailModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$Texts$2f$SecondaryHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Common/Texts/SecondaryHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$Buttons$2f$DangerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Common/Buttons/DangerButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$Buttons$2f$SecondaryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Common/Buttons/SecondaryButton.tsx [app-client] (ecmascript)");
;
;
;
;
function ActivityDetailModal({ activity, onClose, onDelete }) {
    if (!activity) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 backdrop-blur-xs flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-xl w-full max-w-md max-h-[95vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b border-gray-200 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$Texts$2f$SecondaryHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Activity Details"
                        }, void 0, false, {
                            fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                            lineNumber: 30,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-600",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Session Title*"
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium",
                                    children: activity.title
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Date & Time"
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium",
                                    children: [
                                        activity.date.toLocaleDateString(),
                                        " • ",
                                        activity.date.toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        }),
                                        " - ",
                                        activity.end.toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Location"
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium black",
                                    children: activity.roomNo
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        activity.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-500",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium",
                                    children: activity.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-gray-200 flex justify-end space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$Buttons$2f$DangerButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: "button",
                            onClick: onClose,
                            className: "px-5 py-2.5",
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                            lineNumber: 58,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Common$2f$Buttons$2f$SecondaryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: "button",
                            onClick: onClose,
                            className: "px-5 py-2.5",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                            lineNumber: 61,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = ActivityDetailModal;
var _c;
__turbopack_context__.k.register(_c, "ActivityDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Proponent/calendar/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Calendar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Proponent$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Proponent/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Proponent$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Proponent/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Proponent$2f$calendar$2f$Modals$2f$AddScheduleModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Proponent/calendar/Modals/AddScheduleModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Proponent$2f$calendar$2f$Modals$2f$ActivityDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Proponent/calendar/Modals/ActivityDetailModal.tsx [app-client] (ecmascript)"); // Import the new component
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Calendar() {
    _s();
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("month");
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedActivity, setSelectedActivity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // React Hook Form setup
    const formMethods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            title: "",
            date: "",
            roomNo: "",
            description: ""
        }
    });
    const { reset, setValue } = formMethods;
    // Activities data in state
    const [activities, setActivities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            title: "Math Class",
            day: "Wednesday",
            roomNo: "Room 204",
            description: "Algebra and Geometry lessons",
            date: new Date(2023, 10, 15, 9, 0),
            end: new Date(2023, 10, 15, 10, 30),
            type: "class"
        },
        {
            id: 2,
            title: "Faculty Meeting",
            day: "Thursday",
            roomNo: "Conference Room B",
            description: "Monthly faculty discussion",
            date: new Date(2023, 10, 16, 14, 0),
            end: new Date(2023, 10, 16, 15, 30),
            type: "meeting"
        },
        {
            id: 3,
            title: "Parent Conference",
            day: "Friday",
            roomNo: "Office 101",
            description: "Meeting with John Doe's parents",
            date: new Date(2023, 10, 17, 13, 0),
            end: new Date(2023, 10, 17, 14, 0),
            type: "appointment"
        },
        {
            id: 4,
            title: "Science Fair Prep",
            day: "Monday",
            roomNo: "Science Lab",
            description: "Preparing exhibits for the annual science fair",
            date: new Date(2023, 10, 20, 10, 0),
            end: new Date(2023, 10, 20, 12, 0),
            type: "event"
        }
    ]);
    // Navigation functions
    const prevPeriod = ()=>{
        const newDate = new Date(currentDate);
        if (view === "month") {
            newDate.setMonth(newDate.getMonth() - 1);
        } else {
            newDate.setDate(newDate.getDate() - 7);
        }
        setCurrentDate(newDate);
    };
    const nextPeriod = ()=>{
        const newDate = new Date(currentDate);
        if (view === "month") {
            newDate.setMonth(newDate.getMonth() + 1);
        } else {
            newDate.setDate(newDate.getDate() + 7);
        }
        setCurrentDate(newDate);
    };
    const goToToday = ()=>{
        setCurrentDate(new Date());
    };
    // Handle double click on date
    const handleDateDoubleClick = (date)=>{
        setSelectedDate(date);
        // Set the form value for the date field
        setValue("date", date.toISOString().split('T')[0]);
        setShowAddModal(true);
    };
    // Add new schedule
    const handleAddSchedule = (data)=>{
        const newActivity = {
            id: activities.length > 0 ? Math.max(...activities.map((a)=>a.id)) + 1 : 1,
            ...data,
            date: new Date(data.date + "T09:00:00"),
            end: new Date(new Date(data.date + "T09:00:00").getTime() + 60 * 60 * 1000),
            type: "class"
        };
        setActivities([
            ...activities,
            newActivity
        ]);
        setShowAddModal(false);
        reset();
    };
    // Delete schedule
    const handleDeleteSchedule = (id)=>{
        setActivities(activities.filter((activity)=>activity.id !== id));
        setSelectedActivity(null); // Close the modal after deletion
    };
    // Filter activities for the current view
    const getFilteredActivities = ()=>{
        const start = new Date(currentDate);
        const end = new Date(currentDate);
        if (view === "month") {
            start.setDate(1);
            end.setMonth(end.getMonth() + 1);
            end.setDate(0);
        } else if (view === "week") {
            const day = start.getDay();
            start.setDate(start.getDate() - day);
            end.setDate(start.getDate() + 6);
        }
        return activities.filter((activity)=>activity.date >= start && activity.date <= end);
    };
    // Activity type colors
    const getActivityColor = (type)=>{
        switch(type){
            case "class":
                return "bg-blue-100 text-blue-800 border-blue-200";
            case "meeting":
                return "bg-green-100 text-green-800 border-green-200";
            case "appointment":
                return "bg-purple-100 text-purple-800 border-purple-200";
            case "event":
                return "bg-amber-100 text-amber-800 border-amber-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };
    // Render the calendar based on view
    const renderCalendar = ()=>{
        if (view === "month") {
            return renderMonthView();
        } else {
            return renderWeekView();
        }
    };
    const renderMonthView = ()=>{
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const weeks = [];
        let day = 1;
        for(let i = 0; i < 6; i++){
            if (day > daysInMonth) break;
            const days = [];
            for(let j = 0; j < 7; j++){
                if (i === 0 && j < firstDay || day > daysInMonth) {
                    days.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-20 p-1 border border-gray-100"
                    }, `empty-${i}-${j}`, false, {
                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                        lineNumber: 178,
                        columnNumber: 21
                    }, this));
                } else {
                    const currentDay = new Date(year, month, day);
                    const dayActivities = activities.filter((a)=>a.date.getDate() === day && a.date.getMonth() === month && a.date.getFullYear() === year);
                    days.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-20 p-1 border border-gray-100 overflow-hidden relative hover:bg-gray-50 transition-colors cursor-pointer",
                        onDoubleClick: ()=>handleDateDoubleClick(currentDay),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right text-sm font-medium text-gray-800 mb-1",
                                children: day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block w-6 h-6 bg-blue-600 text-white rounded-full text-center leading-6",
                                    children: day
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: day
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Proponent/calendar/page.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-y-auto max-h-12 space-y-1",
                                children: [
                                    dayActivities.slice(0, 2).map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-xs p-1 rounded truncate cursor-pointer border ${getActivityColor(activity.type)}`,
                                            onClick: ()=>setSelectedActivity(activity),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate",
                                                    children: activity.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 21
                                            }, this)
                                        }, activity.id, false, {
                                            fileName: "[project]/app/Proponent/calendar/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 19
                                        }, this)),
                                    dayActivities.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500 text-center bg-gray-100 rounded p-1",
                                        children: [
                                            "+",
                                            dayActivities.length - 2,
                                            " more"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Proponent/calendar/page.tsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `day-${day}`, true, {
                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                        lineNumber: 186,
                        columnNumber: 13
                    }, this));
                    day++;
                }
            }
            weeks.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7",
                children: days
            }, `week-${i}`, false, {
                fileName: "[project]/app/Proponent/calendar/page.tsx",
                lineNumber: 224,
                columnNumber: 9
            }, this));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-7 bg-gray-50 text-sm font-medium text-gray-700",
                    children: [
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S"
                    ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 text-center",
                            children: day
                        }, day, false, {
                            fileName: "[project]/app/Proponent/calendar/page.tsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y",
                    children: weeks
                }, void 0, false, {
                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Proponent/calendar/page.tsx",
            lineNumber: 231,
            columnNumber: 7
        }, this);
    };
    const renderWeekView = ()=>{
        const startDate = new Date(currentDate);
        startDate.setDate(startDate.getDate() - startDate.getDay());
        const days = [];
        const dayNames = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];
        for(let i = 0; i < 7; i++){
            const dayDate = new Date(startDate);
            dayDate.setDate(startDate.getDate() + i);
            const dayActivities = activities.filter((a)=>a.date.getDate() === dayDate.getDate() && a.date.getMonth() === dayDate.getMonth() && a.date.getFullYear() === dayDate.getFullYear()).sort((a, b)=>a.date.getTime() - b.date.getTime());
            days.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-gray-200",
                onDoubleClick: ()=>handleDateDoubleClick(dayDate),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium text-gray-800 text-sm",
                                    children: dayNames[i]
                                }, void 0, false, {
                                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-600",
                                    children: [
                                        dayDate.toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric"
                                        }),
                                        dayDate.getDate() === new Date().getDate() && dayDate.getMonth() === new Date().getMonth() && dayDate.getFullYear() === new Date().getFullYear() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded-full",
                                            children: "Today"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Proponent/calendar/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Proponent/calendar/page.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 space-y-2",
                        children: dayActivities.length > 0 ? dayActivities.map((activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-lg border-l-4 shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow",
                                style: {
                                    borderLeftColor: activity.type === "class" ? "#2563EB" : activity.type === "meeting" ? "#059669" : "#7C3AED"
                                },
                                onClick: ()=>setSelectedActivity(activity),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-gray-900 text-sm",
                                                    children: activity.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-600 mt-1",
                                                    children: [
                                                        activity.date.toLocaleTimeString([], {
                                                            hour: "2-digit",
                                                            minute: "2-digit"
                                                        }),
                                                        " -",
                                                        " ",
                                                        activity.end.toLocaleTimeString([], {
                                                            hour: "2-digit",
                                                            minute: "2-digit"
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: activity.roomNo
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Proponent/calendar/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleDeleteSchedule(activity.id);
                                            },
                                            className: "text-gray-400 hover:text-red-500 text-lg",
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Proponent/calendar/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 19
                                }, this)
                            }, activity.id, false, {
                                fileName: "[project]/app/Proponent/calendar/page.tsx",
                                lineNumber: 286,
                                columnNumber: 17
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-gray-400 py-4 text-sm",
                            children: "No activities scheduled"
                        }, void 0, false, {
                            fileName: "[project]/app/Proponent/calendar/page.tsx",
                            lineNumber: 316,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this)
                ]
            }, `weekday-${i}`, true, {
                fileName: "[project]/app/Proponent/calendar/page.tsx",
                lineNumber: 265,
                columnNumber: 9
            }, this));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "divide-y",
            children: days
        }, void 0, false, {
            fileName: "[project]/app/Proponent/calendar/page.tsx",
            lineNumber: 323,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Proponent$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/Proponent/calendar/page.tsx",
                lineNumber: 329,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 pt-16 flex flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Proponent$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Calendar"
                    }, void 0, false, {
                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 h-full sm:p-5 md:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow-sm border border-gray-200 h-full min-h-[400px] overflow-y-auto p-4 sm:p-5 md:p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col space-y-3 mb-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2 sm:space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: prevPeriod,
                                                                className: "p-2 rounded-md hover:bg-gray-100 text-gray-700",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "h-4 w-4",
                                                                    viewBox: "0 0 20 20",
                                                                    fill: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fillRule: "evenodd",
                                                                        d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                                                        clipRule: "evenodd"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                                        lineNumber: 344,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: nextPeriod,
                                                                className: "p-2 rounded-md hover:bg-gray-100 text-gray-700",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "h-4 w-4",
                                                                    viewBox: "0 0 20 20",
                                                                    fill: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        fillRule: "evenodd",
                                                                        d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                                                        clipRule: "evenodd"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                                        lineNumber: 349,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                                    lineNumber: 348,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-semibold text-gray-800 sm:text-xl",
                                                        children: view === "month" ? currentDate.toLocaleDateString("en-US", {
                                                            month: "long",
                                                            year: "numeric"
                                                        }) : `Week of ${currentDate.toLocaleDateString("en-US", {
                                                            month: "short",
                                                            day: "numeric"
                                                        })}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: goToToday,
                                                        className: "px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700",
                                                        children: "Today"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex bg-gray-100 rounded-md p-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setView("month"),
                                                            className: `px-3 py-1.5 text-xs rounded-md sm:text-sm ${view === "month" ? "bg-white text-gray-800 shadow-sm" : "text-gray-600 hover:text-gray-800"}`,
                                                            children: "Month"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setView("week"),
                                                            className: `px-3 py-1.5 text-xs rounded-md sm:text-sm ${view === "week" ? "bg-white text-gray-800 shadow-sm" : "text-gray-600 hover:text-gray-800"}`,
                                                            children: "Week"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Proponent/calendar/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Proponent$2f$calendar$2f$Modals$2f$AddScheduleModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        show: showAddModal,
                                        onClose: ()=>{
                                            setShowAddModal(false);
                                            reset();
                                        },
                                        form: formMethods,
                                        onSubmit: handleAddSchedule,
                                        selectedDate: selectedDate
                                    }, void 0, false, {
                                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Proponent$2f$calendar$2f$Modals$2f$ActivityDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        activity: selectedActivity,
                                        onClose: ()=>setSelectedActivity(null),
                                        onDelete: handleDeleteSchedule
                                    }, void 0, false, {
                                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded-lg overflow-hidden bg-white",
                                        children: renderCalendar()
                                    }, void 0, false, {
                                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Proponent/calendar/page.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Proponent/calendar/page.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Proponent/calendar/page.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Proponent/calendar/page.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Proponent/calendar/page.tsx",
        lineNumber: 327,
        columnNumber: 5
    }, this);
}
_s(Calendar, "c/0dfZvAhQrl9ONuyahjSORBqm8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = Calendar;
var _c;
__turbopack_context__.k.register(_c, "Calendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_f6a217d9._.js.map