import { ChevronLeft } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const DetailsLayout = ({ children, nav }) => {
  return (
    <div className="md:mx-20 lg:mx-52">
      <div className="">
        <div className="z-50 font-montserrat sticky top-0 flex items-center gap-x-2 p-2 bg-white shadow-md">
          <Link to={"/"} className="">
            <div className="p-1 rounded-full bg-white">
              <ChevronLeft />
            </div>
          </Link>
          <p className="text-lg font-medium">{nav}</p>
        </div>
        <div className="p-3 pb-20 bg-[#f0f4f9] min-h-screen">
          <div className="mx-auto flex flex-col gap-3 md:max-w-3xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsLayout;