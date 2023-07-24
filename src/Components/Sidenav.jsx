import React, { useEffect, useState } from 'react'
import {AiOutlineMenu,AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {MdWorkOutline, MdConnectWithoutContact}  from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'
import {FaFacebookF, FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'
import myImage from '../assets/images/myImage.png'
import {TfiVideoClapper} from 'react-icons/tfi'
import {SiGmail} from 'react-icons/si'
import {PiUserFocus} from'react-icons/pi'

export const Sidenav = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

    useEffect(()=>{
        const body = document.querySelector('body');
        body.style.overflow = nav? 'hidden' : 'auto';
    }, [nav]);


  return (
    <div className='z-[]'>
        <ul className='text-stone-200 bg-primary top-0 md:hidden fixed z-[999] flex flex-wrap justify-between p-4 items-center w-full'>
            <li className='font-bold text-lg'>Chibugo Cynthia A.</li>
            <li><AiOutlineMenu onClick={handleNav} className=' text-white ' size={20}/></li>
        </ul>
        {
            nav?(
                <div onClick={handleNav} className='z-[99] flex flex-col items-center max-w-[1040px] m-auto p-4 py-16  min-h-full w-full fixed bg-black/90 '>
                    <a 
                    href="#home"
                    className='btn btn-outline bg-stone-300 hover:bg-stone-400 hover:text-white w-full m-2 '
                    onClick={handleNav} >
                        <AiOutlineHome/>
                        <span className="pl-2">home</span>
                    </a>
                    <a 
                    href="#about"
                    className='btn btn-outline bg-stone-300 hover:bg-stone-400 hover:text-white w-full m-2 '
                    onClick={handleNav} >
                        <PiUserFocus/>
                        <span className="pl-2">about</span>
                    </a>
                    <a 
                    href="#experience"
                    className='btn btn-outline bg-stone-300 hover:bg-stone-400 hover:text-white w-full m-2 '
                    onClick={handleNav} >
                        <MdWorkOutline/>
                        <span className="pl-2">experience</span>
                    </a>
                    <a 
                    href="#services"
                    className='btn btn-outline bg-stone-300 hover:bg-stone-400 hover:text-white w-full m-2 '
                    onClick={handleNav} >
                        <FaLaptopCode/>
                        <span className="pl-2">services</span>
                    </a>
                    <a 
                    href="#video"
                    className='btn btn-outline bg-stone-300 hover:bg-stone-400 hover:text-white w-full m-2 '
                    onClick={handleNav} >
                        <TfiVideoClapper/>
                        <span className="pl-2">intro video</span>
                    </a>
                    <a 
                    href=""
                    className='btn btn-outline bg-stone-300 hover:bg-stone-400 hover:text-white w-full m-2 '
                    onClick={handleNav} >
                        <MdConnectWithoutContact/>
                        <span className="pl-2">testimonial</span>
                    </a>
                    <a 
                    href="#contact"
                    className='btn btn-outline bg-stone-300 hover:bg-stone-400 hover:text-white w-full m-2 '
                    onClick={handleNav} >
                        <MdConnectWithoutContact/>
                        <span className="pl-2">contact</span>
                    </a>
                </div>
            )
            : (
                null
            )
        }

        {/* sideNav  */}
        <div className='w-1/4 fixed bg-primary max-w-[1040px] m-auto items-center justify-center md:flex hidden h-full'>
            <div className='p-2'>
                <div className='flex  flex-col justify-center items-center py-4 '>
                    <p className=''>
                        <img src={myImage} alt="myImage" className=' w-24 h-24 rounded-full object-cover object-top' />
                    </p>
                    <p className='p-2 text-2xl capitalize font-black text-stone-200'>ayoka cynthia chibugo</p>
                </div>
                <div className='py-2 text-center m-auto justify-center items-center flex flex-col capitalize font-bold '>
                    <a 
                    href="#home"
                    className='flex items-center hover:border w-full p-2 m-2 justify-center rounded-full hover:bg-stone-200 duration-200 ease-in hover:110'
                    >
                        <AiOutlineHome className='mr-2' />
                        home
                    </a>
                    <a 
                    href="#about"
                    className=' flex items-center hover:border w-full p-2 m-2 justify-center rounded-full hover:bg-stone-200 duration-200 ease-in hover:110'
                    >
                        <PiUserFocus className='mr-2' />
                        about me
                    </a>
                    {/* <a 
                    href="#experience"
                    className=' hidden flex items-center hover:border w-full p-2 m-2 justify-center rounded-full hover:bg-stone-200 duration-200 ease-in hover:110'
                    >
                        <MdWorkOutline className='mr-2' />
                        experience
                    </a> */}
                    <a 
                    href="#services"
                    className='flex items-center hover:border w-full p-2 m-2 justify-center rounded-full hover:bg-stone-200 duration-200 ease-in hover:110'
                    >
                        <FaLaptopCode className='mr-2' />
                        services
                    </a>
                    <a 
                    href="#video"
                    className='flex items-center hover:border w-full p-2 m-2 justify-center rounded-full hover:bg-stone-200 duration-200 ease-in hover:110'
                    >
                        <TfiVideoClapper className='mr-2' />
                        intro video
                    </a>
                    <a 
                    href="#contact"
                    className='flex items-center hover:border w-full p-2 m-2 justify-center rounded-full hover:bg-stone-200 duration-200 ease-in hover:110'
                    >
                        <MdConnectWithoutContact className='mr-2' />
                        contact
                    </a>
                </div>
                <div className="flex justify-evenly w-full text-stone-200 py-2">
                    <a href="http://"><FaFacebookF size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                    <a href="http://"><FaLinkedin size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                    <a href="mailto:"><SiGmail size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                </div>
                <div class="p-2 py-3 text-primary-content ">
                  <p>Copyright © 2023 <span class="font-bold">Cynthia A. Chibugo</span> - All right reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}
