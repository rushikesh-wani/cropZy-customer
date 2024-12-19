import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, Star } from "lucide-react";
import Accordion from "../components/Accordion";
import { getFarmerData } from "../services/HomeServices";
import ProductDetails from "../components/skeleton/ProductDetails";

const Farmer = () => {
  const { id } = useParams();
  const [farmerData, setFarmerData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    getFarmerData(
      id,
      setFarmerData,
      setCategoryData,
      setIsLoading,
      setIsError,
      setError
    );
  }, [id]);
  if (isLoading) return <ProductDetails />;
  if (isError) return <p>Error: {error || "Something went wrong!"}</p>;
  return (
    <>
      <div className="z-50 font-montserrat sticky top-0 flex items-center gap-x-2 p-2 bg-white shadow-md md:mx-20 lg:mx-52">
        <Link to={"/"} className="">
          <div className="p-1 rounded-full bg-white">
            <ChevronLeft />
          </div>
        </Link>
        <p className="text-lg font-medium">{farmerData?.farmName}</p>
      </div>

      <div className="p-3 pb-20 bg-[#f0f4f9] md:mx-20 lg:mx-52">
        <div className="flex flex-col gap-3 md:mx-auto md:max-w-3xl">
          <div className="mx-auto w-28 h-28 rounded-full bg-slate-200">
            <img
              loading="lazy"
              className="w-full h-full object-cover rounded-full"
              src={farmerData?.userId?.profileImg}
              alt=""
            />
          </div>
          <div className="bg-white font-palanquin p-4 rounded-xl">
            <p className="text-xl font-montserrat font-bold truncate">
              {`${farmerData?.userId?.firstName} ${farmerData?.userId?.lastName}`}
            </p>
            <div className="text-sm font-medium text-slate-700 truncate">
              <span className="">{farmerData?.farmLocation}</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="inline-flex items-center gap-x-2 w-full">
              <p className="font-bold font-montserrat">Information</p>
              <hr className="w-full text-gray-900" />
            </div>
            <div className="my-2 font-palanquin flex flex-col gap-y-4 text-sm">
              <div className="flex gap-3">
                <h2 className="w-[30%] font-medium">Farm Name</h2>
                <p className="w-[70%] text-gray-600">{farmerData?.farmName}</p>
              </div>
              <div className="flex gap-3">
                <h2 className="w-[30%] font-medium">Farmer Name</h2>
                <p className="w-[70%] text-gray-600">
                  {`${farmerData?.userId?.firstName} ${farmerData?.userId?.lastName}`}
                </p>
              </div>
              <div className="flex gap-3">
                <h2 className="w-[30%] font-medium">Contact</h2>
                <p className="w-[70%] text-gray-600">
                  {farmerData?.userId?.phone}
                </p>
              </div>
              <div className="flex gap-3">
                <h2 className="w-[30%] font-medium">Farm Location</h2>
                <p className="w-[70%] text-gray-600">
                  {farmerData?.farmLocation}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="inline-flex items-center gap-x-2 w-full">
              <p className="font-bold font-montserrat text-nowrap">
                Farm Products
              </p>
              <hr className="w-full text-gray-900" />
            </div>
            <Accordion data={categoryData} />
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="inline-flex items-center gap-x-2 w-full">
              <p className="font-bold font-montserrat text-nowrap">Rate</p>
              <hr className="w-full text-gray-900" />
            </div>
            <div className="p-2 flex items-center justify-center gap-x-4">
              <button>
                <Star className="size-8 fill-green-500" />
              </button>
              <button>
                <Star className="size-8 fill-green-500" />
              </button>
              <button>
                <Star className="size-8 fill-green-500" />
              </button>
              <button>
                <Star className="size-8" />
              </button>
              <button>
                <Star className="size-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Farmer;
