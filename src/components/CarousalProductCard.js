import React from "react";

const CarousalProductCard = ({ product }) => {
  return (
    <div className="w-32 h-fit rounded-lg">
      <div className="w-full h-24 bg-slate-100 rounded-lg border">
        <img
          loading="lazy"
          src={product?.img}
          alt=""
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="px-2">
        <p className="font-medium truncate">{product?.itemName}</p>
        <p className="text-xs text-gray-600 truncate">
          {product?.weight?.value} {product?.weight?.unit}
        </p>
      </div>
      <div className="px-2 flex justify-between">
        <p className="font-medium">₹{product?.price}</p>
        <button className="px-2 text-sm uppercase border border-rose-600 text-rose-600 rounded-md">
          Add
        </button>
      </div>
    </div>
  );
};

export default CarousalProductCard;
