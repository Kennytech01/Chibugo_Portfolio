import React, {useEffect, useState} from 'react'
import {FiExternalLink} from 'react-icons/fi'
import services from './../assets/images/services.jpg'
import { ServiceData } from './ServiceData' 
import myImage from './../assets/images/myImage.png'
import {LiaTimesSolid} from 'react-icons/lia'
import AccountReconciliation from './../assets/images/AccountReconciliation.jpeg'

export const Services = () => {
   const [popUp, setPopUp] = useState([]);
   const [popUpToggle, setPopUpToggle] = useState(false);


   const handleClick = (service) => {
    setPopUp([service])
    setPopUpToggle(!popUpToggle)
   }

   useEffect(()=>{
    const BODY = document.querySelector('body');
    BODY.style.overflow = popUpToggle? 'hidden' : 'auto';
   }, [popUpToggle])

  return (
    <div id='services' className='sm:mx-10  p-4 sm:py-16 '>
        <ul class="capitalize p-5">
            <li class="text-lg font-bold uppercase ">-services</li>
            <li class="font-extrabold md:text-4xl text-3xl py-2 text-primary">my specializations</li>
        </ul>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                ServiceData.map((service)=>{
                    return (
                        <div className='hover:cursor-pointer'>
                            <p className=' p-2 text-start text-lg'>{service.number}</p>
                            <p className='font-bold text-[#314198] p-2 text-lg capitalize'>{service.title}</p>
                            <p className='p-2 px-4 text-gray-dark'>{service.duty}</p>
                            <div className='py-3'>
                                <button onClick={()=>handleClick(service)} className='hover:scale-110 duration-500 transition-all flex items-center justify-center bg-primary text-secondary p-2 rounded-2xl mx-5 capitalize font-bold'>{service.link} <FiExternalLink className='mx-1'/></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div>
            {popUpToggle && (
                popUp.map((pop)=>{
                    return (
                        <div className='fixed flex items-center justify-center top-0 left-0 right-0 h-screen w-full z-[99]'>
                            <div className='fixed flex items-center justify-center top-0 left-0 right-0 h-full w-full -z-[99] bg-[#1f2937]/70'></div>
                            <div className='md:w-2/3 w-4/5  h-auto relative shadow-lg  rounded bg-white overflow-y-auto'>
                                <button onClick={()=>handleClick(pop)} className='text-right absolute right-2 top-2 text-xl font-bold border rounded-full'><LiaTimesSolid/></button>
                                <div className='p-5 flex flex-col justify-between items-center m-auto h-96' >
                                    <p className='h-1/2 w-full '>
                                        <img src={pop.Image} alt="" className='p-2 rounded-2xl h-full w-full object-contain' />
                                    </p>
                                    <p className='p-5 font-light first-letter:text-xl first-letter:mr-1 first-letter:font-bold '>{pop.details}</p>
                                </div>
                            </div>
                        </div>
                    )
                }))
            }
        </div>
    </div>
  )
}
