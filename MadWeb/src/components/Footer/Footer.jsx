import React from 'react'
import { FaFacebook, FaFreeCodeCamp, FaInstagram, FaLinkedinIn, FaLocationArrow, FaMobileAlt, FaSnapchat, FaTwitter, FaWhatsapp } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <footer className='bg-gradient-to-r from-violet-950 to to-violet-900 text-white'>
        <div className='max-w-[1200px] mx-auto p-4'>
            <div className='grid py-5 md:grid-cols-3'>
            <div className='px-3 py-8'>
                <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl'>
                    <a href="#home" className=''>Mad
                        <span className='inline-block font-bold text-primary'>Web</span>
                    </a>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, similique!{" "}</p>
                <br/>
                <div className='flex items-center gap-3'>
                    <FaLocationArrow />
                    <p>TamilNadu,India</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <FaMobileAlt />
                    <p>+91 9345645016</p>
                </div>
                </div>
                {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2'>
                    <div>
                    <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
                          Important Links
                    </h1>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> */}
                <div className='px-4 py-8'>
                    <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>
                        Social Links
                    </h1>
                    <div>
                        <h1 className='pt-5 pb-5'>Subscribe to out newsletter</h1>
                        <input type="text" placeholder="Enter your email" className='rounded-full px-4 py-3 text-black focus:border-sky-500 focus:outline-none focus:ring-2  focus:ring-sky-500'/>
                        <div className='flex gap-7 pt-5 pb-5 mt-6 items-center'>
                            <a href="#" className='duration-200 hover:scale-105'>
                                <FaInstagram className='text-3xl'/>
                            </a>
                            <a href="#" className='duration-200 hover:scale-105'>
                                <FaFacebook className='text-3xl'/>
                            </a>
                            <a href="#" className='duration-200 hover:scale-105'>
                                <FaWhatsapp className='text-3xl'/>
                            </a>
                            <a href="#" className='duration-200 hover:scale-105'>
                                <FaTwitter className='text-3xl'/>
                            </a>
                            <a href="#" className='duration-200 hover:scale-105'>
                                <FaLinkedinIn className='text-3xl'/>
                            </a>
                        </div>
                    </div>
                </div>
                        <div className='pt-5 pb-5'>
                            <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>Join a Free Demo Session</h1>
                            <pre className='text-xl'>At Every Saturday
                                <br/>after 6:00 pm 
                                <br/>Live Session handled by Our Developers 
                            </pre>
                            <FaFreeCodeCamp className='text-5xl pt-4 cursor-pointer'/>
                        </div>
            </div>
            <div className='bottom-footer'>
                <p className='border-t-2 border-gray-300/50 py-6 text-center'>Copyright © 2024. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer