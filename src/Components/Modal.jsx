import { handler } from 'daisyui';
import React from 'react'

export const Modal = ({open,onClose}) => {
    if(!open) return null;

    // handler
  return (
    <div onClick={onClose}  className='fixed right-0 left-0 bg-black/60 top-0 flex justify-center items-center h-screen'>
        <div>
            <div>
                <img src="" alt="" />
                <p>this is a modal</p>
            </div>
        </div>
    </div>
  )
}
