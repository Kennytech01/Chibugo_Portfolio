import React from 'react'
import myImage from '../assets/images/myImage.png'
import { TypeAnimation } from 'react-type-animation'

export const Home = () => {
  return (
    <div id='home' className=' md:w-[75%] md:ml-[25%]  h-[100vh] flex justify-center items-center bg-no-repeat bg-top' style={{backgroundImage: `url(${myImage})`}}>
        <div className=" h-screen absolute top-0 md:left-[25%] left-0 right-0 bg-black/50"></div>
        <div className='z-[2] p-2 w-full m-2 flex flex-col justify-center items-center '>
            <p className='text-stone-200 text-xl font-bold first-letter:text-3xl md:py-5 py-2'>Welcome Dear!</p>
            <h2 className="flex md:text-4xl text-lg py-5 font-extrabold text-primary  ">
                I'm  
                <TypeAnimation 
                    sequence={[
                        'Ayoka Cynthia Chibugo',
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
                    className='pl-2 '
                />
            </h2>
            <div className='grid md:grid-cols-2 gap-4 text-stone-200 w-full py-4 md:my-4 divide-x-2 items-center '>
                <div className='flex justify-around p-2 w-full '>
                    <button className='btn btn-outline bg-stone-200 border-none duration-200 ease-in hover:scale-110'>My Services</button>
                    <button className='btn btn-outline bg-primary duration-200 ease-in hover:scale-110 '>Let's Talk</button>
                </div>
                <div className='p-2 text-primary font-bold md:text-lg'>
                    <p className='p-1'>+234-7034798736</p>
                    <p className='p-1'>AyokaCynthia23@gmail.com</p>
                    <p className='p-1'>owerri, imo sate. nigeria</p>
                </div>
            </div>
        </div>
    </div>
  )
}
