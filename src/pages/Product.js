import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CarousalProductCard from "../components/CarousalProductCard";

const Product = () => {
  const { itemId } = useParams();
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    const getItemDetails = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/getProduct/${itemId}`,
          { withCredentials: true }
        );
        console.log(res);
        setProductData(res?.data?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getItemDetails();
  }, []);
  console.log(productData);
  return (
    <>
      <div className="z-50 font-montserrat sticky top-0 w-full inline-flex items-center gap-x-2 p-2 bg-white shadow-md">
        <Link to={"/"} className="">
          <div className="p-1 rounded-full bg-white">
            <ChevronLeft />
          </div>
        </Link>
        <p className="text-lg font-medium">{productData?.itemName}</p>
      </div>
      <div className="p-3 pb-20 bg-[#f0f4f9]">
        <div className="flex flex-col gap-3">
          <div className="relative w-full h-56 rounded-xl border bg-slate-200">
            <img
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              src={productData?.img}
              alt={productData?.itemName}
            />
          </div>
          <div className="bg-white p-4 rounded-xl">
            <p className="font-medium truncate">{productData?.itemName}</p>
            <div className="text-xl font-bold truncate">
              {`₹ ${productData?.price}`}
              <span className="text-sm font-medium text-slate-700">
                {` / ${productData?.weight?.value} ${productData?.weight?.unit}`}
              </span>
            </div>

            {/* <button>Add</button> */}
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="inline-flex items-center gap-x-2 w-full">
              <p className="font-medium">Description</p>
              <hr className="w-full text-gray-900" />
            </div>
            <p className="text-xs text-gray-600">{productData?.description}</p>
          </div>

          <div className="bg-white p-4 rounded-xl">
            <div className="inline-flex items-center gap-x-2 w-full">
              <p className="font-medium">Information</p>
              <hr className="w-full text-gray-900" />
            </div>
            <div className="my-2 flex flex-col gap-y-4 text-sm">
              <div className="flex gap-3">
                <h2 className="w-[30%] font-medium">Farm Name</h2>
                <p className="w-[70%] text-gray-600">
                  {productData?.farmDetails?.farmName}
                </p>
              </div>
              <div className="flex gap-3">
                <h2 className="w-[30%] font-medium">Farmer Name</h2>
                <p className="w-[70%] text-gray-600">{`${productData?.farmerId?.firstName} ${productData?.farmerId?.lastName}`}</p>
              </div>
              <div className="flex gap-3">
                <h2 className="w-[30%] font-medium">Contact</h2>
                <p className="w-[70%] text-gray-600">
                  {productData?.farmerId?.phone}
                </p>
              </div>
              <div className="flex gap-3">
                <h2 className="w-[30%] font-medium">Farm Location</h2>
                <p className="w-[70%] text-gray-600">
                  {productData?.farmDetails?.farmLocation}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <p className="font-medium mb-2 truncate">Similar products</p>
            <div className="overflow-x-auto">
              {" "}
              <div className="w-fit grid grid-rows-1 grid-flow-col gap-4">
                <CarousalProductCard
                  product={{
                    addedAt: "2024-11-26T09:56:53.726Z",
                    category: "Fresh Fruits",
                    createdAt: "2024-11-26T09:56:53.735Z",
                    description:
                      "Fresh Banana direct from farm. Produced by orgaic farming.",
                    farmerId: "6744c75250486827b4e06d55",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrRDpJMyN_gPPw_tc32KtFxteUFsYUA8ij0vT-xPA9ZBefz10irGmlZyDd89AIDNG-lU&usqp=CAU",
                    itemName: "Banana",
                    price: 30,
                    stockQty: 60,
                    updatedAt: "2024-12-07T12:26:16.954Z",
                    weight: { value: 5, unit: "Piece" },
                  }}
                />
                <CarousalProductCard
                  product={{
                    addedAt: "2024-11-26T09:56:53.726Z",
                    category: "Fresh Fruits",
                    createdAt: "2024-11-26T09:56:53.735Z",
                    description:
                      "Fresh Banana direct from farm. Produced by orgaic farming.",
                    farmerId: "6744c75250486827b4e06d55",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrRDpJMyN_gPPw_tc32KtFxteUFsYUA8ij0vT-xPA9ZBefz10irGmlZyDd89AIDNG-lU&usqp=CAU",
                    itemName: "Banana",
                    price: 30,
                    stockQty: 60,
                    updatedAt: "2024-12-07T12:26:16.954Z",
                    weight: { value: 5, unit: "Piece" },
                  }}
                />
                <CarousalProductCard
                  product={{
                    addedAt: "2024-11-26T09:56:53.726Z",
                    category: "Fresh Fruits",
                    createdAt: "2024-11-26T09:56:53.735Z",
                    description:
                      "Fresh Banana direct from farm. Produced by orgaic farming.",
                    farmerId: "6744c75250486827b4e06d55",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrRDpJMyN_gPPw_tc32KtFxteUFsYUA8ij0vT-xPA9ZBefz10irGmlZyDd89AIDNG-lU&usqp=CAU",
                    itemName: "Banana",
                    price: 30,
                    stockQty: 60,
                    updatedAt: "2024-12-07T12:26:16.954Z",
                    weight: { value: 5, unit: "Piece" },
                  }}
                />
                <CarousalProductCard
                  product={{
                    addedAt: "2024-11-26T09:56:53.726Z",
                    category: "Fresh Fruits",
                    createdAt: "2024-11-26T09:56:53.735Z",
                    description:
                      "Fresh Banana direct from farm. Produced by orgaic farming.",
                    farmerId: "6744c75250486827b4e06d55",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrRDpJMyN_gPPw_tc32KtFxteUFsYUA8ij0vT-xPA9ZBefz10irGmlZyDd89AIDNG-lU&usqp=CAU",
                    itemName: "Banana",
                    price: 30,
                    stockQty: 60,
                    updatedAt: "2024-12-07T12:26:16.954Z",
                    weight: { value: 5, unit: "Piece" },
                  }}
                />
                <CarousalProductCard
                  product={{
                    addedAt: "2024-11-26T09:56:53.726Z",
                    category: "Fresh Fruits",
                    createdAt: "2024-11-26T09:56:53.735Z",
                    description:
                      "Fresh Banana direct from farm. Produced by orgaic farming.",
                    farmerId: "6744c75250486827b4e06d55",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrRDpJMyN_gPPw_tc32KtFxteUFsYUA8ij0vT-xPA9ZBefz10irGmlZyDd89AIDNG-lU&usqp=CAU",
                    itemName: "Banana",
                    price: 30,
                    stockQty: 60,
                    updatedAt: "2024-12-07T12:26:16.954Z",
                    weight: { value: 5, unit: "Piece" },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full text-center px-5 py-2 bg-white">
        <button className="w-full uppercase font-medium py-2 bg-rose-600 text-white rounded-lg">
          ADD
        </button>
      </div>
    </>
  );
};

export default Product;
