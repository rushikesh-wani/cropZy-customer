import { ChevronRight } from "lucide-react";
import React from "react";
import CarousalProductCard from "./CarousalProductCard";
import { Link } from "react-router-dom";
import ViewMoreCard from "./ViewMoreCard";

const HomeCarousal = ({ headLine, data, nav }) => {
  return (
    <div className="p-2 dark:bg-[#252525] dark:text-white">
      <div className="w-full inline-flex justify-between">
        <p className="font-montserrat font-medium text-lg">{headLine}</p>
        <Link to={`/category/${nav}`}>
          <ChevronRight />
        </Link>
      </div>
      <div className="overflow-x-auto">
        <div
          className="w-fit grid grid-rows-1 grid-flow-col gap-4 py-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
          }}
        >
          {data?.length > 10 ? (
            <>
              {data?.slice(0, 10)?.map((pro) => (
                <CarousalProductCard
                  key={pro._id}
                  product={pro}
                  doHover={true}
                />
              ))}
              <ViewMoreCard linkTo={`/category/${data[0]?.category}`} />
            </>
          ) : (
            data?.map((pro) => (
              <CarousalProductCard key={pro._id} product={pro} doHover={true} />
            ))
          )}
          {/* {data?.map((pro) => (
            <CarousalProductCard key={pro._id} product={pro} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default HomeCarousal;
