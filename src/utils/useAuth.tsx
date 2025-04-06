// src/utils/useAuth.tsx
"use client"
import { useState } from "react";

export const useAuth = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const existUser = { "email": "vivienne0528.gu@gmail.com", "password": "111111" }
    const [isSubmitted, setIsSubmitted] = useState(false);

    return { user, setUser, isSubmitted, setIsSubmitted, existUser };
};


