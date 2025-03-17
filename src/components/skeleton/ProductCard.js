import React from "react";
import ItemCard from "./ItemCard";

const ProductCard = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      <div className="p-2">
        <div className="w-full inline-flex justify-between">
          <p className="w-44 h-5 rounded-lg my-1 bg-slate-300 shimmer dark:bg-gray-600"></p>
          <button className="w-6 h-6 rounded-full bg-slate-300 shimmer dark:bg-gray-600"></button>
        </div>
        <div className="grid grid-flow-row grid-cols-3 gap-2 place-items-center sm:grid-cols-5 md:grid-cols-6">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <div key={num + 2 * index + index} className="p-2">
              <div className="size-24 lg:size-28 rounded-xl bg-slate-300 shimmer dark:bg-gray-600"></div>
              <p className="h-3 my-2 bg-slate-300 shimmer rounded-lg dark:bg-gray-600"></p>
              <p className="w-3/6 h-3 my-2 bg-slate-300 shimmer rounded-lg dark:bg-gray-600"></p>
            </div>
          ))}
        </div>
      </div>
      {arr.map((num, index) => (
        <div key={num + index} className="p-2">
          <div className="w-full inline-flex justify-between">
            <p className="w-44 h-5 rounded-lg my-1 bg-slate-300 shimmer dark:bg-gray-600"></p>
            <button className="w-6 h-6 rounded-full bg-slate-300 shimmer dark:bg-gray-600"></button>
          </div>
          <div className="overflow-x-auto">
            <div className="w-fit px-2 py-4 grid grid-rows-1 grid-flow-col gap-4">
              {[1, 2, 3, 4, 5, 6].map((num, index) => (
                <ItemCard key={num * index + index + 100} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
