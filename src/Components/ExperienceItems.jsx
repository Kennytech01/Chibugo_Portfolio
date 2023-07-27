import React from 'react'

export const ExperienceItems = ({exp}) => {
  return (
    <ul>
        <li>
            <div className='grid grid-cols-1 m-1 gap-2 divide-y divide-secondary border-b border-secondary-focus py-10'>
                <div>
                    <ul className='flex flex-wrap justify-between items-center'>
                        <li className='bg-secondary p-2 rounded shadow-inner font-bold text-stone-200 '>{exp.year}</li>
                        <li className='text-stone-500 font-bold text-lg p-2 capitalize'>{exp.company}</li>
                    </ul>
                    <p className='font-bold text-primary text-xl p-4 capitalize'>{exp.position}</p>
                    <p className='p-2 text-stone-700 font-bold'>{exp.job}</p>
                    <ul className='list-disc pl-10'>
                        <li className='p-2'>{exp.role1}</li>
                        <li className='p-2'>{exp.role2}</li>
                        <li className='p-2'>{exp.role3}</li>
                    </ul>
                    <div></div>
                </div>
            </div>
        </li>
    </ul>
  )
}
