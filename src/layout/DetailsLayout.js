import { ChevronLeft } from "lucide-react";
import React from "react";
import { Outlet, useMatches, useNavigate } from "react-router-dom";

const DetailsLayout = () => {
  const navigate = useNavigate();
  const matches = useMatches();
  const nav = matches.find((match) => match.handle?.nav)?.handle?.nav || "";
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="md:mx-20 lg:mx-52">
        <div className="relative">
          <div className="z-50 font-montserrat fixed top-0 left-0 right-0 flex items-center gap-x-2 p-2 bg-white shadow-md md:mx-20 lg:mx-52 dark:bg-[#121212] dark:text-white">
            <button onClick={goBack} className="p-1 rounded-full">
              <ChevronLeft />
            </button>

            <p className="text-lg font-medium">{nav}</p>
          </div>
          <div className="p-3 pt-16 pb-20 bg-[#f0f4f9] min-h-screen dark:bg-[#212428]">
            <div className="mx-auto flex flex-col gap-3 md:max-w-3xl">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsLayout;
