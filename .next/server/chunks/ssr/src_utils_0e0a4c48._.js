module.exports = {

"[project]/src/utils/validators.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/utils/useAuth.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/useAuth.tsx
__turbopack_context__.s({
    "auth": (()=>auth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validators$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/validators.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const auth = ()=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        email: '',
        password: ''
    });
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [messageType, setMessageType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("error");
    const registeredUsers = JSON.parse(localStorage.getItem("users") || '[]');
    const isEmailValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validators$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateEmail"])(user.email);
    const isPasswordValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validators$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePassword"])(user.password);
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
}}),

};

//# sourceMappingURL=src_utils_0e0a4c48._.js.map