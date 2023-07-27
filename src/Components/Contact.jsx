import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import {PiMapPinLineThin} from 'react-icons/pi'

export const Contact = () => {
  return (
    <div id="contact" className="md:ml-[25%] md:w-[75%] py-10 max-w-[1040px] mx-auto flex justify-center items-center p-4 ">
        <div class="">
            <div class="grid md:grid-cols-2 sm:gap-2 ">
                {/* <!-- right --> */}
                <div class=" md:w-full ">
                    <div class="p-">
                        <ul class="capitalize py-5">
                            <li class="text-lg font-bold uppercase">-let's connect</li>
                            <li class="font-extrabold text-4xl py-2 text-primary">get in touch</li>
                        </ul>
                        <p class="py-2 tracking-wide">I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>
                        <div class="capitalize my-2 font-bold text-secondary relative border-l-2 border-primary">
                            <a href="tel:+234-7034798736"target='_blank' className='flex items-center  p-2'><FaPhone className='mx-2'/>+234-7034798736</a>
                            <a href="mailto:Cynthiaayoka23@gmail.com" target="_blank" className="flex items-center  p-2"><SiGmail className='mx-2'/>Cynthiaayoka23@gmail.com</a>
                            <a href="#map" rel="noopener noreferrer" className="flex items-center capitalize p-2"><PiMapPinLineThin className='mx-2'/>owerri, imo sate. nigeria</a>
                        </div>
                    </div>
                </div>
                {/* <!-- left --> */}
                <div class=" md:w-full">
                    <form action="https://getform.io/f/0d3fb5b7-3d81-4881-94b8-74a0a4de2917" method="POST" encType='multipart/form-data'class="py-2 capitalize ">
                        <div class="my-3">
                            <input type="text" onfocus="this.value = '' " placeholder="enter your name:"  class="rounded-lg bg-[#ffff] bg-opacity-40 input  w-full" />
                        </div>
                        <div class="my-3">
                            <input type="email" onfocus="this.value = '' " placeholder="your email:" class="rounded-lg bg-[#ffff] bg-opacity-40 input w-full " />
                        </div>
                        <div class="my-3">
                            <textarea class="rounded-lg bg-[#ffff] bg-opacity-40 textarea w-full h-[10rem] text-lg " placeholder="write something:"></textarea>
                        </div>
                        <div class="my-3">
                            <button type="submit" value="send" class="rounded-lg btn btn-outline font-bold w-full btn-secondary">Send now</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* map  */}
           <div id='map' class="relative h-96 w-full mx-auto py-10">
                <p>Map</p>
                <div class="absolute inset-0 right-0 left-0 top-10  ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63545.24913372989!2d6.977060246842966!3d5.480775982906745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042599d25620855%3A0x3df49e1d3b9f730d!2sOwerri%20Municipal%2C%20Imo!5e0!3m2!1sen!2sng!4v1682094327515!5m2!1sen!2sng" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
           </div>
        </div>
    </div>
  )
}

