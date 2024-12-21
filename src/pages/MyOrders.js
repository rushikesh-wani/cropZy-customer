import { Minus, Plus, X } from "lucide-react";
import React from "react";

const MyOrders = () => {
  return (
    <>
      <div className="font-palanquin bg-white p-4 rounded-xl">
        <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
          <p className="font-medium text-nowrap">Order (1)</p>
          <hr className="w-full text-gray-900" />
        </div>
        <div className="mt-4 flex flex-col">
          {[...Array(3)].map((_, index) => (
            <>
              <div key={index} className="flex gap-2 py-2 hover:bg-slate-50">
                <div className="w-[25%] h-16 bg-slate-200 rounded-md">
                  <img
                    src="https://res.cloudinary.com/rushikeshwani/image/upload/v1734159025/cropZy/products/ghxvsynuozopqplvouyp.webp"
                    alt="item-img"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="w-[75%]">
                  <p className="font-bold truncate">Tomato</p>
                  <div className="text-sm font-bold truncate">
                    ₹ 75{" "}
                    <span className="text-xs font-medium text-slate-700">
                      / 1 kg
                    </span>
                  </div>
                  <div className="w-full inline-flex items-center justify-between">
                    <span className="">
                      Total : <span className="font-medium">5</span>
                    </span>
                    {/* <div className="min-w-16 max-w-20 text-sm flex justify-between items-center bg-rose-50 border border-rose-300 rounded-md text-rose-500">
                      <button
                        className="p-1"
                        onClick={() => {
                          console.log("Add btn-clicked");
                        }}
                      >
                        <Plus className="size-4" />
                      </button>
                      <span>1</span>
                      <button
                        className="p-1"
                        onClick={(e) => {
                          console.log("Minus btn-clicked");
                        }}
                      >
                        <Minus className="size-4" />
                      </button>
                    </div> */}
                    <button className="inline-flex gap-1 items-center px-2 py-1 bg-gray-100 text-gray-900 rounded-md">
                      <X />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
