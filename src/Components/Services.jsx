import React from 'react'
import {FiExternalLink} from 'react-icons/fi'


const data = [
    {
        number: "01",
        title: "Account Reconciliation/ finacial audit" ,
        details: "Donec sodales euismod mollis. Phasellus varius lacus tincidunt, aliquet odio congue, mollis ligula. Suspendisse malesuada tellus",
        link: 'read more'
    },
    {
        number: "02",
        title: "Data Entry/ financial Analysis" ,
        details: "Donec sodales euismod mollis. Phasellus varius lacus tincidunt, aliquet odio congue, mollis ligula. Suspendisse malesuada tellus",
        link: 'read more'
    },
    {
        number: "03",
        title: "Team Management" ,
        details: "Donec sodales euismod mollis. Phasellus varius lacus tincidunt, aliquet odio congue, mollis ligula. Suspendisse malesuada tellus",
        link: 'read more'
    },
    {
        number: "04",
        title: "Customer Relationship Management (CRM)" ,
        details: "Donec sodales euismod mollis. Phasellus varius lacus tincidunt, aliquet odio congue, mollis ligula. Suspendisse malesuada tellus",
        link: 'read more'
    },
    {
        number: "05",
        title: "Cost Accounting & sales Management" ,
        details: "Donec sodales euismod mollis. Phasellus varius lacus tincidunt, aliquet odio congue, mollis ligula. Suspendisse malesuada tellus",
        link: 'read more'
    },
    {
        number: "06",
        title: "analytical skills & financial reporting" ,
        details: "Donec sodales euismod mollis. Phasellus varius lacus tincidunt, aliquet odio congue, mollis ligula. Suspendisse malesuada tellus",
        link: 'read more'
    },
]
export const Services = () => {
  return (
    <div id='services' className='md:ml-[25%] md:w-[75%] max-w-[1040px] py-16 h-[90vh]'>
        <div className='text-2xl text-center font-bold p-2 py-4 first-letter:text-3xl capitalize'>my services</div>
        <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-2 p-3 h-full'>
            <div className='p-2 m-1'>
                <div className='w-full text-center py-2'>
                    <p className='font-light p-2 text-start text-lg'>01</p>
                    <p className='font-bold text-secondary p-2 text-lg'>Account Reconciliation/ finacial audit</p>
                    <p className='p-2 text-start'>Donec sodales euismod mollis. Phasellus varius lacus tincidunt, aliquet odio congue, mollis ligula. Suspendisse malesuada tellus</p>
                    <a href="#" className='flex items-center border justify-center btn mx-5'>read more <FiExternalLink className='mx-1'/></a>
                </div>
            </div>
            <div className='p-2 m-1'>
                <div className='w-full text-center py-2'>
                    <p className='font-light p-2 text-start text-lg'>02</p>
                    <p className='font-bold text-secondary p-2 text-lg'>Data Entry/ financial Analysis</p>
                    <p className='p-2 text-start'>Phasellus varius lacus tincidunt, aliquet odio congue, mollis ligula. Suspendisse malesuada tellus</p>
                    <a href="#" className='flex items-center border justify-center btn mx-5'>read more <FiExternalLink className='mx-1'/></a>
                </div>
            </div>
            <div className='p-2 m-1'>
                <div className='w-full text-center py-2'>
                    <p className='font-light p-2 text-start text-lg'>01</p>
                    <p className='font-bold text-secondary p-2 text-lg'>Account Reconciliation/ finacial audit</p>
                    <p className='p-2 text-start'>Donec sodales euismod mollis. Phasellus varius lacus tincidunt, aliquet odio congue, mollis ligula. Suspendisse malesuada tellus</p>
                    <a href="#" className='flex items-center border justify-center btn mx-5'>read more <FiExternalLink className='mx-1'/></a>
                </div>
            </div>
            <div className='p-2 m-1'>
                <div className='w-full text-center py-2'>
                    <p className='font-light p-2 text-start text-lg'>01</p>
                    <p className='font-bold text-secondary p-2 text-lg'>Account Reconciliation/ finacial audit</p>
                    <p className='p-2 text-start'>Donec sodales euismod mollis. Phasellus varius lacus tincidunt, aliquet odio congue, mollis ligula. Suspendisse malesuada tellus</p>
                    <a href="#" className='flex items-center border justify-center btn mx-5'>read more <FiExternalLink className='mx-1'/></a>
                </div>
            </div>
            <div className='p-2 m-1'>
                <div className='w-full text-center py-2'>
                    <p className='font-light p-2 text-start text-lg'>01</p>
                    <p className='font-bold text-secondary p-2 text-lg'>Account Reconciliation/ finacial audit</p>
                    <p className='p-2 text-start'>Donec sodales euismod mollis. Phasellus varius lacus tincidunt, aliquet odio congue, mollis ligula. Suspendisse malesuada tellus</p>
                    <a href="#" className='flex items-center border justify-center btn mx-5'>read more <FiExternalLink className='mx-1'/></a>
                </div>
            </div>
            <div className='p-2 m-1'>
                <div className='w-full text-center py-2'>
                    <p className='font-light p-2 text-start text-lg'>01</p>
                    <p className='font-bold text-secondary p-2 text-lg'>Account Reconciliation/ finacial audit</p>
                    <p className='p-2 text-start'>Donec sodales euismod mollis. Phasellus varius lacus tincidunt, aliquet odio congue, mollis ligula. Suspendisse malesuada tellus</p>
                    <a href="#" className='flex items-center border justify-center btn mx-5'>read more <FiExternalLink className='mx-1'/></a>
                </div>
            </div>    
        </div>
    </div>
  )
}
