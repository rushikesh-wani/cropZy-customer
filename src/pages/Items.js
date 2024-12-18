import React from "react";
import { products } from "../utils/Products";
import ProductCard from "../components/ProductCard";
import CarousalProductCard from "../components/CarousalProductCard";

const Items = () => {
  return (
    <div className="bg-[#f0f4f9]">
      <div className="p-4 grid grid-flow-row grid-cols-2 gap-3 items-center place-items-center md:grid-cols-5">
        {products?.map((item) => (
          <div className="px-3 py-3 bg-white rounded-lg">
            <CarousalProductCard key={item._id} product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
