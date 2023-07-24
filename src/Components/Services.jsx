import React, {useState} from 'react'
import {FiExternalLink} from 'react-icons/fi'
import { Modal } from './Modal'


export const Services = () => {
    const [openModel, setOpenModal] = useState(false)

  return (
    <div id='services' className='md:ml-[25%] md:w-[75%] max-w-[1040px] py-10'>
        <ul class="capitalize p-5">
            <li class="text-lg font-bold uppercase ">-services</li>
            <li class="font-extrabold text-4xl py-2 text-primary">my services</li>
        </ul>
        <div className='grid lg:grid-cols-3 gap-4 sm:grid-cols-2 p-3 h-full'>
            <div className='p-2 m-1 '>
                <div className='w-full text-center py-2'>
                    <p className='font-light p-2 text-start text-lg'>01</p>
                    <p className='font-bold text-secondary p-2 text-lg capitalize'>Account Reconciliation/ audit</p>
                    <p className='p-2 text-start' >I oversee all financial and accounting activities for the organization, including managing and overseeing financial processes and activities</p>
                    {/* <div> */}
                        <a href='#services' onClick={()=> setOpenModal(true)} className='flex items-center border justify-center btn mx-5'>read more <FiExternalLink className='mx-1'/></a>
                        {/* <Modal open ={openModel} /> */}
                    {/* </div> */}
                </div>
            </div>
            <div className='p-2 m-1 '>
                <div className='w-full text-center py-2'>
                    <p className='font-light p-2 text-start text-lg'>02</p>
                    <p className='font-bold text-secondary p-2 text-lg capitalize'>Data Entry/ financial Analysis</p>
                    <p className='p-2 text-start' >I Compile, verify accuracy and sort information according to priorities to prepare source data for computer entry</p>
                    <a href="#" className='flex items-center border justify-center btn mx-5'>read more <FiExternalLink className='mx-1'/></a>
                </div>
            </div>
            <div className='p-2 m-1 '>
                <div className='w-full text-center py-2'>
                    <p className='font-light p-2 text-start text-lg'>03</p>
                    <p className='font-bold text-secondary p-2 text-lg'>Team Management</p>
                    <p className='p-2 text-start' >As a team manager, I creates guidelines, goals, checkpoints, and objectives for employees to improve productivity while...</p>
                    <a href="#" className='flex items-center border justify-center btn mx-5'>read more <FiExternalLink className='mx-1'/></a>
                </div>
            </div>
            <div className='p-2 m-1 '>
                <div className='w-full text-center py-2'>
                    <p className='font-light p-2 text-start text-lg'>04</p>
                    <p className='font-bold text-secondary p-2 text-lg'>Customer Relationship Management (CRM)</p>
                    <p className='p-2 text-start' >I Build and maintain profitable relationships with key customers.Resolve customer complaints quickly and efficiently</p>
                    <a href="#" className='flex items-center border justify-center btn mx-5'>read more <FiExternalLink className='mx-1'/></a>
                </div>
            </div>
            <div className='p-2 m-1 '>
                <div className='w-full text-center py-2'>
                    <p className='font-light p-2 text-start text-lg'>05</p>
                    <p className='font-bold text-secondary p-2 text-lg capitalize'>Cost Accounting & sales Management</p>
                    <p className='p-2 text-start  '>Developing and implementing new cost accounting procedures within your company.This might include anything from...</p>
                    <a href="#" className='flex items-center border justify-center btn mx-5'>read more <FiExternalLink className='mx-1'/></a>
                </div>
            </div>
            <div className='p-2 m-1 '>
                <div className='w-full text-center py-2'>
                    <p className='font-light p-2 text-start text-lg'>06</p>
                    <p className='font-bold text-secondary p-2 text-lg capitalize'>analytical skills & financial reporting</p>
                    <p className='p-2 text-start' >Monitor, review and analyze territory monthly financial packages and prepare required reconciliations and adjustments, including...</p>
                    <a href="#" className='flex items-center border justify-center btn mx-5'>read more <FiExternalLink className='mx-1'/></a>
                </div>
            </div>    
        </div>
    </div>
  )
}
