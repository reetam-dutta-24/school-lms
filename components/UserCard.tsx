import React from 'react'
//#C3EBFA: blue shade color
//#EDF9FD:   light blue shade color
//#CFCEFF : purple shade color
//#F1F0FF : light purple shade color
//#FAE27C  : yellow shade color
//#FEFCE8 : light yellow shade color

function UserCard({ type }: { type: string }) {
  return (
    <div className="h-28 w-45 rounded-2xl odd:bg-[#CFCEFF] even:bg-[#FAE27C]">
      <p className="font-semibold text-lg">{type}</p>
    </div>
  )
}

export default UserCard
