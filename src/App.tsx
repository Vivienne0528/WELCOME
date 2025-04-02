import { useState } from 'react'
import './App.css'
import { MessageType, User } from './type';
function App() {
  const [user, setUser] = useState<User>({
    email: "",
    password: ""
  })
  const [message, setMessage] = useState<string>("")
  const [messageType, setMessageType] = useState<MessageType>("")
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const registeredUsers: User[] = JSON.parse(localStorage.getItem("users") || '[]')

  const validEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
  }

  const validPassword = (password: string) => {
    return password.length >= 6
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validEmail(user.email) && !validPassword(user.password)) {
      setMessage("Please enter a valid email address (e.g., user@example.com) and password with at least 6 characters.")
      setMessageType("error")
    }
    else if (!validEmail(user.email)) {
      setMessage("Please enter a valid email address (e.g., user@example.com).")
      setMessageType("error")
    }
    else if (registeredUsers.some((existUser: { email: string; }) => existUser.email === user.email)) {
      setMessage("Email already exists, please sign in.")
      setMessageType("error")
    }
    else if (!validPassword(user.password)) {
      setMessage("Please enter a password with at least 6 characters.")
      setMessageType("error")
    } else {
      setMessage("Register successfully, please sign in.")
      setMessageType("success")
      registeredUsers.push(user)
      localStorage.setItem('users', JSON.stringify(registeredUsers));
    }
    setUser({
      email: "",
      password: ""
    })
    setIsLogin(true)
    console.log(isLogin)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (registeredUsers.some((existUser: User) => existUser.email === user.email && existUser.password === user.password)) {
      setMessage("Login successfully")
      setMessageType("success")

    } else {
      if (!registeredUsers.some((existUser: { email: string; }) => existUser.email === user.email)) {
        setMessage("Email does not exist, please register.")
        setMessageType("error")
      } else {
        setMessage("Wrong password, please try again.")
        setMessageType("error")
      }
    }
    setUser({
      email: "",
      password: ""
    })
    setIsLogin(true)
    console.log(isLogin)
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
          {isLogin ? (<form className='login-form' onSubmit={handleLogin}>
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" value={user.email} onChange={e => (setUser({ ...user, email: e.target.value }))} required />
            <label htmlFor='password' className='password'>Password</label>
            <input id='password' type="password" value={user.password} onChange={e => { setUser({ ...user, password: e.target.value }) }} required />
            <button className='signin' >Sign in</button>
            <button className='google-signin'><img src="public/img/google.png" alt="googleLogo" />Sign in with Google</button>
            <p onClick={() => { setIsLogin(false) }}>Need an account?<a href="#">Create an account</a></p>
            {/* {message && <p className='message' style={{ color: messageType === "success" ? "green" : "red" }} >{message}</p>} */}
            {message && <p className={`message ${messageType}`}>{message}</p>}
          </form>) : (<form className='login-form' onSubmit={handleRegister}>
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" value={user.email} onChange={e => (setUser({ ...user, email: e.target.value }))} required />
            <label htmlFor='password' className='password'>Password</label>
            <input id='password' type="password" value={user.password} onChange={e => { setUser({ ...user, password: e.target.value }) }} required />
            <button className='signin' >Sign in</button>
            <button className='google-signin'><img src="public/img/google.png" alt="googleLogo" />Sign in with Google</button>
            <p onClick={() => { setIsLogin(false) }}>Need an account?<a href="#">Create an account</a> </p>
            {/* {message && <p className='message' style={{ color: messageType === "success" ? "green" : "red" }} >{message}</p>} */}
            {message && <p className={`message ${messageType}`}>{message}</p>}
          </form>)}

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

export default App