import React from 'react'

const mode = () => {
  return (
    <div className='h-[650px] md:h-[500px] bg-gradient-to-r from-violet-950 to-violet-900 pt-20' >
        <section className='container flex flex-col items-center justify-between'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8'>
               <div className='flex flex-col items-center text-center gap-4 md:items-start md:text-left'>
                <h1 className='font-bold text-white text-4xl'>We Build an dev app which enhance the project details</h1>
                  <p className='text-white font-semibold pt-3 text-slate-200'>We Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt recusandae voluptatibus, hic facilis quas ducimus deleniti blanditiis dolorum est quia repudiandae adipisci vel illum quasi culpa temporibus ullam. Doloribus.</p>
                   <div className='space-x-4'>
                  <button className='rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover: bg primary/80px'>Get Started</button>
                  <button className='border-1 rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300'>Login</button>
                   </div>
               </div>
               <div className='mx-auto max-w-xs p-4'>
                {/* <img src="src\assets\the-web-pages-are-on-the-laptop-screen-and-the-mobile-phone-is-lying-modern-technological-background-isometry-conceptual-banner-of-web-technologies-vector.jpg" alt="Not Found" className='mx-full'/> */}
               </div>
            </div>
        </section>
    </div>
  )
}

export default mode