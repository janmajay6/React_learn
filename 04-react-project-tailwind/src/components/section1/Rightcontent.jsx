import React from 'react'
import Rightcard from './Rightcard'
import{data} from '../../data.js'

function Rightcontent() {
  return (
    <div className='h-full  w-2/3 p-6 rounded-3xl flex gap-3 flex-nowrap overflow-x-auto '
    >
        {data.map((item)=>(
          <Rightcard key={item.id} id={item.id} img={item.img} title={item.title} desc={item.desc}  />
        ))}
        
    </div>
  )
}

export default Rightcontent