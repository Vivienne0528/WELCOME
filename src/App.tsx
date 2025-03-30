import { useState } from 'react'
import './App.css'
function App() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const validEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
  }
  const validPassword = (password: string) => {
    return password.length >= 6
  }
  const registerUsers = JSON.parse(localStorage.getItem("users") || '[]')
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validEmail(user.email) && !validPassword(user.password)) {
      alert("Please enter a valid email address and password.")
    }
    else if (!validEmail(user.email)) {
      alert("Please enter a valid email address.")
    }
    else if (registerUsers.some((existUser: { email: string; }) => existUser.email === user.email)) {
      alert("Email already exists, please sign in.")
    }
    else if (!validPassword(user.password)) {
      alert("Please enter a password with at least 6 characters.")
    } else {
      alert("Register successfully")
      registerUsers.push(user)
      localStorage.setItem('users', JSON.stringify(registerUsers));
    }
    setUser({
      email: "",
      password: ""
    })
  }


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (registerUsers.some((existUser: { email: string; password: string; }) => existUser.email === user.email && existUser.password === user.password)) {
      alert("Login successfully")
    } else {
      if (!registerUsers.some((existUser: { email: string; }) => existUser.email === user.email)) {
        alert("Email does not exist, please sign up.")
      } else {
        alert("Wrong password, please try again.")
      }
    }
  }

  return (
    <>
      <main>
        <section className='login-section'>
          <section className='welcome'>
            <img src="public/img/logo.png" alt="logo" />
            <h2>Welcome back</h2>
            <h3>Welcome back! Please enter your details.</h3>
          </section>

          <form className='login-form' >
            <label>Email</label>
            <input type="email" value={user.email} onChange={e => (setUser({ ...user, email: e.target.value }))} required />
            <label className='password'>Password</label>
            <input type="password" value={user.password} onChange={e => { setUser({ ...user, password: e.target.value }) }} required />
            <button className='signin' onClick={handleLogin}>Sign in</button>
            <button className='google-signin' onClick={handleLogin}><img src="public/img/google.png" alt="googleLogo" />Sign in with Google</button>
            <p onClick={handleRegister}>Need an account? <a href="#">Create an account</a></p>
          </form>
        </section>

        <section className='intro-section'>
          <p>"Untitled truly has solved all our design and content problems, freeing up our time to work on more important things. We can't imagine working without it."</p>
          <div className='author'> <span>Mischca Sullivan</span> ★★★★★</div>
          <div className='company'><span><img src="public/img/smallLogo.png" alt="smallLogo" /> Bolt Agency</span> ← →</div>
        </section>
      </main>
    </>
  )
}

export default App
