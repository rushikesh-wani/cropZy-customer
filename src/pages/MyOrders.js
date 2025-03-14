import { CheckCheck, CircleX, Minus, Plus, Truck, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import Details from "../components/skeleton/Details";
import { Link } from "react-router-dom";

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
        <div className="mt-4 flex flex-col divide-y">
          {orderData?.map((order) => (
            <Link to={`/orders/${order._id}`}>
              <div
                key={order?._id}
                className="flex gap-2 py-2 hover:bg-slate-50"
              >
                <div className="w-4/12 h-32 grid grid-cols-2 grid-rows-2 gap-1">
                  {order?.items?.slice(0, 3).map((item, index) => (
                    <div
                      key={index}
                      className="w-full h-auto rounded-md border"
                    >
                      <img
                        src={item.item.img}
                        alt={"Item"}
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                  ))}
                  {order?.items?.length < 4 &&
                    Array.from({
                      length: 4 - order?.items?.length,
                    }).map((_, index) => (
                      <div
                        key={`empty-${index}`}
                        className="w-full h-auto bg-slate-200 flex items-center justify-center rounded-md border"
                      ></div>
                    ))}
                  {order?.items?.length > 4 && (
                    <div className="flex items-center justify-center bg-gray-200 rounded-md border">
                      <span className="text-lg font-bold">
                        +{order?.items?.length - 3}
                      </span>
                    </div>
                  )}
                </div>
                <div className="w-8/12">
                  <p className="font-bold truncate">{order?._id}</p>
                  <div className="text-sm font-bold truncate">
                    Item(s):{" "}
                    {order?.items.map((item) => item.item.itemName).join(", ")}
                  </div>
                  <span className="">
                    Farmer :
                    <span className="font-medium">{` ${order?.farmerId?.firstName} ${order?.farmerId?.lastName}`}</span>
                  </span>
                  <div className="w-[100%] inline-flex items-center justify-between">
                    <span className="w-3/6">
                      Total :{" "}
                      <span className="font-medium">₹ {order?.totalPrice}</span>
                    </span>

                    <div className="w-3/6">
                      <button
                        className={
                          `inline-flex gap-1 text-sm items-center px-2 py-1 rounded-md truncate` +
                          (order?.status === "pending"
                            ? " bg-gray-100 text-gray-900"
                            : order?.status === "approved"
                            ? " bg-green-100 text-green-600"
                            : order?.status === "delivered"
                            ? " bg-yellow-50 text-yellow-500"
                            : " bg-gray-100 text-gray-900")
                        }
                      >
                        {order?.status === "pending" ? (
                          <>
                            <X className="size-4" />
                            {"Pending"}
                          </>
                        ) : order?.status === "approved" ? (
                          <>
                            <CheckCheck className="size-4" />
                            {"Approved"}
                          </>
                        ) : order?.status === "delivered" ? (
                          <>
                            <Truck className="size-4" />
                            {"Delivered"}
                          </>
                        ) : (
                          <>
                            <CircleX className="size-4" />
                            {"Cancelled"}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
