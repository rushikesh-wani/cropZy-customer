import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CarousalProductCard from "../components/CarousalProductCard";
import { getItemDetails } from "../services/HomeServices";
import ProductDetails from "../components/skeleton/ProductDetails";
import ItemCard from "../components/skeleton/ItemCard";
import { addItemToCart } from "../utils/Cart";
const Product = () => {
  const { itemId } = useParams();
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    getItemDetails(setProductData, itemId, setIsLoading, setIsError, setError);
  }, []);
  if (isLoading) return <ProductDetails />;
  if (isError) return <p>Error: {error || "Something went wrong!"}</p>;

  return (
    <div className="md:mx-20 lg:mx-52">
      <div className="z-50 font-montserrat sticky top-0 flex items-center gap-x-2 p-2 bg-white shadow-md">
        <Link to={"/"} className="">
          <div className="p-1 rounded-full bg-white">
            <ChevronLeft />
          </div>
        </Link>
        <p className="text-lg font-medium">{productData?.itemName}</p>
      </div>
      <div className="p-3 pb-20 bg-[#f0f4f9]">
        <div className="mx-auto flex flex-col gap-3 md:max-w-3xl">
          <div className="relative w-full h-56 rounded-xl border bg-slate-200">
            <img
              loading="lazy"
              className="w-full h-full object-cover rounded-xl md:rounded-none md:mx-auto md:max-w-xs"
              src={productData?.img}
              alt={productData?.itemName}
            />
          </div>
          <div className="bg-white p-4 rounded-xl">
            <p className="font-medium truncate">{productData?.itemName}</p>
            <div className="text-xl font-bold truncate">
              {`₹ ${productData?.price}`}
              <span className="text-sm font-medium text-slate-700">
                {` / ${productData?.weight?.value} ${productData?.weight?.unit}`}
              </span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="inline-flex items-center gap-x-2 w-full">
              <p className="font-medium">Description</p>
              <hr className="w-full text-gray-900" />
            </div>
            <p className="text-xs text-gray-600">{productData?.description}</p>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="inline-flex items-center gap-x-2 w-full">
              <p className="font-medium">Information</p>
              <hr className="w-full text-gray-900" />
            </div>
            <div className="my-2 flex flex-col gap-y-4 text-sm">
              <div className="flex gap-3">
                <h2 className="w-[30%] font-medium">Farm Name</h2>
                <p className="w-[70%] text-gray-600">
                  {productData?.farmDetails?.farmName}
                </p>
              </div>
              <div className="flex gap-3">
                <h2 className="w-[30%] font-medium">Farmer Name</h2>
                <p className="w-[70%] text-gray-600">{`${productData?.farmerId?.firstName} ${productData?.farmerId?.lastName}`}</p>
              </div>
              <div className="flex gap-3">
                <h2 className="w-[30%] font-medium">Contact</h2>
                <p className="w-[70%] text-gray-600">
                  {productData?.farmerId?.phone}
                </p>
              </div>
              <div className="flex gap-3">
                <h2 className="w-[30%] font-medium">Farm Location</h2>
                <p className="w-[70%] text-gray-600">
                  {productData?.farmDetails?.farmLocation}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <p className="font-medium mb-2 truncate">Similar products</p>
            <div className="overflow-x-auto">
              {" "}
              <div className="w-fit grid grid-rows-1 grid-flow-col gap-4">
                {[...Array(5)].map((_, _ind) => (
                  <ItemCard key={_ind} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 left-0 text-center px-5 py-2 bg-white md:px-44 md:mx-20 lg:mx-52">
        <button
          onClick={() => {
            addItemToCart(productData?._id);
          }}
          className="w-full uppercase font-medium py-2 bg-rose-600 text-white rounded-lg"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Product;
