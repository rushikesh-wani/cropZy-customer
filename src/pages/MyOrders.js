import { Minus, Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import Details from "../components/skeleton/Details";

const MyOrders = () => {
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const getAllOrders = async () => {
    try {
      const res = await api.get("/my-orders");
      if (res?.status === 200) {
        console.log(res?.data);
        setIsLoading(false);
        setOrderData(res?.data?.data);
      }
    } catch (err) {
      setIsError(true);
      setError(err?.response?.data?.message);
    }
  };
  useEffect(() => {
    getAllOrders();
  }, []);
  if (isLoading) return <Details />;
  if (isError) return <p>{error || "Something went wrong!"}</p>;
  return (
    <>
      <div className="font-palanquin bg-white p-4 rounded-xl">
        <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
          <p className="font-medium text-nowrap">
            Order {`(${orderData?.length})`}
          </p>
          <hr className="w-full text-gray-900" />
        </div>
        <div className="mt-4 flex flex-col">
          {orderData?.map((order, index) => (
            <>
              <div
                key={order?._id}
                className="flex gap-2 py-2 hover:bg-slate-50"
              >
                <div className="w-[25%] h-16 bg-slate-200 rounded-md">
                  <img
                    src={order?.items.img}
                    alt="item-img"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="w-[75%]">
                  <p className="font-bold truncate">#{order?._id}</p>
                  <div className="text-sm font-bold truncate">
                    ₹ {order?.totalPrice}{" "}
                    <span className="text-xs font-medium text-slate-700">
                      /{" "}
                      {`${order?.item?.weight?.value} ${order?.item?.weight?.unit}`}
                    </span>
                  </div>
                  <span className="">
                    Qty :{" "}
                    <span className="font-medium">{`${order?.weight?.value} ${order?.weight?.unit}`}</span>
                  </span>
                  <div className="w-full inline-flex items-center justify-between">
                    <span className="">
                      Total :{" "}
                      <span className="font-medium">₹ {order?.totalPrice}</span>
                    </span>
                    {/* <div className="min-w-16 max-w-20 text-sm flex justify-between items-center bg-rose-50 border border-rose-300 rounded-md text-rose-500">
                      <button
                        className="p-1"
                        onClick={() => {
                          console.log("Add btn-clicked");
                        }}
                      >
                        <Plus className="size-4" />
                      </button>
                      <span>1</span>
                      <button
                        className="p-1"
                        onClick={(e) => {
                          console.log("Minus btn-clicked");
                        }}
                      >
                        <Minus className="size-4" />
                      </button>
                    </div> */}
                    <button className="inline-flex gap-1 items-center px-2 py-1 bg-gray-100 text-gray-900 rounded-md">
                      <X />
                      {order?.status}
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
