// src/utils/auth.tsx
import { useState } from "react";
import { useNavigate } from "react-router";
import { validateEmail, validatePassword } from "./validators";

export const auth = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState<"success" | "error">("error")
    const navigate = useNavigate();

    const registeredUsers = JSON.parse(localStorage.getItem("users") || '[]');

    const isEmailValid = validateEmail(user.email);
    const isPasswordValid = validatePassword(user.password);
    const isEmailRegistered = registeredUsers.some((existUser: { email: string; }) => existUser.email === user.email);
    const isPasswordCorrect = registeredUsers.some((existUser: { password: string; }) => existUser.password === user.password);

    return { user, setUser, message, setMessage, messageType, setMessageType, isEmailValid, isPasswordValid, isEmailRegistered, isPasswordCorrect, navigate, registeredUsers };
};


