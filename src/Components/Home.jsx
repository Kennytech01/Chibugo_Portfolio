import React from 'react'
import myImage from '../assets/images/myImage.png'
import { TypeAnimation } from 'react-type-animation'
import {LiaExternalLinkAltSolid,LiaLinkSolid} from 'react-icons/lia'
import {RiMailDownloadLine} from 'react-icons/ri'
import { FaPhone } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {PiMapPinLineThin} from 'react-icons/pi'


export const Home = () => {
  return (
    <div id='home' className='relative md:w-[75%] md:ml-[25%]  h-[100vh] flex justify-center items-center bg-no-repeat  bg-left-top' style={{backgroundImage: `url(${myImage})`}}>
        <div className="h-[100vh] absolute top-0 left-0 right-0 bg-black/50"></div>
        <div className='z-[2] p-2 w-full m-2 flex flex-col justify-center items-center '>
            <p id='wecome' className='text-stone-100 text-xl font-bold first-letter:text-3xl md:py-5 py-2'>Welcome Dear!</p>
            <h1 className="fle flex-wrap md:text-4xl text-xl py-5 font-extrabold text-primary  ">
                I'm 
                <TypeAnimation 
                    sequence={[
                        'Ayoka Cynthia Chibugo',
                         2000,
                         ' a Freelancer',
                         2000,
                        ' a Financial Expert',
                         2000,
                        'a Data Analyst',
                         2000,
                         'a Career Coach',
                         2000,
                         'a Business Consultant',
                         2000,
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                    className='pl-2'
                /> 
            </h1>
            <div className='m-auto grid md:grid-cols-2 grid-cols-1 w-full gap-2 text-stone-200  py-2 md:my-4 divide-x-2 items-center '>
                <div className=' flex flex-wrap justify-around gap-4 m-1 '>
                    <a href="#services" className='btn btn-outline bg-stone-200 rounded-lg border-none duration-200 ease-in hover:scale-110 justify-center items-center'>what i do <LiaExternalLinkAltSolid size={20}/></a>
                    <a href='https://docs.google.com/document/d/1dT-5kSd-0hqQBSQJcHj4C9OKruoUKl3D/edit?usp=sharing&ouid=106498312753727848708&rtpof=true&sd=true' target='_blank' className='btn border-none bg-primary-focus text-stone-200 duration-200 ease-in hover:scale-110 rounded-lg justify-center items-center '>resume`<RiMailDownloadLine size={20}/></a>
                </div>
                <div className='m-1 text-primary font-light'>
                    <a href="tel:+234-7034798736"target='_blank' className='flex items-center p-1  '><FaPhone size={20}  className='mx-2'/>+234-7034798736</a>
                    <a href="mailto:Cynthiaayoka23@gmail.com" target="_blank" className="flex items-center p-1  "><SiGmail size={20}  className='mx-2'/>Cynthiaayoka23@gmail.com</a>
                    <a href="#map" size={20} rel="noopener noreferrer" className="flex items-center capitalize p-1 "><PiMapPinLineThin size={20} className='mx-2'/>owerri, imo sate. nigeria</a>
                </div>
            </div>
        </div>
    </div>
  )
}
