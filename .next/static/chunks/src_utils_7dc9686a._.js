(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_utils_7dc9686a._.js", {

"[project]/src/utils/validators.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/utils/validators.tsx
__turbopack_context__.s({
    "validateEmail": (()=>validateEmail),
    "validatePassword": (()=>validatePassword)
});
const validateEmail = (email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const validatePassword = (password)=>{
    return password.length >= 6;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/useAuth.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/utils/useAuth.tsx
__turbopack_context__.s({
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validators$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/validators.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const useAuth = ()=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: '',
        password: ''
    });
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [messageType, setMessageType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("error");
    const registeredUsers = JSON.parse(localStorage.getItem("users") || '[]');
    const isEmailValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validators$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateEmail"])(user.email);
    const isPasswordValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validators$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validatePassword"])(user.password);
    const isEmailRegistered = registeredUsers.some((existUser)=>existUser.email === user.email);
    const isPasswordCorrect = registeredUsers.some((existUser)=>existUser.password === user.password);
    return {
        user,
        setUser,
        message,
        setMessage,
        messageType,
        setMessageType,
        isEmailValid,
        isPasswordValid,
        isEmailRegistered,
        isPasswordCorrect,
        registeredUsers
    };
};
_s(useAuth, "pR2LNMoExBJMm8EiBsL6SBT/ulE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_utils_7dc9686a._.js.map