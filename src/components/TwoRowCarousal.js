import { ChevronRight } from "lucide-react";
import React from "react";
import CarousalProductCard from "./CarousalProductCard";

const TwoRowCarousal = ({ headLine, data }) => {
  return (
    <div className="p-2 pt-2 pb-6 dark:bg-black dark:text-white">
      <div className="w-full inline-flex justify-between">
        <p className="font-montserrat font-medium text-lg">{headLine}</p>
        <button>
          <ChevronRight />
        </button>
      </div>
      <div className="overflow-x-auto">
        <div
          className="w-fit grid grid-rows-2 grid-flow-col gap-4 py-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
          }}
        >
          {data?.map((product) => (
            <CarousalProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoRowCarousal;
