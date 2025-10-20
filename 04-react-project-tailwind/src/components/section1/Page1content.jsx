import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

function Page1content() {
  return (
    <div className='flex justify-between px-18 h-[90vh] pt-6  items-center pb-16  gap-10'>
        <Leftcontent/>
        <Rightcontent/>
    </div>
  )
}

export default Page1content