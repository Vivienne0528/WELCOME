// src/components/Register.tsx
import { FormEvent } from "react";
import { auth } from "../utils/auth";



const Register = () => {
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
        navigate
    } = auth();
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
                registeredUsers.push(user)
                localStorage.setItem("users", JSON.stringify(registeredUsers))
                break
        }
    }

    return (
        <main>
            <section className='login-section'>
                <section className='welcome'>
                    <img src="public/img/logo.png" alt="logo" />
                    <h2>Welcome back</h2>
                    <h3>Welcome back! Please enter your details.</h3>
                </section>
                <form className='login-form' onSubmit={handleRegister}>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type="email" required value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <label htmlFor='password' className='password'>Password</label>
                    <input id='password' type="password" required value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <button className='signin' >Register</button>
                    <button className='google-signin'><img src="public/img/google.png" alt="googleLogo" />Register with Google</button>
                    <p >Have an account? <a href="#" onClick={() => (navigate('/login'))}>Sign in</a></p>
                    {message && <p className={`message ${messageType}`}>{message}</p>}
                </form>
            </section>

            <section className='intro-section'>
                <section className='square-group'>
                    <p> "Untitled truly has solved all our design and content problems, freeing up our time to work on more important things. We can't imagine working without it."</p>
                    <div className='square-one'></div>
                    <div className='square-two'></div>
                    <div className='square-three'></div>
                    <div className='square-four'></div>
                </section>

                <div className='author'> <span>Mischca Sullivan</span> ★★★★★</div>
                <div className='company'><span><img src="public/img/smallLogo.png" alt="smallLogo" /> Bolt Agency</span> ← →</div>
            </section>
        </main>
    )
}

export default Register