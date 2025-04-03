import { useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate();
    return (
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
                    <button className='signin' >Register</button>
                    <button className='google-signin'><img src="public/img/google.png" alt="googleLogo" />Register with Google</button>
                    <p >Have an account? <a href="#" onClick={() => (navigate('/login'))}>Sign in</a></p>
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