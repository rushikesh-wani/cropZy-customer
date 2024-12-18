import React from "react";

const ProductCard = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      <div className="p-2">
        <div className="w-full inline-flex justify-between">
          <p className="w-44 h-5 rounded-lg my-1 bg-slate-100 animate-pulse"></p>
          <button className="w-6 h-6 rounded-full bg-slate-100 animate-pulse"></button>
        </div>
        <div className="grid grid-flow-row grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <div key={num + 2 * index + index} className="p-2">
              <div className="w-full h-20 rounded-xl bg-slate-100 animate-pulse"></div>
              <p className="h-3 my-2 bg-slate-100 rounded-lg animate-pulse"></p>
              <p className="w-10 h-3 my-2 bg-slate-100 rounded-lg animate-pulse"></p>
            </div>
          ))}
        </div>
      </div>
      {arr.map((num, index) => (
        <div key={num + index} className="p-2">
          <div className="w-full inline-flex justify-between">
            <p className="w-44 h-5 rounded-lg my-1 bg-slate-100 animate-pulse"></p>
            <button className="w-6 h-6 rounded-full bg-slate-100 animate-pulse"></button>
          </div>
          <div className="overflow-x-auto">
            <div className="w-fit px-2 py-4 grid grid-rows-1 grid-flow-col gap-4">
              {[1, 2, 3, 4, 5, 6].map((num, index) => (
                <div key={num} className="w-32 h-fit rounded-lg">
                  <div className="w-full h-24 bg-slate-100 animate-pulse rounded-lg"></div>
                  <div className="">
                    <p className="w-full h-4 rounded-lg my-1 bg-slate-100 animate-pulse font-palanquin font-medium truncate"></p>
                    <p className="w-24 h-3 rounded-lg my-1 bg-slate-100 animate-pulse font-palanquin text-xs text-gray-600 truncate"></p>
                  </div>
                  <div className="flex justify-between">
                    <p className="w-16 h-5 rounded-lg my-1 bg-slate-100 animate-pulse"></p>
                    <button className="px-2 w-12 bg-slate-100 rounded-md"></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
