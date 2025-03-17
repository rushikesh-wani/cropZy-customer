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
      <div className="max-w-full">
        <div className="relative">
          <div className="z-50 sticky top-0 bg-white shadow-md dark:bg-darkCard dark:text-white">
            <div className="font-montserrat flex items-center gap-x-2 p-2 mx-auto md:max-w-4xl">
              <button onClick={goBack} className="p-1 rounded-full">
                <ChevronLeft />
              </button>
              <p className="text-lg font-medium">{nav}</p>
            </div>
          </div>
          <div className="p-3 pb-10 bg-[#f0f4f9] min-h-screen dark:bg-[#252525]">
            <div className="mx-auto flex flex-col gap-3 md:max-w-4xl">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsLayout;
