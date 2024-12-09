import { ChevronRight } from "lucide-react";
import React from "react";
import { Leaf, Plus } from "lucide-react";
import { Cereals, Dairy, Fruits, Vegetables } from "../assets";
const Home = () => {
  const productData = {
    _id: "674599bf5ec47a891494a3eb",
    itemName: "Apple",
    stockQty: 90,
    weight: {
      value: 1,
      unit: "kg",
    },
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3qX_zDSAKIXTauZyxqnNAX3P7Bzk3ydu2Ksag7yGQ8sq9tSVpY4hxSxiZNDoEf6pjj4&usqp=CAU",
    price: 120,
    category: "Recently Added",
    description: "Fresh apple direct from farm. Produced by orgaic farming.",
    farmerId: "6744c75250486827b4e06d55",

    addedAt: {
      $date: "2024-11-26T09:49:51.403Z",
    },
    createdAt: {
      $date: "2024-11-26T09:49:51.420Z",
    },
    updatedAt: {
      $date: "2024-12-07T16:50:29.304Z",
    },
    __v: 0,
  };
  return (
    <>
      {/* {Category} */}
      <div className="p-2">
        <p className="font-medium text-lg">Find by Category</p>
        <div className="grid grid-flow-row grid-cols-3 gap-2 sm:grid-cols-8">
          <div className="p-2 bg-slate-100 rounded-md">
            <div className="w-full h-20 rounded-xl">
              <img
                src={Fruits}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <p className="text-center text-sm font-medium">Fresh Fruits</p>
          </div>

          <div className="p-2 bg-slate-100 rounded-md">
            <div className="w-full h-20 rounded-xl">
              <img
                src={Vegetables}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <p className="text-center text-sm font-medium">Vegetables</p>
          </div>
          <div className="p-2 bg-slate-100 rounded-md">
            <div className="w-full h-20 rounded-xl">
              <img
                src={Cereals}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <p className="text-center text-sm font-medium">Cereals</p>
          </div>
          <div className="p-2 bg-slate-100 rounded-md">
            <div className="w-full h-20 rounded-xl">
              <img
                src={Dairy}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <p className="text-center text-sm font-medium">Dairy Product</p>
          </div>
        </div>
      </div>
      {/* {Fresh Fruits} */}
      <div className="p-2 pt-2 pb-6 bg-gradient-to-b from-rose-50 via-rose-100 to-rose-300">
        <div className="w-full inline-flex justify-between">
          <p className="text-rose-600 font-medium text-lg">Fresh Fruits</p>
          <button>
            <ChevronRight />
          </button>
        </div>
        <div className="flex gap-x-2 overflow-y-scroll no-scrollbar">
          <div className="w-60 shrink-0 p-1 bg-white rounded-md shadow-xl">
            <div
              id="product-img-container"
              className="w-full h-32 rounded-md border border-white bg-gray-200"
            >
              <img
                loading="lazy"
                className="w-full h-full object-cover rounded-md"
                src={productData.img}
                alt="product-img"
              />
            </div>
            <p className="text-lg truncate">{productData.itemName}</p>
            <p className="text-xs h-9 line-clamp-2">
              {productData.description}
            </p>
            <div className="flex flex-col gap-y-1 text-sm">
              <div className="inline-flex items-center gap-x-2">
                <span className="p-1 bg-yellow-100 rounded-full">
                  <Leaf className="size-4" />
                </span>
                <span className="line-clamp-1">Farm Name</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-medium">
              <p className="text-xl truncate">
                <span className="font-bold">₹{productData.price}/</span>
                <span className="text-xs">
                  {productData.weight?.value} {productData.weight.unit}
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
          <div className="w-60 shrink-0 p-1 bg-white rounded-md shadow-xl">
            <div
              id="product-img-container"
              className="w-full h-32 rounded-md border border-white bg-gray-200"
            >
              <img
                loading="lazy"
                className="w-full h-full object-cover rounded-md"
                src={productData.img}
                alt="product-img"
              />
            </div>
            <p className="text-lg truncate">{productData.itemName}</p>
            <p className="text-xs h-9 line-clamp-2">
              {productData.description}
            </p>
            <div className="flex flex-col gap-y-1 text-sm">
              <div className="inline-flex items-center gap-x-2">
                <span className="p-1 bg-yellow-100 rounded-full">
                  <Leaf className="size-4" />
                </span>
                <span className="line-clamp-1">Farm Name</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-medium">
              <p className="text-xl truncate">
                <span className="font-bold">₹{productData.price}/</span>
                <span className="text-xs">
                  {productData.weight?.value} {productData.weight.unit}
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
          <div className="w-60 shrink-0 p-1 bg-white rounded-md shadow-xl">
            <div
              id="product-img-container"
              className="w-full h-32 rounded-md border border-white bg-gray-200"
            >
              <img
                loading="lazy"
                className="w-full h-full object-cover rounded-md"
                src={productData.img}
                alt="product-img"
              />
            </div>
            <p className="text-lg truncate">{productData.itemName}</p>
            <p className="text-xs h-9 line-clamp-2">
              {productData.description}
            </p>
            <div className="flex flex-col gap-y-1 text-sm">
              <div className="inline-flex items-center gap-x-2">
                <span className="p-1 bg-yellow-100 rounded-full">
                  <Leaf className="size-4" />
                </span>
                <span className="line-clamp-1">Farm Name</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-medium">
              <p className="text-xl truncate">
                <span className="font-bold">₹{productData.price}/</span>
                <span className="text-xs">
                  {productData.weight?.value} {productData.weight.unit}
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
        </div>
      </div>
      {/* {Best Seller} */}
      <div className="p-2">
        <div className="w-full inline-flex justify-between">
          <p className="font-medium text-lg">Best Seller</p>
          <button>
            <ChevronRight />
          </button>
        </div>
        <div className="grid place-items-center grid-flow-row grid-cols-3 gap-2">
          <div className="p-2">
            <div className="w-20 h-20 bg-gray-400 rounded-full">
              <img
                src=""
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-center text-sm font-medium">Farm Name</p>
          </div>
          <div className="p-2">
            <div className="w-20 h-20 bg-gray-400 rounded-full">
              <img
                src=""
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-center text-sm font-medium">Farm Name</p>
          </div>
          <div className="p-2">
            <div className="w-20 h-20 bg-gray-400 rounded-full">
              <img
                src=""
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-center text-sm font-medium">Farm Name</p>
          </div>
          <div className="p-2">
            <div className="w-20 h-20 bg-gray-400 rounded-full">
              <img
                src=""
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-center text-sm font-medium">Farm Name</p>
          </div>
          <div className="p-2">
            <div className="w-20 h-20 bg-gray-400 rounded-full">
              <img
                src=""
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-center text-sm font-medium">Farm Name</p>
          </div>
        </div>
      </div>
      {/* {Shop by Farm} */}
      <div className="p-2 py-5 bg-gradient-to-b from-orange-50 to-orange-200">
        <div className="w-full inline-flex justify-between">
          <p className="font-medium text-orange-700 text-lg">
            Shop by Farm Name
          </p>
          <button>
            <ChevronRight />
          </button>
        </div>
        <div className="flex gap-x-4 overflow-y-scroll">
          <div className="p-2">
            <div className="w-20 h-20 bg-gray-400 rounded-full">
              <img
                src=""
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-center text-sm font-medium">Farm Name</p>
          </div>
          <div className="p-2">
            <div className="w-20 h-20 bg-gray-400 rounded-full">
              <img
                src=""
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-center text-sm font-medium">Farm Name</p>
          </div>
          <div className="p-2">
            <div className="w-20 h-20 bg-gray-400 rounded-full">
              <img
                src=""
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-center text-sm font-medium">Farm Name</p>
          </div>
          <div className="p-2">
            <div className="w-20 h-20 bg-gray-400 rounded-full">
              <img
                src=""
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-center text-sm font-medium">Farm Name</p>
          </div>
          <div className="p-2">
            <div className="w-20 h-20 bg-gray-400 rounded-full">
              <img
                src=""
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-center text-sm font-medium">Farm Name</p>
          </div>
        </div>
      </div>
      {/* {Product Carousal} */}
      <div className="p-2 py-5">
        <div className="w-full inline-flex justify-between">
          <p className="font-medium text-lg">Products</p>
          <button>
            <ChevronRight />
          </button>
        </div>
        <div className="py-5 flex gap-x-2 overflow-y-scroll">
          <div className="w-60 shrink-0 p-1 rounded-md shadow-xl">
            <div
              id="product-img-container"
              className="w-full h-32 rounded-md border border-white bg-gray-200"
            >
              <img
                loading="lazy"
                className="w-full h-full object-cover rounded-md"
                src={productData.img}
                alt="product-img"
              />
            </div>
            <p className="text-lg truncate">{productData.itemName}</p>
            <p className="text-xs h-9 line-clamp-2">
              {productData.description}
            </p>
            <div className="flex flex-col gap-y-1 text-sm">
              <div className="inline-flex items-center gap-x-2">
                <span className="p-1 bg-yellow-100 rounded-full">
                  <Leaf className="size-4" />
                </span>
                <span className="line-clamp-1">Farm Name</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-medium">
              <p className="text-xl truncate">
                <span className="font-bold">₹{productData.price}/</span>
                <span className="text-xs">
                  {productData.weight?.value} {productData.weight.unit}
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
          <div className="w-60 shrink-0 p-1 rounded-md shadow-xl">
            <div
              id="product-img-container"
              className="w-full h-32 rounded-md border border-white bg-gray-200"
            >
              <img
                loading="lazy"
                className="w-full h-full object-cover rounded-md"
                src={productData.img}
                alt="product-img"
              />
            </div>
            <p className="text-lg truncate">{productData.itemName}</p>
            <p className="text-xs h-9 line-clamp-2">
              {productData.description}
            </p>
            <div className="flex flex-col gap-y-1 text-sm">
              <div className="inline-flex items-center gap-x-2">
                <span className="p-1 bg-yellow-100 rounded-full">
                  <Leaf className="size-4" />
                </span>
                <span className="line-clamp-1">Farm Name</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-medium">
              <p className="text-xl truncate">
                <span className="font-bold">₹{productData.price}/</span>
                <span className="text-xs">
                  {productData.weight?.value} {productData.weight.unit}
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
          <div className="w-60 shrink-0 p-1 rounded-md shadow-xl">
            <div
              id="product-img-container"
              className="w-full h-32 rounded-md border border-white bg-gray-200"
            >
              <img
                loading="lazy"
                className="w-full h-full object-cover rounded-md"
                src={productData.img}
                alt="product-img"
              />
            </div>
            <p className="text-lg truncate">{productData.itemName}</p>
            <p className="text-xs h-9 line-clamp-2">
              {productData.description}
            </p>
            <div className="flex flex-col gap-y-1 text-sm">
              <div className="inline-flex items-center gap-x-2">
                <span className="p-1 bg-yellow-100 rounded-full">
                  <Leaf className="size-4" />
                </span>
                <span className="line-clamp-1">Farm Name</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-medium">
              <p className="text-xl truncate">
                <span className="font-bold">₹{productData.price}/</span>
                <span className="text-xs">
                  {productData.weight?.value} {productData.weight.unit}
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
        </div>
      </div>
    </>
  );
};

export default Home;
