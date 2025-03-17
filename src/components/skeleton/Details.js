import React from "react";
import ItemCard from "./ItemCard";

const Details = () => {
  return (
    <div className="">
      <div className="bg-[#f0f4f9]">
        <div className="flex flex-col gap-3 mx-auto md:max-w-3xl">
          <div className="relative w-full h-56 rounded-xl bg-slate-300 shimmer"></div>
          <div className="bg-white p-4 rounded-xl">
            <p className="w-[70%] h-4 my-1 rounded-lg bg-slate-300 shimmer"></p>
            <div className="w-[55%] h-3 rounded-lg bg-slate-300 shimmer"></div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="inline-flex items-center gap-x-2 w-full">
              <p className="w-[100%] h-4 rounded-lg bg-slate-300 shimmer"></p>
              <hr className="w-full text-gray-900" />
            </div>
            <p className="w-[100%] h-3 my-1 rounded-lg bg-slate-300 shimmer"></p>
            <p className="w-[75%] h-3 my-1 rounded-lg bg-slate-300 shimmer"></p>
            <p className="w-[50%] h-3 my-1 rounded-lg bg-slate-300 shimmer"></p>
          </div>

          <div className="bg-white p-4 rounded-xl">
            <div className="inline-flex items-center gap-x-2 w-full">
              <p className="w-[100%] h-4 rounded-lg bg-slate-300 shimmer"></p>
              <hr className="w-full text-gray-900" />
            </div>
            <div className="my-2 flex flex-col gap-y-4 text-sm">
              <div className="flex gap-3">
                <p className="w-[30%] h-3 my-1 rounded-lg bg-slate-300 shimmer"></p>
                <p className="w-[65%] h-3 my-1 rounded-lg bg-slate-300 shimmer"></p>
              </div>
              <div className="flex gap-3">
                <p className="w-[30%] h-3 my-1 rounded-lg bg-slate-300 shimmer"></p>
                <p className="w-[60%] h-3 my-1 rounded-lg bg-slate-300 shimmer"></p>
              </div>
              <div className="flex gap-3">
                <p className="w-[30%] h-3 my-1 rounded-lg bg-slate-300 shimmer"></p>
                <p className="w-[55%] h-3 my-1 rounded-lg bg-slate-300 shimmer"></p>
              </div>
              <div className="flex gap-3">
                <p className="w-[30%] h-3 my-1 rounded-lg bg-slate-300 shimmer"></p>
                <p className="w-[40%] h-3 my-1 rounded-lg bg-slate-300 shimmer"></p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <p className="w-[60%] mb-2 h-4 rounded-lg bg-slate-300 shimmer"></p>
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
    </div>
  );
};

export default Details;
