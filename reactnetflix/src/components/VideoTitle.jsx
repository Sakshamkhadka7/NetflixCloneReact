import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";
const VideoTitle = () => {
  return (
    <div className='absolute text-white pt-[18%] p-12'>
        <h1 className='text-3xl font-bold'>Saksham Mern Stack</h1>
        <p>Learning Mern stack development from scratch</p>
        <div className='flex mt-8'>
            <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
                <CiPlay1 size="24px" />
                <span>Play</span>
                </button>
            <button className='flex items-center mx-4  px-6 py-2 bg-white text-black rounded-md'>
                
                <IoIosInformationCircle size="24px" />
                <span>Watch More</span>
                </button>
        </div>
    </div>
  )
}

export default VideoTitle