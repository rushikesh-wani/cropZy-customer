import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function ViewMoreCard({ linkTo }) {
  return (
    <div className="w-32 md:w-44 p-2 lg:p-5 bg-gradient-to-tl from-violet-600 via-violet-500 to-violet-400 rounded-xl shadow-lg backdrop-blur-lg border border-white/20">
      <div className="h-full text-center flex flex-col items-center justify-center">
        <p className="text-xl lg:text-2xl font-semibold text-white drop-shadow-md">
          View More
        </p>
        <p className="text-sm text-white/90 mt-1">
          Explore more amazing items!
        </p>

        <Link to={linkTo} className="mt-4">
          <div className="p-2 lg:p-3 bg-white/90 rounded-full shadow-md hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:bg-white">
            <ArrowRight className="size-7 text-violet-600" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ViewMoreCard;
