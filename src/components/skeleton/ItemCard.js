import React from "react";

const ItemCard = () => {
  return (
    <div className="w-32 h-fit rounded-lg md:w-44">
      <div className="w-full h-24 bg-slate-300 shimmer rounded-lg md:h-28 dark:bg-gray-600"></div>
      <div className="">
        <p className="w-full h-4 rounded-lg my-1 bg-slate-300 shimmer dark:bg-gray-600"></p>
        <p className="w-24 h-3 rounded-lg my-1 bg-slate-300 shimmer dark:bg-gray-600"></p>
      </div>
      <div className="flex justify-between">
        <p className="w-16 h-5 rounded-lg my-1 bg-slate-300 shimmer dark:bg-gray-600"></p>
        <button className="px-2 w-12 bg-slate-300 shimmer rounded-md dark:bg-gray-600"></button>
      </div>
    </div>
  );
};

export default ItemCard;
