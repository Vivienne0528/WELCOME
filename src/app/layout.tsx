//src/app/layout.tsx
import './App.css'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >    <main>
          <section className='login-section'>
            <section className='welcome'>
              <img src="/img/logo.png" alt="logo" />
              <h2>Welcome back</h2>
              <h3>Welcome back! Please enter your details.</h3>
            </section>
            {children}
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
      </body>
    </html>
  );
}
