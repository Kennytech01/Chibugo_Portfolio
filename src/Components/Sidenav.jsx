import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {MdWorkOutline, MdConnectWithoutContact}  from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'
import {FaFacebookF, FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'
import myImage from '../assets/images/myImage.png'


export const Sidenav = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className=''>
        <AiOutlineMenu onClick={handleNav} className='absolute right-4 z-[99] top-4 md:hidden' size={20}/>
        {
            nav?(
                <div className='flex flex-col items-center max-w-[1040px] m-auto p-4 py-16 h-screen fixed bg-stone-500/10 '>
                    <a 
                    href=""
                    className='btn btn-outline btn-primary w-2/3 m-2'
                    onClick={handleNav} >
                        <AiOutlineHome/>
                        <span className="pl-2">home</span>
                    </a>
                    <a 
                    href=""
                    className='btn btn-outline btn-primary w-2/3 m-2'
                    onClick={handleNav} >
                        <FcAbout/>
                        <span className="pl-2">about</span>
                    </a>
                    <a 
                    href=""
                    className='btn btn-outline btn-primary w-2/3 m-2'
                    onClick={handleNav} >
                        <MdWorkOutline/>
                        <span className="pl-2">portfolio</span>
                    </a>
                    <a 
                    href=""
                    className='btn btn-outline btn-primary w-2/3 m-2'
                    onClick={handleNav} >
                        <FaLaptopCode/>
                        <span className="pl-2">skills</span>
                    </a>
                    <a 
                    href=""
                    className='btn btn-outline btn-primary w-2/3 m-2'
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
        <div className='w-1/4 fixed bg-primary max-w-[1040px] m-auto items-center justify-center h-[100vh] md:flex hidden'>
            <div className='p-2'>
                <div className='flex  flex-col justify-center items-center py-4 '>
                    <p className=''>
                        <img src={myImage} alt="myImage" className=' w-24 h-24 rounded-full object-cover object-top' />
                    </p>
                    <p className='p-2 text-lg capitalize font-bold text-stone-200'>ayoka cynthia chibugo</p>
                </div>
                <div className='py-4 text-center m-auto justify-center items-center flex flex-col text-primary-content capitalize '>
                    <a 
                    href="http://"
                    className='flex items-center hover:border w-full p-2 m-2 justify-center rounded-full hover:bg-stone-200 duration-200 ease-in hover:110'
                    >
                        <AiOutlineHome className='mr-2' />
                        home
                    </a>
                    <a 
                    href="http://"
                    className='flex items-center hover:border w-full p-2 m-2 justify-center rounded-full hover:bg-stone-200 duration-200 ease-in hover:110'
                    >
                        <FcAbout className='mr-2' />
                        about me
                    </a>
                    <a 
                    href="http://"
                    className='flex items-center hover:border w-full p-2 m-2 justify-center rounded-full hover:bg-stone-200 duration-200 ease-in hover:110'
                    >
                        <MdWorkOutline className='mr-2' />
                        portfolio
                    </a>
                    <a 
                    href="http://"
                    className='flex items-center hover:border w-full p-2 m-2 justify-center rounded-full hover:bg-stone-200 duration-200 ease-in hover:110'
                    >
                        <FaLaptopCode className='mr-2' />
                        skills
                    </a>
                    <a 
                    href="http://"
                    className='flex items-center hover:border w-full p-2 m-2 justify-center rounded-full hover:bg-stone-200 duration-200 ease-in hover:110'
                    >
                        <MdConnectWithoutContact className='mr-2' />
                        contact
                    </a>
                </div>
                <div className="flex justify-evenly w-full text-stone-200 py-4">
                    <FaFacebookF size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/>
                    <FaTwitter size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/>
                    <FaLinkedin size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/>
                    <FaGithub size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/>
                </div>
            </div>
        </div>
    </div>
  )
}
