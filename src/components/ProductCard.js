import { Crop, Leaf, Plus, Star, User } from "lucide-react";
import React from "react";

const ProductCard = ({ data }) => {
  const {
    itemName,
    farmerId,
    stockQty,
    category,
    price,
    weight,
    description,
    img,
  } = data;
  return (
    <div className="relative p-1 border border-gray-400 rounded-md shadow-sm">
      <div className="absolute top-2 right-2 w-fit p-2 rounded-full backdrop-filter backdrop-blur-sm bg-slate-300/50">
        <Star className="size-4" />
      </div>
      <div
        id="product-img-container"
        className="w-full h-24 rounded-md border border-white bg-gray-200"
      >
        <img
          loading="lazy"
          className="w-full h-full object-cover rounded-md"
          src={img}
          alt="product-img"
        />
      </div>
      <p className="text-lg truncate">{itemName}</p>
      <p className="text-xs h-9 line-clamp-2">{description}</p>
      <div className="flex flex-col gap-y-1 text-sm">
        <div className="inline-flex items-center gap-x-2">
          <span className="p-1 bg-green-100 rounded-full">
            <User className="size-4" />
          </span>
          <span className="line-clamp-1">Hellos ss sassa jsmsa sjjj</span>
        </div>
        <div className="inline-flex items-center gap-x-2">
          <span className="p-1 bg-yellow-100 rounded-full">
            <Leaf className="size-4" />
          </span>
          <span className="line-clamp-1">Farm Name</span>
        </div>
        <div className="inline-flex items-center gap-x-2">
          <span className="p-1 bg-rose-100 rounded-full">
            <Star className="size-4" />
          </span>
          <span className="line-clamp-1">
            {category === "Recently Added" ? "--" : category}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between font-medium">
        <p className="text-xl truncate">
          <span className="font-bold">₹{price}/</span>
          <span className="text-xs">
            {weight?.value} {weight.unit}
          </span>
        </p>
        <div className="text-sm">
          <button className="inline-flex items-center px-2 py-1 border border-green-600 text-green-600 uppercase rounded-lg">
            <Plus />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
