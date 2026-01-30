import React from 'react'
import { teacherslist } from '@/lib/data'
function Teacherslists() {
  return (
    <div className='border flex-1'>
      <div>
        <h1>Heading</h1>
      </div>
      <div className='flex flex-col'>
        {teacherslist.map((teacher)=>(
            <div key = {teacher.id} className='flex gap-5'>
                <h1>{teacher.name}</h1>
                <h1>{teacher.email}</h1>
                <h1>{teacher.phoneno}</h1>
                <h1>{teacher.address}</h1>
                <h1>{teacher.subject.join(', ')}</h1>
                
            </div>
        ))}
      </div>
    </div>
  )
}

export default Teacherslists
