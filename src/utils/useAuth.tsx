// src/utils/useAuth.tsx
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";

export const useAuth = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const router = useRouter();
    const existUser = { email: "vivienne0528.gu@gmail.com", password: "Qwe123!" };
    const [isSubmitted, setIsSubmitted] = useState(false);

    const schema = yup
        .object()
        .shape({
            email: yup.string().email().required(),
            password: yup
                .string()
                .required("Password is required")
                .matches(
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/,
                    "Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character"
                ),
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            nickName: yup.string(),
            dateOfBirth: yup.date().required(),
            gender: yup.string().required(),
            mobile: yup.string().required(),
            address: yup.string().required(),
        })
        .required();
    const registerOnSubmit = (data: { email: string }) => {
        if (existUser.email == data.email) {
            alert("Email had been registered, Please sign in.");
        } else {
            setIsSubmitted(true);
            alert(JSON.stringify(data));
        }
    };
    const loginOnSubmit = (data: { email: string; password: string }) => {
        setIsSubmitted(false);
        switch (true) {
            case !(data.email === existUser.email):
                alert("Email has  not been registered, Please register. ");
                break;
            case !(data.password === existUser.password):
                alert("Your password is not correct, please try again.");
                break;
            default:
                setIsSubmitted(true);
                break;
        }
        alert(JSON.stringify(data));
    };

    return {
        user,
        setUser,
        isSubmitted,
        setIsSubmitted,
        existUser,
        router,
        schema,
        registerOnSubmit,
        loginOnSubmit,
    };
};
