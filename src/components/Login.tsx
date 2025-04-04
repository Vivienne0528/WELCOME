// src/components/Login.tsx
import { FormEvent } from "react";
import { auth } from "../utils/auth";



const Login = () => {
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
        navigate
    } = auth();
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
                setMessage("Login successfully, Please sign in.")
                setMessageType("success")
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
                <form className='login-form' onSubmit={handleLogin}>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type="email" required value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <label htmlFor='password' className='password'>Password</label>
                    <input id='password' type="password" required value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <button className='signin' >Sign in</button>
                    <button className='google-signin'><img src="public/img/google.png" alt="googleLogo" />Sign in with Google</button>
                    <p >Have an account? <a href="#" onClick={() => (navigate('/register'))}>Register</a></p>
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

export default Login