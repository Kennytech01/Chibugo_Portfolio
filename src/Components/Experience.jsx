import React from 'react'
import { ExperienceItems } from './ExperienceItems'


const data = [
    {
        year : `2020 - 2023`,
        company: "Kaima Intergrated Network ventures(Nestle Distribution Company)",
        position: "Financial Accountant" ,
        job: "Job Description",
        role1: "Manage all financial accounting activities for business operations.",
        role2: "Respond to accounting related questions and inquiries from employees.",
        role3: "Perform month end closing activities such as account reconciliation, revenue accounting, expense accounting, etc."
    },
    {
        year : `2015-2020`,
        company: "Avery Nigeria Limited",
        position: "credit control officer" ,
        job: "Job Description",
        role1: "Creating procedures and policies that ensure timely payments while maintaining a high level of customer retention",
        role2: "Establish policies that follow customer service best practices while ensuring customers submit payments on time.",
        role3: "Develop and monitor a credit control system in collaboration with sales and marketing, finance and executive team members."
    },
    {
        year : `2012 - 2015 `,
        company: "-Heming Safaris Africa",
        position: "Account manager" ,
        job: "Job Description",
        role1: "Handle inquiries and requests from customers and address their needs",
        role2: "Stay on top of accounts, making sure they receive services that are within their budget and meet their needs",
        role3: "Meet regularly with other team members to discuss progress and find new ways to improve business"
    }
]
export const Experience = () => {
  return (
    <div id='experience' className='md:ml-[25%] md:w-[75%] max-w-[1040px] p-4 py-10'>
        <div className='text-2xl text-center font-bold p-2 py-4 first-letter:text-3xl'>Working Experience</div>
        {
            data.map((item,id)=>(
                <ExperienceItems
                key={id}
                year = {item.year}
                company = {item.company}
                position = {item.position}
                job = {item.job}
                role1 = {item.role1}
                role2 = {item.role2}
                role3 = {item.role3}
                />
            ))
        }
    </div>
  )
}
