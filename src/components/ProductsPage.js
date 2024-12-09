import { DollarSign, Filter, SortDesc, Sprout } from "lucide-react";
import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../utils/Products";

const ProductsPage = () => {
  return (
    <div id="outlet-layout" className="">
      <div className="sticky top-14 z-10 bg-white p-2 border shadow">
        <div className="flex gap-x-4 overflow-y-scroll text-sm">
          <div className="px-3 py-1 rounded-xl bg-slate-100 inline-flex items-center justify-center gap-x-1">
            <Filter className="size-5" />
            Filter
          </div>
          <div className="px-3 py-1 rounded-xl bg-slate-100 inline-flex items-center justify-center gap-x-1">
            <SortDesc className="size-5" />
            Sort
          </div>
          <div className="px-3 py-1 rounded-xl bg-slate-100 inline-flex items-center justify-center gap-x-1">
            <Sprout className="size-5" />
            Vegetables
          </div>
          <div className="text-nowrap px-3 py-1 rounded-xl bg-slate-100 inline-flex items-center justify-center gap-x-1">
            <DollarSign className="size-5" />
            Price 100-200
          </div>
        </div>
      </div>
      <div className="p-2 grid grid-flow-row grid-cols-2 gap-2 sm:grid-cols-5 sm:mx-44">
        {products?.map((item) => (
          <ProductCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
