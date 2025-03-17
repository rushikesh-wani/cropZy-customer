import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../services/api";
import { useQuery } from "@tanstack/react-query";
import Details from "../components/skeleton/Details";
import { formatDate } from "../utils/helpers";
import {
  ArrowRight,
  Minus,
  PhoneCall,
  Plus,
  ShoppingBag,
  X,
} from "lucide-react";
import { cancelOrder } from "../services/OrderServices";

const OrderDetails = () => {
  const { id } = useParams();

  const getOrderDetails = async () => {
    try {
      const res = await api.get(`/order/${id}`);
      if (res.status !== 200) {
        throw new Error("Error fetching the orders details");
      }
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      console.error("Error => ", err);
      throw new Error(err);
    }
  };

  const { data, isError, isPending, error } = useQuery({
    queryKey: [`Order details => ${id}`],
    queryFn: getOrderDetails,
  });
  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (isPending) return <Details />;
  if (isError) return <p>Error : {error}</p>;
  return (
    <>
      <p className="text-gray-600">Orders / {data?.data?._id}</p>
      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-[#121212] dark:text-white">
        <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
          <p className="font-semibold text-nowrap">Order Details</p>
          <hr className="w-full dark:border-darkDivider" />
        </div>
        <div>
          <span className="font-bold">Order Id : </span>
          <span className="text-gray-600 font-medium">{data?.data?._id}</span>
        </div>
        <div>
          <span className="font-bold">Farmer Name : </span>
          <span className="text-gray-600 font-medium">
            {data?.data?.farmerId?.firstName} {data?.data?.farmerId?.lastName}
          </span>
        </div>
        <div>
          <span className="font-bold">Phone no. : </span>
          <span className="text-gray-600 font-medium">
            {data?.data?.farmerId?.phone}
          </span>
        </div>
        <div>
          <span className="font-bold">Order date : </span>
          <span className="text-gray-600 font-medium">
            {formatDate(data?.data?.createdAt)}
          </span>
        </div>
      </div>

      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-[#121212] dark:text-white">
        <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
          <p className="font-semibold text-nowrap">
            Items ({data?.data?.items?.length})
          </p>
          <hr className="w-full dark:border-darkDivider" />
        </div>
        <div className="mt-4 flex flex-col divide-y dark:divide-darkDivider">
          {data?.data?.items?.map((item) => (
            <div key={item?._id} className="flex gap-2 py-2 hover:bg-slate-50">
              <div className="w-[25%] h-16 bg-slate-200 rounded-md">
                <img
                  src={item?.item?.img}
                  alt="item-img"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="w-[75%]">
                <p className="font-bold truncate">{item?.item?.itemName}</p>
                <div className="text-sm font-bold truncate">
                  ₹ {item?.item?.price}{" "}
                  <span className="text-xs font-medium text-slate-700 dark:text-darkText">
                    /{" "}
                    {`${item?.item?.weight?.value} ${item?.item?.weight?.unit}`}
                  </span>
                </div>
                <div className="w-full inline-flex items-center justify-between">
                  <span className="">
                    Total :{" "}
                    <span className="font-medium">{item?.quantity}</span>
                  </span>
                  <div className="font-semibold text-lg">₹ {item?.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-[#121212] dark:text-white">
        <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
          <p className="font-semibold text-nowrap">Receipt</p>
          <hr className="w-full dark:border-darkDivider" />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="w-[50%]">
              <p className="font-montserrat font-semibold text-gray-700 dark:text-darkText">
                {data?.data?.farmerId?.firstName}{" "}
                {data?.data?.farmerId?.lastName}
              </p>
              <p className="text-sm text-gray-500 dark:text-darkText">
                {data?.data?.farmerId?.phone}
              </p>
              {/* <p className="text-sm text-gray-500 dark:text-darkText">
                City, Country, 12345
              </p> */}
            </div>
            <div className="w-[50%] text-right">
              <p className="text-sm truncate text-gray-500 dark:text-darkText">
                Receipt #{data?.data?._id}
              </p>
              <p className="text-sm text-gray-500 dark:text-darkText">
                Date: {Date(data.data.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 dark:text-darkText">
              <thead className="font-montserrat text-xs uppercase text-rose-800 bg-rose-50 dark:bg-[#2a2121] dark:text-[#fc8999]">
                <tr>
                  <th className="px-4 py-2">Item</th>
                  <th className="px-4 py-2 text-right">Quantity</th>
                  <th className="px-4 py-2 text-right">Price</th>
                  <th className="px-4 py-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.items?.map((item) => (
                  <tr
                    key={item?.item?._id}
                    className="border-b dark:border-[#fc8999]"
                  >
                    <td className="px-4 py-2">{item?.item?.itemName}</td>
                    <td className="px-4 py-2 text-right">{item?.quantity}</td>
                    <td className="px-4 py-2 text-right">
                      {item?.item?.price}
                    </td>
                    <td className="px-4 py-2 text-right">
                      ₹ {item?.quantity * item?.item?.price}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="text-sm font-semibold text-gray-700 dark:text-darkText">
                <tr>
                  <td className="px-4 py-2 text-right" colSpan="3">
                    Total
                  </td>
                  <td className="px-4 py-2 text-right">
                    ₹{data?.data?.totalPrice}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="text-center text-xs text-gray-500 mt-6">
            <p>Thank you for your purchase!</p>
            <p>If you have any questions, contact support@cropzy.com</p>
          </div>
        </div>
      </div>
      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-[#121212] dark:text-white">
        <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
          <p className="font-semibold text-nowrap">Farmer Details</p>
          <hr className="w-full dark:border-darkDivider" />
        </div>
        <div className="my-1 flex gap-2">
          <div className="w-[30%]">
            <img
              className="size-20 rounded-full border"
              src={data?.data?.farmerId?.profileImg}
              alt={data?.data?.farmerId?.firstName}
            />
          </div>

          <div className="w-[70%]">
            <div className="truncate">
              Farmer Name: {data?.data?.farmerId?.firstName}{" "}
              {data?.data?.farmerId?.lastName}
            </div>
            <div className="truncate">
              Phone no. : {data?.data?.farmerId?.phone}
            </div>
            <div>Farmer</div>
            {/* <div className="my-2 relative group cursor-pointer">
              <div className="absolute inset-0 bg-radiant rounded-lg blur opacity-70 group-hover:opacity-100 bg-[length:200%_200%] animate-rotate-gradient"></div>
              <div className="relative px-2 py-3 bg-white text-slate-800 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center dark:bg-darkCard dark:text-white">
                <div className="flex items-center gap-1 text-nowrap">
                  <ShoppingBag className="size-4" /> Shop More
                </div>
              </div>
            </div> */}
            <div className="w-full flex justify-between items-center">
              <Link to={`/farmer/${data?.data?.farmerId?._id}`}>
                <div className="w-fit font-poppins my-1 px-3 py-1 text-green-600 border border-green-500 rounded-lg flex items-center gap-1">
                  Shop More <ArrowRight />
                </div>
              </Link>
              {/* <Link to={`tel:${data?.data?.farmerId?.phone}`}>
                <div className="rounded-full my-auto mx-auto text-white bg-indigo-600 p-2 shadow-lg">
                  <PhoneCall />
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      {data?.data?.status === "pending" ? (
        <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-[#121212] dark:text-white">
          <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
            <p className="font-semibold text-nowrap">Cancel Order</p>
            <hr className="w-full dark:border-darkDivider" />
          </div>
          <div className="grid grid-flow-row grid-cols-5 items-center">
            <div className="col-span-3 text-sm">
              Once order is cancel it can't be recovered. Cancel order as per
              your wish
            </div>
            <div className="ml-5 col-span-2">
              <button
                onClick={async () => {
                  await cancelOrder(data?.data?._id);
                }}
                className="flex font-poppins gap-1 text-rose-600 border border-rose-800 px-3 py-1 rounded-lg"
              >
                <X />
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-[#121212] dark:text-white">
          <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
            <p className="font-semibold text-nowrap">Cancel Order</p>
            <hr className="w-full dark:border-darkDivider" />
          </div>
          <p className="text-center text-sm text-gray-700">
            Order cann't be cancelled at this time, as order is currently in{" "}
            <span className="text-rose-500">{data?.data?.status}</span> state!
          </p>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
