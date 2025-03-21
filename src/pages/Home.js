import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/skeleton/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getUserHomeData } from "../services/HomeServices";
import HomeCarousal from "../components/HomeCarousal";
import TwoRowCarousal from "../components/TwoRowCarousal";

const Home = () => {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["HomeData"],
    queryFn: () => getUserHomeData(),
    staleTime: 30 * 60 * 1000, // 30 mins*1000
    gcTime: 30 * 60 * 1000,
  });

  if (isPending) return <ProductCard />;
  if (isError) return <p>Error: {error.message || "Something went wrong"}</p>;

  return (
    <>
      {/* {Category} */}
      {data?.data[0] && (
        <div className="p-2 dark:bg-[#252525] dark:text-white">
          <p className="font-montserrat font-medium text-lg">
            Find by Category
          </p>
          <div className="grid grid-flow-row grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-6">
            {data?.data[0]?.categories?.map((cat, index) => (
              <Link
                key={cat?.categoryName}
                to={`/category/${cat?.categoryName}`}
                className="p-2 rounded-md place-items-center"
              >
                <div className="size-24 rounded-xl dark:bg-darkCard lg:size-28">
                  <img
                    src={cat?.img}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl hover:scale-110 hover:duration-300"
                  />
                </div>
                <p className="text-center text-sm font-medium truncate">
                  {cat?.categoryName}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* {Fresh Fruits Infinite Scroll} */}
      {/* {
        <HomeCarousal
          nav={"Fresh-Fruits"}
          headLine={"Fresh Fruits"}
          data={freshFruits ? freshFruits : null}
        />
      } */}
      {/* {Cereals} */}
      {data?.data[1]?.data[0] && (
        <HomeCarousal
          nav={"Cereals"}
          headLine={data?.data[1]?.data[0]?.category}
          data={data?.data[1]?.data[0]?.products}
        />
      )}
      {/* {Dairy Products} */}
      {data?.data[1]?.data[1] && (
        <HomeCarousal
          nav={"Dairy Product"}
          headLine={data?.data[1]?.data[1]?.category}
          data={data?.data[1]?.data[1]?.products}
        />
      )}
      {/* {Fresh fruits} */}
      {data?.data[1]?.data[2] && (
        <TwoRowCarousal
          nav={"Fresh Fruits"}
          headLine={data?.data[1]?.data[2]?.category}
          data={data?.data[1]?.data[2]?.products}
        />
      )}
      {/* {Recently Added} */}
      {data?.data[1]?.data[3] && (
        <HomeCarousal
          nav={"Recently Added"}
          headLine={data?.data[1]?.data[3]?.category}
          data={data?.data[1]?.data[3]?.products}
        />
      )}
      {/* {Vegetables} */}
      {data?.data[1]?.data[4] && (
        <TwoRowCarousal
          nav={"Vegetables"}
          headLine={data?.data[1]?.data[4]?.category}
          data={data?.data[1]?.data[4]?.products}
        />
      )}

      {/* {data?.data[1]?.data[0] && (
        <div className="p-2 bg-[#fff4e9] dark:bg-black dark:text-white">
          <div className="w-full inline-flex justify-between">
            <p className="text-orange-600 font-medium text-lg">
              {data?.data[1]?.data[0]?.category}
            </p>
            <button>
              <ChevronRight />
            </button>
          </div>
          <div className="py-4 flex gap-x-2 overflow-y-scroll no-scrollbar">
            {data?.data[1]?.data[0]?.products?.map((product) => (
              <div className="w-60 shrink-0 p-2 bg-white rounded-md shadow-md">
                <div
                  id="product-img-container"
                  className="w-full h-32 rounded-md border border-white bg-gray-200"
                >
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover rounded-md"
                    src={product?.img}
                    alt="product-img"
                  />
                </div>
                <p className="text-lg font-medium truncate">
                  {product?.itemName}
                </p>
                <p className="text-xs h-9 line-clamp-2">
                  {product?.description}
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
                    <span className="font-bold">₹{product?.price}/</span>
                    <span className="text-xs">
                      {product?.weight?.value} {product?.weight.unit}
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
            ))}
          </div>
        </div>
      )} */}
      {/* {Best Seller} */}
      {data?.data[2] && (
        <div className="p-2 dark:bg-black dark:text-white">
          <div className="w-full inline-flex justify-between">
            <p className="font-medium text-lg">{data?.data[2]?.headLine}</p>
            <button>
              <ChevronRight />
            </button>
          </div>
          <div className="grid place-items-center grid-flow-row grid-cols-3 gap-2 md:grid-cols-6">
            {data?.data[2]?.data?.map((farmer) => (
              <Link key={farmer?._id} to={`/farmer/${farmer._id}`}>
                <div className="p-2">
                  <div className="w-20 h-20 bg-gray-400 rounded-full">
                    <img
                      src={farmer?.profileImg}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="text-center line-clamp-1 text-sm font-medium">{`${farmer?.firstName} ${farmer?.lastName}`}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* {Shop by Farm} */}
      {data?.data[3] && (
        <div className="p-2 py-5 bg-[#fff4e9] dark:bg-black dark:text-white">
          <div className="w-full inline-flex justify-between">
            <p className="font-medium text-orange-700 text-lg">
              {data?.data[3]?.headLine}
            </p>
            <button>
              <ChevronRight />
            </button>
          </div>
          <div className="flex gap-x-4 overflow-y-scroll">
            {data?.data[3]?.data?.map((farm) => (
              <div key={farm?._id} className="p-2">
                <div className="w-20 h-20 bg-gray-400 rounded-full">
                  <img
                    src={farm?.userId?.profileImg}
                    alt={farm?.farmName}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="text-center text-sm font-medium">
                  {farm?.farmName}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* {Product Carousal} */}
      {/* {data?.data[4] && (
        <div className="p-2 py-5 dark:bg-black dark:text-white">
          <div className="w-full inline-flex justify-between">
            <p className="font-medium text-lg">{data?.data[4]?.headLine}</p>
            <button>
              <ChevronRight />
            </button>
          </div>
          <div className="py-5 flex gap-x-2 overflow-y-scroll">
            {data?.data[4]?.data?.map((product) => (
              <div
                key={product?._id}
                className="w-60 shrink-0 p-1 rounded-md shadow-xl"
              >
                <div
                  id="product-img-container"
                  className="w-full h-32 rounded-md border border-white bg-gray-200"
                >
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover rounded-md"
                    src={product.img}
                    alt="product-img"
                  />
                </div>
                <p className="text-lg truncate">{product.itemName}</p>
                <p className="text-xs h-9 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-col gap-y-1 text-sm">
                  <div className="inline-flex items-center gap-x-2">
                    <span className="p-1 bg-yellow-100 rounded-full">
                      <Leaf className="size-4" />
                    </span>
                    <span className="line-clamp-1">{`${product?.farmerId?.firstName} ${product?.farmerId?.lastName}`}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between font-medium">
                  <p className="text-xl truncate">
                    <span className="font-bold">₹{product.price}/</span>
                    <span className="text-xs">
                      {product.weight?.value} {product.weight.unit}
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
            ))}
          </div>
        </div>
      )} */}
    </>
  );
};

export default Home;
