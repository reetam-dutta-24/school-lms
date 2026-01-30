import React from 'react'
import EventCalendar from '@/components/EventCalendar'
import Announcements from '@/components/Announcements'
import Schedule from '@/components/schedule'
function Teacher() {
  return (

    <div className="flex w-full h-full border ">
      {/* Left side*/ }
      <div className='flex flex-col  w-[66%] p-3 mt-1  '>
        <div className='flex  justify-between'>
          <h1 className='font-bold text-lg'>Class Schedule (12B)</h1>
        </div>
        <div className='h-full'>
          <Schedule/>
        </div>
      </div>
      {/* Right side*/ }
      <div className="w-[33%]  mt-3 flex flex-col gap-5 ">
        
        <Announcements/>
      </div>
      
    </div>

  )
}

export default Teacher

