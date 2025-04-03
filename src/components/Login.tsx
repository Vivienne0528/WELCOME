import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();

    return (
        <>
            <main>
                <section className='login-section'>
                    <section className='welcome'>
                        <img src="public/img/logo.png" alt="logo" />
                        <h2>Welcome back</h2>
                        <h3>Welcome back! Please enter your details.</h3>
                    </section>
                    <form className='login-form'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' type="email" required />
                        <label htmlFor='password' className='password'>Password</label>
                        <input id='password' type="password" required />
                        <button className='signin' >Sign in</button>
                        <button className='google-signin'><img src="public/img/google.png" alt="googleLogo" />Sign in with Google</button>
                        <p >Need an account? <a href="#" onClick={() => (navigate('/register'))}>Register</a></p>
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
        </>
    )
}

export default Login