import React, { useEffect, useState } from 'react'
import {BiPhoneCall, BiSolidSun,BiSolidMoon} from  "react-icons/bi"
import {FaCaretDown} from "react-icons/fa"
const Navbar = () => {

  const [theme,settheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const ele = document.documentElement;

  useEffect(()=>{
    if(theme == "dark"){
      ele.classList.add("dark");
      localStorage.setItem("theme","dark");
    }
    else{
      ele.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  },[theme]);

  
  return (
    <header className="bg-navbar text-white border-b-[1px] border-primary/50" >
    <nav className="container flex items-center justify-between py-2 h-[70px]">
      <div className='text-2xl md:text=3xl text-white'>
      <a href="#"> 
        {" "}
        Mad<span className='inline-block text-primary font-bold'>Web</span>
      </a>
      </div>
      <div >
        <ul className='flex gap-4 items-center'>
          <li>Home</li>
          <li className='group cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] h-[72px]'>
              Services{" "}
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className='absolute left-0 p-4 z-[99999] hidden w-full rounded-b-3xl bg-white text-black shadow-md group-hover:block'>
              <div className='grid grid-cols-3 gap-5'>
                  <div>
                    <img src="src\assets\pc-building.avif" 
                    alt="Please Wait a minute Updation on Progress from main server"
                    className='max-h-[300px] w-full rounded-b-3xl object-fill'/>
                  </div>
                  <div className='col-span-2'>
                     <h1 className='font-bold text-3xl pt-3 pb-3'>Best Selling</h1>
                     <p className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem architecto distinctio placeat optio obcaecati magni aspernatur libero aliquid in, ex quidem, eum quae commodi blanditiis! Voluptatem nulla officia expedita iste?
                      <div className='grid grid-cols-3 mt-4'>
                          <div>
                          <h1 className='font-bold pt-2 pb-2'>Development</h1>
                            <ul className='space-y-2'>
                              <li className='cursor-pointer text-black/80 hover:text-primary'>Web Development</li>
                              <li className='cursor-pointer text-black/80 hover:text-primary'>Mobile Development</li>
                              <li className='cursor-pointer text-black/80 hover:text-primary'>Software Automation</li>
                            </ul>
                          </div> 
                          <div>
                          <h1 className='font-bold pt-2 pb-2'>Development</h1>
                            <ul className='space-y-2'>
                              <li className='cursor-pointer text-black/80 hover:text-primary'>Web Development</li>
                              <li className='cursor-pointer text-black/80 hover:text-primary'>Mobile Development</li>
                              <li className='cursor-pointer text-black/80 hover:text-primary'>Software Automation</li>
                            </ul>
                          </div> 
                          <div></div>  
                      </div>
                     </p>
                  </div>
              </div>
            </div>
          </li>
          <li>Contact us</li>
          <li>
            <div className='flex gap-4 items-center'>
            <div>
              <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white hover:bg-primary/90"/>
            </div>
            <div>
                  <p>Call-now</p>
                  <p>
                    <a href="tel:+919345645016">9345645016</a>
                  </p>
            </div>
            </div>
          </li>
          {
            theme == "dark" ? (
              <BiSolidSun className='text-2xl cursor-pointer' onClick={()=> settheme("light")}/>

            ) : (
              <BiSolidMoon className='text-2xl cursor-pointer' onClick={()=> settheme("dark")}/>

            )
          }
        </ul>
      </div>
    </nav> 
    </header>
  )
}

export default Navbar