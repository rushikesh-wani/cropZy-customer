import React, { useEffect } from "react";
import { products } from "../utils/Products";
import { ChevronLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Filter } from "lucide-react";
import { SortDesc } from "lucide-react";
import { Sprout } from "lucide-react";
import { DollarSign } from "lucide-react";
import ItemCard from "../components/skeleton/ItemCard";
import CarousalProductCard from "../components/CarousalProductCard";
import { useQuery } from "@tanstack/react-query";
import { getUserHomeData } from "../services/HomeServices";
import { useSelector } from "react-redux";

const Categories = () => {
  const { category } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["HomeData"],
    queryFn: () => getUserHomeData(),
  });

  console.log(data);
  let items;
  if (data?.data[1]?.data[0]?.category === category) {
    items = data?.data[1]?.data[0]?.products;
  } else if (data?.data[1]?.data[1]?.category === category) {
    items = data?.data[1]?.data[1]?.products;
  } else if (data?.data[1]?.data[2]?.category === category) {
    items = data?.data[1]?.data[2]?.products;
  } else if (data?.data[1]?.data[3]?.category === category) {
    items = data?.data[1]?.data[3]?.products;
  } else if (data?.data[1]?.data[4]?.category === category) {
    items = data?.data[1]?.data[4]?.products;
  } else if (data?.data[1]?.data[5]?.category === category) {
    items = data?.data[1]?.data[5]?.products;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isPending) return <ItemCard />;
  if (isError) return <p>Error: {error.message || "Something went wrong"}</p>;
  return (
    <div className="">
      <div className="inline-flex items-center gap-x-2">
        <p className="text-lg font-medium">{category}</p>
      </div>
      <div className="bg-[#f0f4f9]">
        <div className="my-2 grid grid-flow-row grid-cols-2 gap-3 items-center place-items-center sm:grid-cols-3 md:grid-cols-4">
          {items?.map((item) => (
            <div className="px-3 py-3 bg-white rounded-lg">
              <CarousalProductCard key={item._id} product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
