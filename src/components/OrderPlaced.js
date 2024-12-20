import {
  ArrowRight,
  ArrowRightCircle,
  CheckCircle,
  Sparkle,
  Sparkles,
} from "lucide-react";
import React from "react";

const OrderPlaced = () => {
  return (
    <div className="relative font-palanquin bg-green-600 text-white p-4 rounded-xl">
      <Sparkles className="size-8 fill-white absolute top-[5%] left-[20%]" />
      <Sparkle className="size-5 fill-white absolute top-[25%] right-[16%]" />
      <Sparkle className="absolute top-[40%] left-[5%]" />
      <div className="mx-12 text-center">
        <CheckCircle className="size-16 mx-auto " />
        <p className="text-xl font-montserrat font-medium">
          Order Placed Successfully
        </p>

        <div className="my-5 p-2 bg-green-700/50 rounded-lg border-2 border-dashed font-montserrat">
          <p className="font-medium">Total</p>
          <p className="text-3xl font-bold">₹ 165</p>
        </div>
        <div className="my-2 leading-tight">
          <p>#5dgtt3g337dys73</p>
          <p className="text-gray-200">@username_id</p>
        </div>
      </div>
      <div className="w-full my-2 text-lg font-medium inline-flex justify-center items-center gap-2 leading-tight">
        <p className="max-w-[45%]  truncate">Customer Name</p>
        <ArrowRightCircle className="max-w-[10%]" />
        <p className="max-w-[45%]  truncate">Farmer Name</p>
      </div>

      <button className="mt-5 mx-auto flex gap-2 items-center justify-center py-1 px-4 bg-white text-green-600 rounded-md font-montserrat font-medium shadow-md">
        View My Orders <ArrowRight />
      </button>
    </div>
  );
};

export default OrderPlaced;
