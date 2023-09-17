import React from 'react'
import {FaFacebookF,FaWhatsapp,FaLinkedin} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

export const Footer = () => {
  return (
    <div className='flex flex-col h-40 justify-center items-center bg-secondary'>
        <div className=' w-full md:w-1/2 flex flex-wrap justify-evenly items-center py-5 font-light text-stone-100 text-lg'>
            <a href="#home" className='cursor-pointer hover:scale-110 duration-200 ease-in capitalize'>home</a>
            <a href="#" className='cursor-pointer hover:scale-110 duration-200 ease-in capitalize'>cookie policy</a>
            <a href="#" className='cursor-pointer hover:scale-110 duration-200 ease-in capitalize'>privacy policy</a>
            <a href="#contact" className='cursor-pointer hover:scale-110 duration-200 ease-in capitalize'>contact</a>
        </div>
        <div className='md:flex block flex-wrap justify-around items-center w-full pt-4 '>
            <div>
                <p className='text-stone-200 font-medium tracking-widest py-4'>Copyright © 2023 - All right reserved by <span className='font-black text-primary text-lg'>Chibugo Cynthia .A</span> </p>
            </div>
            <div>
                <div className="flex md:justify-between justify-evenly w-full text-stone-200 py-4">
                    <a href="http://"><FaFacebookF size={20} 
                        className=" hover:scale-110 duration-500 transition-all ease-in cursor-pointer mx-2"/>
                    </a>
                    <a href="https://linkedin.com/in/cynthia-chibugo-88092b139"><FaLinkedin size={20} 
                        className=" hover:scale-110 duration-500 transition-all ease-in cursor-pointer mx-2"/>
                    </a>
                    <a href="mailto:"><SiGmail size={20} 
                        className=" hover:scale-110 duration-500 transition-all ease-in cursor-pointer mx-2"/>
                    </a>
                    <a href="http://wa.me/+2347034798736"><FaWhatsapp size={20} 
                        className=" hover:scale-110 duration-500 transition-all ease-in cursor-pointer mx-2"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
