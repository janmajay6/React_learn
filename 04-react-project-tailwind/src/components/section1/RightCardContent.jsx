import React from 'react'
import { ArrowRight } from 'lucide-react'
function RightCardContent(props) {
     console.log(props);
  return (
    
             <div className=' absolute h-full w-full top-0 left-0 bg-black/40 p-9 flex flex-col justify-between '>
            <h1 className=' bg-white w-12 h-12 rounded-full text-2xl font-semibold text-black flex justify-center items-center'>{props.data.id}</h1>
            <div className='flex flex-col justify-between gap-14'> 
                 <p className='text-white text-lg leading-6'>{props.data.desc}</p>
                
                 <div className='flex justify-between '>
                    <button className='bg-blue-600  py-2 px-7 rounded-full text-white'>{props.data.title}</button>
                    <button className='bg-blue-600  p-2 rounded-full text-white'><ArrowRight /></button>
                 </div>
            </div>


        </div>
  )
}

export default RightCardContent