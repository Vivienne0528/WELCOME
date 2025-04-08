import "@/styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className='flex h-screen w-full md:flex-row flex-col'>
      <section className='w-full min-w-[25rem] mt-[30px] md:mx-[100px] p-[8px]'>
        <section className='mb-[30px]'>
          <img src="/img/logo.png" alt="logo" className="w-[60px] mb-[15px]" />
          <h2 className="text-2xl mb-[10px]">Welcome back</h2>
          <h3 className="text-xl text-gray-600">Welcome back! Please enter your details.</h3>
        </section>
        <Component {...pageProps} />
      </section>
      {/* <section className="bg-[url('/img/background.png')] bg-cover bg-center text-white min-w-[28rem] px-[60px] pt-[300px]"> */}
      <section className="bg-[url('/img/background.png')] bg-cover bg-center text-white min-w-[28rem] px-[60px] pt-[300px]">
        <section className='relative'>
          <p className="text-[1.8rem] border-green-300 border-solid border-[5px]"> "Untitled truly has solved all our design and content problems, freeing up our time to work on more important things. We can't imagine working without it."</p>
          <div className='square top-[-0.6rem] left-[-0.6rem]'></div>
          <div className='square top-[-0.6rem] right-[-0.6rem]'></div>
          <div className='square bottom-[-0.6rem] left-[-0.6rem]'></div>
          <div className='square bottom-[-0.6rem] right-[-0.6rem]' ></div>
        </section>

        <div className='text-[1.2rem] font-semibold flex justify-between'> <span>Mischca Sullivan</span> ★★★★★</div>
        <div className='text-[1.2rem] flex justify-between'><span className="flex items-center"><img className=' h-[20px] mr-[5px]' src="/img/smallLogo.png" alt="smallLogo" /> Bolt Agency</span> ← →</div>
      </section>
    </main>

  )
}
