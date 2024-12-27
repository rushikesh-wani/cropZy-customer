import React from "react";

const ItemCard = () => {
  return (
    <div className="w-32 h-fit rounded-lg">
      <div className="w-full h-24 bg-slate-300 shimmer rounded-lg"></div>
      <div className="">
        <p className="w-full h-4 rounded-lg my-1 bg-slate-300 shimmertruncate"></p>
        <p className="w-24 h-3 rounded-lg my-1 bg-slate-300 shimmer truncate"></p>
      </div>
      <div className="flex justify-between">
        <p className="w-16 h-5 rounded-lg my-1 bg-slate-300 shimmer"></p>
        <button className="px-2 w-12 bg-slate-300 shimmer rounded-md"></button>
      </div>
    </div>
  );
};

export default ItemCard;
