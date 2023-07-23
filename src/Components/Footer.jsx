import React from 'react'
import {FaFacebookF,FaTwitter,FaLinkedin,FaGithub} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='md:hidden flex flex-col justify-center items-center max-w-[1040px]  m-auto md:ml-[25%] p-4 py-10 bg-primary-content'>
        <div className=' w-full md:w-1/2 flex flex-wrap justify-evenly items-center py-10 font-light text-stone-100 text-lg'>
            <a href="#home" className='cursor-pointer hover:scale-110 duration-200 ease-in capitalize'>home</a>
            <a href="#" className='cursor-pointer hover:scale-110 duration-200 ease-in capitalize'>cookie policy</a>
            <a href="#" className='cursor-pointer hover:scale-110 duration-200 ease-in '>Terms of use</a>
            <a href="#" className='cursor-pointer hover:scale-110 duration-200 ease-in capitalize'>privacy policy</a>
            <a href="#contact" className='cursor-pointer hover:scale-110 duration-200 ease-in capitalize'>contact</a>
        </div>
        <div className='md:flex block flex-wrap justify-around items-center w-full pt-4 '>
            <div>
                <p className='text-stone-200 font-medium tracking-widest py-4'>Copyright © 2023 - All right reserved by <span className='font-black text-lg'>Chibugo Cynthia .A</span> </p>
            </div>
            <div>
                <div className="flex md:justify-between justify-evenly w-full text-stone-200 py-4">
                    <FaFacebookF size={24} className=" mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/>
                    <FaTwitter size={24} className=" mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/>
                    <FaLinkedin size={24} className=" mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/>
                    <FaGithub size={24} className=" mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/>
                </div>
            </div>
        </div>
    </div>
  )
}
