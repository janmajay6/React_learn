import React from 'react'

import RightCardContent from './RightCardContent'

function Rightcard(props) {
    
    
  return (
    <div className='h-full bg-amber-300 w-76 overflow-hidden relative shrink-0  rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
       <RightCardContent data={props}/>

    </div>
  )
}

export default Rightcard