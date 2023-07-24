import React from 'react'
import myImage from '../assets/images/myImage.png'
import { TypeAnimation } from 'react-type-animation'
import {LiaExternalLinkAltSolid,LiaLinkSolid} from 'react-icons/lia'
import {MdConnectWithoutContact} from 'react-icons/md'

export const Home = () => {
  return (
    <div id='home' className=' md:w-[75%] md:ml-[25%]  h-[100vh] flex justify-center items-center bg-no-repeat bg-top' style={{backgroundImage: `url(${myImage})`}}>
        <div className=" h-screen absolute top-0 md:left-[25%] left-0 right-0 bg-black/50"></div>
        <div className='z-[2] p-2 w-full m-2 flex flex-col justify-center items-center '>
            <p className='text-stone-100 text-xl font-bold first-letter:text-3xl md:py-5 py-2'>Welcome Dear!</p>
            <h2 className="flex md:text-4xl text-xl py-5 font-extrabold text-primary  ">
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
                    wrapper="div"
                    speed={30}
                    repeat={Infinity}
                    className='pl-2 text-stone- '
                />
            </h2>
            <div className='m-auto flex flex-wrap gap-2 text-stone-200  py-2 md:my-4 divide-x-2 items-center '>
                <div className='flex flex-wrap justify-around gap-4 p w-full'>
                    <a href="#services" className='btn btn-outline bg-stone-200 rounded-lg border-none duration-200 ease-in hover:scale-110'>what i do <LiaExternalLinkAltSolid size={20}/></a>
                    <a href="#contact" className='btn border-none bg-primary-focus text-stone-200 duration-200 ease-in hover:scale-110 rounded-lg '>get in touch <MdConnectWithoutContact size={30}/></a>
                </div>
                <div className='p-2 text-primary font-bold md:text-lg overflow-x-scroll'>
                    <p className='p-1'>+234-7034798736</p>
                    <p className='p-1'>AyokaCynthia23@gmail.com</p>
                    <p className='p-1 capitalize'>owerri, imo sate. nigeria</p>
                </div>
            </div>
        </div>
    </div>
  )
}
