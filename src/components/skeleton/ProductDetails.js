import { ChevronLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

const ProductDetails = () => {
  return (
    <>
      <div className="z-50 font-montserrat sticky top-0 w-full inline-flex items-center gap-x-2 p-2 bg-white shadow-md">
        <Link to={"/"} className="">
          <div className="">
            <ChevronLeft />
          </div>
        </Link>
        <p className="w-36 h-6 rounded-lg bg-slate-100 animate-pulse"></p>
      </div>
      <div className="p-3 pb-20 bg-[#f0f4f9]">
        <div className="flex flex-col gap-3">
          <div className="relative w-full h-56 rounded-xl bg-slate-200 animate-pulse"></div>
          <div className="bg-white p-4 rounded-xl">
            <p className="w-[70%] h-4 my-1 rounded-lg bg-slate-100 animate-pulse"></p>
            <div className="w-[55%] h-3 rounded-lg bg-slate-100 animate-pulse"></div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="inline-flex items-center gap-x-2 w-full">
              <p className="w-[100%] h-4 rounded-lg bg-slate-100 animate-pulse"></p>
              <hr className="w-full text-gray-900" />
            </div>
            <p className="w-[100%] h-3 my-1 rounded-lg bg-slate-100 animate-pulse"></p>
            <p className="w-[75%] h-3 my-1 rounded-lg bg-slate-100 animate-pulse"></p>
            <p className="w-[50%] h-3 my-1 rounded-lg bg-slate-100 animate-pulse"></p>
          </div>

          <div className="bg-white p-4 rounded-xl">
            <div className="inline-flex items-center gap-x-2 w-full">
              <p className="w-[100%] h-4 rounded-lg bg-slate-100 animate-pulse"></p>
              <hr className="w-full text-gray-900" />
            </div>
            <div className="my-2 flex flex-col gap-y-4 text-sm">
              <div className="flex gap-3">
                <p className="w-[30%] h-3 my-1 rounded-lg bg-slate-100 animate-pulse"></p>
                <p className="w-[65%] h-3 my-1 rounded-lg bg-slate-100 animate-pulse"></p>
              </div>
              <div className="flex gap-3">
                <p className="w-[30%] h-3 my-1 rounded-lg bg-slate-100 animate-pulse"></p>
                <p className="w-[60%] h-3 my-1 rounded-lg bg-slate-100 animate-pulse"></p>
              </div>
              <div className="flex gap-3">
                <p className="w-[30%] h-3 my-1 rounded-lg bg-slate-100 animate-pulse"></p>
                <p className="w-[55%] h-3 my-1 rounded-lg bg-slate-100 animate-pulse"></p>
              </div>
              <div className="flex gap-3">
                <p className="w-[30%] h-3 my-1 rounded-lg bg-slate-100 animate-pulse"></p>
                <p className="w-[40%] h-3 my-1 rounded-lg bg-slate-100 animate-pulse"></p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <p className="w-[60%] mb-2 h-4 rounded-lg bg-slate-100 animate-pulse"></p>
            <div className="overflow-x-auto">
              <div className="w-fit grid grid-rows-1 grid-flow-col gap-4">
                {[...Array(4)].map((_, index) => (
                  <ItemCard key={index * index + 200 + index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
