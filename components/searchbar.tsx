import React from "react";
import { Search } from "lucide-react";
function Searchbar() {
  return (
    <div>
      <div className="text-gray-500 flex items-center p-2 gap-2 border rounded-full">
        <Search size={16} />
        <input
          type="text"
          placeholder="Enter search"
          className="bg-transparent rounded-full outline-none border-none w-40 h-4"
        />
      </div>
    </div>
  );
}

export default Searchbar;
