(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/High-Grade/remedial/Flashcards/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FlashcardsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function highlightSentence(sentence, highlights) {
    // Split sentence into words and highlight matches
    const words = sentence.split(/(\s+)/);
    return words.map((word, idx)=>{
        const clean = word.replace(/[^a-zA-Z]/g, "");
        if (highlights.includes(clean)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-blue-200 text-blue-700 rounded px-2 mx-0.5 font-semibold",
                children: word
            }, idx, false, {
                fileName: "[project]/app/High-Grade/remedial/Flashcards/page.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: word
        }, idx, false, {
            fileName: "[project]/app/High-Grade/remedial/Flashcards/page.tsx",
            lineNumber: 17,
            columnNumber: 12
        }, this);
    });
}
const flashcardsData = [
    {
        sentence: "The cat sat on the mat.",
        highlights: [
            "cat",
            "mat"
        ]
    },
    {
        sentence: "The dog ran fast.",
        highlights: [
            "dog"
        ]
    },
    {
        sentence: "Birds fly in the sky.",
        highlights: [
            "Birds",
            "sky"
        ]
    }
];
function FlashcardsPage() {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { sentence, highlights } = flashcardsData[current];
    const handlePrev = ()=>setCurrent((prev)=>Math.max(prev - 1, 0));
    const handleNext = ()=>setCurrent((prev)=>Math.min(prev + 1, flashcardsData.length - 1));
    const handleSpeak = ()=>{
        if ("object" !== "undefined" && "speechSynthesis" in window) {
            const utter = new window.SpeechSynthesisUtterance(sentence);
            window.speechSynthesis.speak(utter);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-screen bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#fcfcfc] rounded-2xl shadow-lg p-10 w-full max-w-2xl flex flex-col items-center relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute top-6 right-6 text-blue-500 hover:text-blue-700",
                    onClick: handleSpeak,
                    "aria-label": "Play audio",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaVolumeUp"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/app/High-Grade/remedial/Flashcards/page.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/High-Grade/remedial/Flashcards/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-3xl md:text-4xl font-light text-center mb-8 mt-4",
                    children: highlightSentence(sentence, highlights)
                }, void 0, false, {
                    fileName: "[project]/app/High-Grade/remedial/Flashcards/page.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between w-full mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-blue-600 text-white px-8 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition",
                            onClick: handlePrev,
                            disabled: current === 0,
                            children: "← Previous"
                        }, void 0, false, {
                            fileName: "[project]/app/High-Grade/remedial/Flashcards/page.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: flashcardsData.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `h-3 w-3 rounded-full ${i === current ? "bg-blue-600" : "bg-gray-300"}`,
                                    style: {
                                        display: "inline-block"
                                    }
                                }, i, false, {
                                    fileName: "[project]/app/High-Grade/remedial/Flashcards/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/High-Grade/remedial/Flashcards/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-blue-600 text-white px-8 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition",
                            onClick: handleNext,
                            disabled: current === flashcardsData.length - 1,
                            children: "Next →"
                        }, void 0, false, {
                            fileName: "[project]/app/High-Grade/remedial/Flashcards/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/High-Grade/remedial/Flashcards/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/High-Grade/remedial/Flashcards/page.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/High-Grade/remedial/Flashcards/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(FlashcardsPage, "8+O75ArtRNvpQgzeZSk5wKohTHI=");
_c = FlashcardsPage;
var _c;
__turbopack_context__.k.register(_c, "FlashcardsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_High-Grade_remedial_Flashcards_page_tsx_c7017b44._.js.map