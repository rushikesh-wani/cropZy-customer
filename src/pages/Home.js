import { Car, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Leaf, Plus } from "lucide-react";
import { Cereals, Dairy, Fruits, Vegetables } from "../assets";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import CarousalProductCard from "../components/CarousalProductCard";
const Home = () => {
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState(null);
  const [bestSeller, setBestSeller] = useState(null);
  const [farms, setFarms] = useState(null);
  const [farmFresh, setFarmFresh] = useState(null);
  const [recentlyAdded, setRecentlyAdded] = useState(null);
  const [freshFruits, setFreshFruits] = useState();
  const [vegetables, setVegetables] = useState(null);
  const [cereals, setCereals] = useState(null);
  const [dairyProduct, setDairyProduct] = useState(null);
  const getUserHomeData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/home-page`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setCategory(res?.data?.data[0]);
      setProducts(res?.data?.data[1]);
      setBestSeller(res?.data?.data[2]);
      setFarms(res?.data?.data[3]);
      setFarmFresh(res?.data?.data[4]);

      // Here the bug of not setting state
      // console.log(res?.data?.data[1]?.data[0]);
      // setFreshFruits(res?.data?.data[1]?.data[0]);
      // console.log(freshFruits);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    getUserHomeData();
  }, []);
  return (
    <>
      {/* {Category} */}
      {category && (
        <div className="p-2">
          <p className="font-medium text-lg">Find by Category</p>
          <div className="grid grid-flow-row grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10">
            {category?.categories?.map((cat, index) => (
              <Link key={index} to={"/category/Fresh-Fruits"}>
                <div className="p-2 rounded-md">
                  <div className="w-full h-20 rounded-xl">
                    <img
                      src={cat?.img}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-center text-sm font-medium">
                    {cat?.categoryName}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* {Recently Added} */}
      {products?.data[0] && (
        <div className="p-2">
          <div className="w-full inline-flex justify-between">
            <p className="font-montserrat font-medium text-lg">
              {products?.data[0]?.category}
            </p>
            <button>
              <ChevronRight />
            </button>
          </div>
          <div className="overflow-x-auto">
            <div
              className="w-fit grid grid-rows-1 grid-flow-col gap-4 py-4"
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
              }}
            >
              {products?.data[0]?.products?.map((pro) => (
                <CarousalProductCard key={pro._id} product={pro} />
              ))}
            </div>
          </div>
        </div>
      )}
      {/* {Fresh Fruits} */}
      {products?.data[1] && (
        <div className="p-2">
          <div className="w-full inline-flex justify-between">
            <p className="font-montserrat font-medium text-lg">
              {products?.data[1]?.category}
            </p>
            <button>
              <ChevronRight />
            </button>
          </div>
          <div className="overflow-x-auto">
            <div
              className="w-fit grid grid-rows-1 grid-flow-col gap-4 py-4"
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
              }}
            >
              {products?.data[1]?.products?.map((product) => (
                <CarousalProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
      {/* {Vegetables} */}
      {products?.data[2] && (
        <div className="p-2">
          <div className="w-full inline-flex justify-between">
            <p className="font-montserrat font-medium text-lg">
              {products?.data[2]?.category}
            </p>
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
              {products?.data[2]?.products?.map((product) => (
                <CarousalProductCard product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
      {/* {Cereals} */}
      {products?.data[3] && (
        <div className="p-2">
          <div className="w-full inline-flex justify-between">
            <p className="font-montserrat font-medium text-lg">
              {products?.data[3]?.category}
            </p>
            <button>
              <ChevronRight />
            </button>
          </div>
          <div className="overflow-x-auto">
            <div
              className="w-fit grid grid-rows-1 grid-flow-col gap-4 py-4"
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
              }}
            >
              {products?.data[3]?.products?.map((product) => (
                <CarousalProductCard product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
      {/* {Dairy Products} */}
      {products?.data[4] && (
        <div className="p-2 pt-2 pb-6">
          <div className="w-full inline-flex justify-between">
            <p className="font-montserrat font-medium text-lg">
              {products?.data[4]?.category}
            </p>
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
              {products?.data[4]?.products?.map((product) => (
                <CarousalProductCard product={product} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* {Fresh Fruits Carousal} */}
      <div className="p-2 bg-[#fff4e9]">
        <div className="w-full inline-flex justify-between">
          <p className="text-orange-600 font-medium text-lg">
            {products?.data[0]?.category}
          </p>
          <button>
            <ChevronRight />
          </button>
        </div>
        <div className="py-4 flex gap-x-2 overflow-y-scroll no-scrollbar">
          {products?.data[0]?.products?.map((product) => (
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
              <p className="text-xs h-9 line-clamp-2">{product?.description}</p>
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

      {/* {Best Seller} */}
      <div className="p-2">
        <div className="w-full inline-flex justify-between">
          <p className="font-medium text-lg">{bestSeller?.headLine}</p>
          <button>
            <ChevronRight />
          </button>
        </div>
        <div className="grid place-items-center grid-flow-row grid-cols-3 gap-2 md:grid-cols-6">
          {bestSeller?.data?.map((farmer) => (
            <div key={farmer?._id} className="p-2">
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
          ))}
        </div>
      </div>
      {/* {Shop by Farm} */}
      <div className="p-2 py-5 bg-[#fff4e9]">
        <div className="w-full inline-flex justify-between">
          <p className="font-medium text-orange-700 text-lg">
            {farms?.headLine}
          </p>
          <button>
            <ChevronRight />
          </button>
        </div>
        <div className="flex gap-x-4 overflow-y-scroll">
          {farms?.data?.map((farm) => (
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
      {/* {Product Carousal} */}
      <div className="p-2 py-5">
        <div className="w-full inline-flex justify-between">
          <p className="font-medium text-lg">{farmFresh?.headLine}</p>
          <button>
            <ChevronRight />
          </button>
        </div>
        <div className="py-5 flex gap-x-2 overflow-y-scroll">
          {farmFresh?.data?.map((product) => (
            <div className="w-60 shrink-0 p-1 rounded-md shadow-xl">
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
              <p className="text-xs h-9 line-clamp-2">{product.description}</p>
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
    </>
  );
};

export default Home;
