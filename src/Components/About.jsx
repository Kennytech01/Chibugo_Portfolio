import React, { useState } from 'react'
import { FaGooglePlusG} from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
export const About = () => {
    const [time, setTime] = useState(0)
  return (
    <div id='about' className='md:ml-[25%] md:w-[75%] max-w-[1040px]'>
        <div class="p-4 py-16">
            <ul class="capitalize p-3">
                <li class="text-lg font-bold uppercase ">-Nice to meet you!</li>
                <li class="font-extrabold text-4xl py-2 text-primary">About me</li>
            </ul>
            <div class="p-1 m-1">
                <div>
                    <p class="p-2 tracking-wide items-center"> Hello there! My name is <a href="#about" class=" font-bold capitalize">Ayoka Cynthia Chibugo</a>. I am a Financial Accountant & Data Analyst, and I'm very passionate and dedicated to my work.</p>
                    <p class="p-2 tracking-wide">With over 15years experience as an Accountant and Data Analyst, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of Accounting.</p>
                    <ul class="flex flex-wrap py-5 tracking-wide capitalize font-light overflow-auto ">
                        <li class="p-2">
                            <p class="font-extrabold flex items-center"><GoLocation className='mx-2'/> Born in</p>
                            <a href='#map' className=''>Abia State, Nigeria  </a>
                        </li>
                        <li class="p-2">
                            <p class="font-extrabold flex items-center"><FaGooglePlusG className='mx-2'/> Email</p>
                            <a href="mailto:Cynthiaayoka23@gmail.com" target="_blank" className=''>Cynthiaayoka23@gmail.com</a>
                        </li>
                        <li class="p-2">
                            <p class="font-extrabold flex items-center"><BiPhoneCall className='mx-2'/> call me </p>
                            <a href="tel:+234-7034798736"target='_blank' >+234-7034798736</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- check out --> */}
            <div class="flex justify-center min-h-max  items-center m-auto">
                <div class="mx-auto p-1 w-full">
                    <div class="grid md:grid-cols-3 grid-cols-1 gap-2 ">
                        {/* <!-- start --> */}
                        <div class="btn btn-primary h-40 m-1 items-center justify-center flex text-base-100 rounded-lg">
                            <div class="text-center mx-auto">
                                <p class="font-extrabold text-5xl">15+</p>
                                <p class="uppercase py-1">year of experience</p>
                            </div>
                        </div>
                        {/* <!-- middle --> */}
                        <div class="btn btn-primary btn-outline h-40 m-1 items-center justify-center flex rounded-lg text-base">
                            <div class="text-center mx-auto">
                                <p class="font-extrabold text-5xl">50+</p>
                                <p class="uppercase py-1">completed projects</p>
                            </div>
                        </div>
                        {/* <!-- end --> */}
                        <div class="btn btn-primary h-40 m-1 items-center justify-center flex bg-[#acab93] text-base-100 rounded-lg">
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
