import React from "react";

const CancelledOrder = () => {
  return (
    <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-darkCard dark:text-white">
      <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
        <p className="font-medium text-nowrap">Cancelled Order</p>
        <hr className="w-full text-gray-900" />
      </div>
      <p className="my-4 text-sm text-gray-600 text-center">
        Currently,{" "}
        <span className="text-rose-500">Page is under construction!</span>
      </p>
    </div>
  );
};

export default CancelledOrder;
