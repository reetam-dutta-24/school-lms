"use client"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { scheduleEvents } from '@/lib/data'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
const localizer = momentLocalizer(moment)

const Schedule = () => (
  <div className='h-full p-2'>
    <Calendar
      localizer={localizer}
      events={scheduleEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week","day"]}
      view='work_week'
      min={new Date(2026,0,0,7,0,0)}
      max={new Date(2026,0,0,17,0,0)}
      style={{ height: "700px" }}
      
      
        
    />
  </div>
)
export default Schedule;