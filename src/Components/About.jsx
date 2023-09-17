import React, { useState } from 'react'
import { FaGooglePlusG} from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import {FaFacebookF, FaLinkedinIn,FaWhatsapp} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import introVideo from '../assets/video/introVideo.mp4'

export const About = () => {
    const [time, setTime] = useState(0)
  return (
    <div id='about' className='sm:mx-10 mx-'>
        <div class="p-4 py-20">
            <ul class="capitalize p-3">
                <li class="text-lg font-bold uppercase ">-Nice to meet you!</li>
                <li class="font-extrabold text-4xl py-2 text-primary">About me</li>
            </ul>
            <div id="video" class="  py-16 p-4 ">
                <div className='w-full flex justify-center items-center h-80 '>
                 <video src={introVideo} className=' h-full lg:w-1/2 w-full bg-white' controls/>
                </div>
            </div>
            <div class="p-1 m-1">
                <div>
                    <p class="p-2 tracking-wide items-center"> Hello there! My name is <a href="#about" class=" font-bold capitalize text-[#314198]">Ayoka Cynthia Chibugo</a>. I am a Financial Accountant & Data Analyst, and I'm very passionate and dedicated to my work.</p>
                    <p class="p-2 tracking-wide">With over 15years experience as an Accountant and Data Analyst, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of Accounting.</p>
                    <div className='py-5'>
                        <p className='font-bold py-5 text-2xl text-gray-dark'>Let's Connect</p>
                        <p className="flex text-primary">
                            <a href="http://"><FaFacebookF size={20} className=" mr-3 text-[#314198] hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                            <a href="https://linkedin.com/in/cynthia-chibugo-88092b139" target='_blank'><FaLinkedinIn size={20} className="mx-3 text-[#314198] hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                            <a href="mailto:"><SiGmail size={20} className="mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                            <a href="http://wa.me/+2347034798736" target='_blank'><FaWhatsapp size={20} className="text-[#319852] mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                        </p>
                    </div>
                </div>
            </div>
            {/* <!-- check out --> */}
            <div class="flex justify-center min-h-max  items-center m-auto">
                <div class="mx-auto p-1 w-full">
                    <div class="grid md:grid-cols-3 grid-cols-1 gap-2 ">
                        {/* <!-- start --> */}
                        <div class="h-40 m-1 items-center justify-center flex text-secondary bg-primary rounded-lg cursor-pointer">
                            <div class="text-center mx-auto">
                                <p class="font-extrabold text-5xl">15+</p>
                                <p class="uppercase py-1">year of experience</p>
                            </div>
                        </div>
                        {/* <!-- middle --> */}
                        <div class="h-40 m-1 items-center justify-center flex rounded-lg border cursor-pointer">
                            <div class="text-center mx-auto text-[#314198]">
                                <p class="font-extrabold text-5xl">50+</p>
                                <p class="uppercase py-1">completed projects</p>
                            </div>
                        </div>
                        {/* <!-- end --> */}
                        <div class="h-40 m-1 items-center justify-center flex bg-[#acab93]/30 text-gray-dark rounded-lg cursor-pointer">
                            <div class="text-center mx-auto">
                                <p class="font-extrabold text-5xl">30+</p>
                                <p class="uppercase py-1">happy clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
