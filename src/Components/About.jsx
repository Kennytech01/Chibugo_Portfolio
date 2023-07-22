import React, { useState } from 'react'

export const About = () => {
    const [time, setTime] = useState(0)
  return (
    <div id='about' className='md:ml-[25%] md:w-[75%] max-w-[1040px]'>
        <div class="p-4 py-16">
            <div class=" flex md:flex-row flex-col justify-around ">
                {/* <!-- left --> */}
                <div class=" p-1 m-1 md:w-[40rem]">
                    <div class=" mx-auto py-4 text-center w-full">
                        <ul class="p-">
                            <li class="uppercase p-1 font-bold">-Nice to meet you!</li>
                            <li class="text-primary text-3xl py-5 font-extrabold capitalize">Cynthia A. Chibugo</li>
                            <li class="text-lg font-bold capitalize">Financial Accountant & Data analyst</li>
                        </ul>
                        <div class="p-2 py-5">
                            <button type="submit" id="openPortfolio"  class="btn btn-outline btn-primary mx-auto text-base-200 capitalize shadow-lg rounded-xl font-bold" >got a project?</button>
                        </div>
                    </div>
                </div>
                {/* <!-- right --> */}
                <div class="p-1 m-1">
                    <div>
                        <p class="p-2 tracking-wide flex flex-wrap items-center"> <span class="font-bold ">Hello there!</span> My name is <a href="#" class="text-primary font-bold capitalize">Ayoka Cynthia Chibugo</a> I am a Financial Accountant & Data Analyst, and I'm very passionate and dedicated to my work.</p>
                        <p class="p-2 tracking-wide">With over 15years experience as an Accountant and Data Analyst, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of Accounting,</p>
                        <ul class="flex py-5 tracking-wide capitalize font-light overflow-auto">
                            <li class="px-2">
                                <p href="#" class="font-extrabold">Born in</p>
                                <p href="#">Lagos, Nigeria</p>
                            </li>
                            <li class="px-2">
                                <p href="#" class="font-extrabold">Email</p>
                                <p href="">AyokaCynthia23@gmail.com</p>
                            </li>
                            <li class="px-2">
                                <p href="#" class="font-extrabold">call me</p>
                                <p href="#">+234-7034798736</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- check out --> */}
            <div class="flex justify-center min-h-max min-w-max items-center m-auto">
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
