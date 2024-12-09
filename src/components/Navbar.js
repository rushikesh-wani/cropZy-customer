import { ChevronDown, Search, UserCircle } from "lucide-react";
import React from "react";

const Navbar = () => {
  const navColor = "#b6e5c7";
  return (
    <>
      <div className="relative p-2 bg-[#fff4e9]">
        <div className="px-2 flex justify-between items-center">
          <p className="text-xl font-bold">cropZy</p>
          <div>
            <UserCircle className="size-7" />
          </div>
        </div>
        <div className="px-2 flex gap-x-1 items-center text-slate-700">
          <p className="text-sm">Jalgaon, Maharashtra</p>
          <ChevronDown className="size-4" />
        </div>
      </div>
      <div className="z-50 sticky top-0 p-2 bg-[#fff4e9] text-gray-600">
        <Search className="size-5 absolute left-4 top-5" />
        <div className="p-2 pl-8 bg-white border border-[#e5e7eb] rounded-lg">
          Search for "Aloo"
        </div>
      </div>
    </>
  );
};

export default Navbar;
