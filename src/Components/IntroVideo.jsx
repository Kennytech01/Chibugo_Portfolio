import React from 'react'
import {BsBoxArrowInDownRight} from 'react-icons/bs'

export const IntroVideo = () => {
  return (
    <div id="video" class="max-w-[1040px] m-auto md:ml-[25%] md:w-[75%] py-1 h-full">
        <div className='flex justify-center items-center p-2'>
            <a href="#video" class="capitalize font-bold rounded-full w-auto flex items-center p-2 px-3 bg-secondary text-stone-200 hover:bg-stone-200 hover:text-secondary">intro video <BsBoxArrowInDownRight/></a>
        </div>
        <div class = " p-2 w-full relative h-96 ">
            <iframe class=" m-auto w-full h-full shadow-md" src="https://www.youtube.com/embed/7e90gBu4pas" title="Everything about me" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}
