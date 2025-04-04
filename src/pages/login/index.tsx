// src/components/Login.tsx
"use client";
import { useAuth } from "@/utils/useAuth";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";


const Login = () => {
    const router = useRouter();

    const {
        user,
        setUser,
        message,
        setMessage,
        messageType,
        setMessageType,
        isEmailValid,
        isPasswordCorrect,
        isEmailRegistered,

    } = useAuth();
    const handleLogin = (e: FormEvent) => {
        setMessageType("error")
        e.preventDefault()
        //登陆,1.邮箱不存在 2.邮箱存在,密码错误 3.邮箱密码都正确
        switch (true) {
            case !isEmailValid:
                setMessage("Please enter a valid email address (e.g., user@example.com).")
                break
            case !isEmailRegistered:
                setMessage("Email has  not been registered, Please register. ")
                break
            case isEmailRegistered && !isPasswordCorrect:
                setMessage("Your password is not correct, please try again.")
                break
            default:
                setMessage("Login successfully!")
                setMessageType("success")
                break
        }
    }
    return (
        <form className='login-form' onSubmit={handleLogin}>
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" required value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <label htmlFor='password' className='password'>Password</label>
            <input id='password' type="password" required value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <button className='signin' >Sign in</button>
            <button className='google-signin'><img src="/img/google.png" alt="googleLogo" />Sign in with Google</button>
            <p >Have an account? <a href="#" onClick={() => { router.push('/register') }}>Register</a></p>
            {message && <p className={`message ${messageType}`}>{message}</p>}
        </form>
    )
}

export default Login