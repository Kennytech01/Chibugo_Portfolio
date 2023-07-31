import React, {useEffect, useState} from 'react'
import {FiExternalLink} from 'react-icons/fi'
import services from './../assets/images/services.jpg'
import { ServiceData } from './ServiceData' 
import myImage from './../assets/images/myImage.png'
import {FaTimes} from 'react-icons/fa'
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
    <div className='md:ml-[25%] md:w-[75%] max-w-[1040px] p-4 py-16'>
        <ul class="capitalize p-5">
            <li class="text-lg font-bold uppercase ">-services</li>
            <li class="font-extrabold md:text-4xl text-3xl py-2 text-primary">my specializations</li>
        </ul>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                ServiceData.map((service)=>{
                    return (
                        <div>
                            <div className=''>
                                <p className='font-light p-2 text-start text-lg'>{service.number}</p>
                                <p className='font-bold text-secondary p-2 text-lg capitalize'>{service.title}</p>
                                <p className='p-2'>{service.duty}</p>
                                <div className='py-3'>
                                    <button onClick={()=>handleClick(service)} className='flex items-center border justify-center btn mx-5'>{service.link} <FiExternalLink className='mx-1'/></button>
                                </div>
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
                        <div onClick={()=> handleClick(pop)} className='fixed flex items-center justify-center top-0 left-0 right-0 h-screen w-full bg-black/70 z-[999]'>
                            <div className='bg-stone-200 w-1/2 h-auto relative shadow-lg  rounded'>
                                <button onClick={()=>handleClick(pop)} className='text-right absolute right-2 top-2 text-xl font-bold border rounded-full'><FaTimes/></button>
                                <div className='p-5 flex flex-col justify-center items-center m-auto' >
                                    <img src={pop.Image} alt="" className='p-2 rounded-2xl ' />
                                    <p className='p-5 font-light first-letter:text-xl first-letter:mr-1 first-letter:font-bold'>{pop.details}</p>
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
