import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <section className='login-section'>
        <section className='welcome'>
          <img src="/img/logo.png" alt="logo" />
          <h2>Welcome back</h2>
          <h3>Welcome back! Please enter your details.</h3>
        </section>
        <Component {...pageProps} />
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
        <div className='company'><span><img src="/img/smallLogo.png" alt="smallLogo" /> Bolt Agency</span> ← →</div>
      </section>
    </main>

  )
}
