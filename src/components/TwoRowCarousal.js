import { ChevronRight } from "lucide-react";
import React from "react";
import CarousalProductCard from "./CarousalProductCard";
import { Link } from "react-router-dom";
import ViewMoreCard from "./ViewMoreCard";

const TwoRowCarousal = ({ headLine, data, nav }) => {
  return (
    <div className="p-2 pt-2 pb-6 dark:bg-[#252525] dark:text-white">
      <div className="w-full inline-flex justify-between">
        <p className="font-montserrat font-medium text-lg">{headLine}</p>
        <Link to={`/category/${nav}`}>
          <ChevronRight />
        </Link>
      </div>
      <div className="overflow-x-auto">
        <div
          className="w-fit grid grid-rows-2 grid-flow-col gap-4 py-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
          }}
        >
          {data?.length > 19 ? (
            <>
              {data?.slice(0, 19)?.map((product) => (
                <CarousalProductCard key={product?._id} product={product} />
              ))}
              <ViewMoreCard linkTo={`/category/${data[0]?.category}`} />
            </>
          ) : (
            data?.map((product) => (
              <CarousalProductCard key={product?._id} product={product} />
            ))
          )}
          {/* {data?.map((product) => (
            <CarousalProductCard key={product?._id} product={product} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TwoRowCarousal;
