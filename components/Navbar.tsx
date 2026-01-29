import React from 'react';
import ColorfulAvatar from "@/components/colorfulavatars"; // make sure path is correct

import { Search, MessageCircleIcon, Megaphone } from 'lucide-react';

function Navbar() {
  const userName = "Reetam Dutta";

  return (
    <div className='flex justify-between ml-4 p-2 mt-1'>
      {/* Search Bar */}
      <div className='text-gray-500 flex items-center p-2 gap-2 border rounded-full'>
        <Search size={16} />
        <input 
          type="text" 
          placeholder='Enter search' 
          className='bg-transparentrounded-full outline-none border-none'
        />
      </div>

      {/* Right Side Icons */}
      <div className='flex items-center gap-4 mr-4'>
        <MessageCircleIcon size={18} className='text-gray-500' />
        <Megaphone size={18} className='text-gray-500 ml-4' />

        {/* User Info */}
        <div className='flex items-center gap-2 ml-4'>
          <ColorfulAvatar name={userName} size={40} /> {/* <-- Colorful avatar */}
          <div className='flex flex-col'>
            <span className='text-black font-bold text-sm'>{userName}</span>
            <span className='text-gray-600 text-xs'>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

