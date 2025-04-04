// src/components/Register.tsx
"use client";
import { useAuth } from "@/utils/useAuth";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const Register = () => {
    const router = useRouter();

    const {
        user,
        setUser,
        message,
        setMessage,
        messageType,
        setMessageType,
        isEmailValid,
        isPasswordValid,
        isEmailRegistered,
        registeredUsers,
        setRegisteredUsers
    } = useAuth();
    const handleRegister = (e: FormEvent) => {
        e.preventDefault()
        setMessageType("error")
        switch (true) {
            case !isEmailValid:
                setMessage("Please enter a valid email address (e.g., user@example.com).")
                break
            case isEmailRegistered:
                setMessage("Email had been registered, Please sign")
                break
            case !isEmailRegistered && !isPasswordValid:
                setMessage("Please enter a password with at least 6 characters.")
                break
            default:
                setMessage("Register successfully, Please sign in.")
                setMessageType("success")
                const updatedUsers = [...registeredUsers, user]; // 创建新数组
                setRegisteredUsers(updatedUsers);
                localStorage.setItem("users", JSON.stringify(updatedUsers));
                // registeredUsers.push(user)
                // localStorage.setItem("users", JSON.stringify(registeredUsers))
                break
        }
    }

    return (
        <form className='login-form' onSubmit={handleRegister}>
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" required value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <label htmlFor='password' className='password'>Password</label>
            <input id='password' type="password" required value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <button className='signin' >Register</button>
            <button className='google-signin'><img src="/img/google.png" alt="googleLogo" />Register with Google</button>
            <p >Have an account? <a href="#" onClick={() => { router.push('/login'); }}>Sign in</a></p>
            {message && <p className={`message ${messageType}`}>{message}</p>}
        </form>
    )
}

export default Register