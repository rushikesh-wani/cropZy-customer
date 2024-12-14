import {
  ChevronLeft,
  DollarSign,
  Filter,
  Link,
  SortDesc,
  Sprout,
} from "lucide-react";
import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../utils/Products";
import { useNavigate, useParams } from "react-router-dom";

const ProductsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div id="outlet-layout" className="">
      <div className="inline-flex items-center gap-x-2">
        <button onClick={goBack}>
          <ChevronLeft />
        </button>
        <p className="text-lg font-medium ">{category}</p>
      </div>

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
      <div className="p-2 grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-4">
        {products?.map((item) => (
          <ProductCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
