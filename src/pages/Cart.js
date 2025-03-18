import React, { useEffect, useState } from "react";
import cart from "../assets/cart.avif";
import {
  AlertTriangle,
  ChevronRight,
  Minus,
  Plus,
  Receipt,
  Sparkles,
} from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import Recipe from "./Recipe";
import Details from "../components/skeleton/Details";
import { getCart, useManageQty } from "../services/cartServices";
import { makeOrder } from "../services/OrderServices";
import { toast } from "react-toastify";
import Modal from "../components/Modal";
import { formatDate } from "../utils/helpers";
import { clearCart } from "../services/cartServices";

const Cart = () => {
  const [recipeLoading, setRecipeLoading] = useState(true);
  const [recipeIsError, setRecipeIsError] = useState(false);
  const [recipeError, setRecipeError] = useState("");
  const [recipe, setRecipe] = useState("");
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState();
  const navigate = useNavigate();
  const { mutate: manageQtyMutate } = useManageQty();

  const queryClient = useQueryClient();
  const handleIncrement = (itemId) => {
    manageQtyMutate(
      { action: "incrementQty", itemId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["userCart"]);
        },
      }
    );
  };

  const handleDecrement = (itemId) => {
    manageQtyMutate(
      { action: "decrementQty", itemId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["userCart"]);
        },
      }
    );
  };

  const { data, error, isError, isPending, isFetching } = useQuery({
    queryKey: ["userCart"],
    queryFn: getCart,
  });

  const ingredients = data?.products?.map((item) => item?.item?.itemName);
  console.log(ingredients);

  const totalPrice = data?.products?.reduce((price, curr) => {
    return (price += curr.price);
  }, 0);

  console.log("Total price ", totalPrice);

  const getRecipeHandler = async (ingredients) => {
    setIsBtnClicked(true);
    try {
      const isUserAuthenticated = localStorage.getItem("isAuthenticated");
      if (!isUserAuthenticated) {
        throw new Error("Registered users are only allowed!");
      }
      const res = await api.post(
        "/get-recipe",
        { ingredients: ingredients },
        { withCredentials: true }
      );
      if (res.status === 200) {
        setRecipe(res?.data?.recipeText);
        setRecipeLoading(false);
      }
    } catch (err) {
      setRecipeLoading(false);
      console.log(err);
      setRecipe(err?.response?.data?.message);
      setRecipeIsError(true);
      setRecipeError(
        err?.response?.data?.message ||
          "Only registered users have access for AI Recipes!"
      );
    }
  };

  const handleOrder = async () => {
    if (data?.products.length > 0) {
      const res = await makeOrder();
      console.log("Res here ", res);
      setOrderDetails(res);

      if (res?.status === 201) {
        setIsModalOpen(true);
      }
    } else {
      toast.warn("Add items to cart first!");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(data);

  if (isPending || isFetching) return <Details />;
  if (isError) return <p>{"Error " + error}</p>;
  return (
    <>
      {data?.products?.length > 0 ? (
        <>
          <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-[#121212] dark:text-white">
            <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
              <p className="font-medium text-nowrap">
                Items {`(${data?.products?.length})`}
              </p>
              <hr className="w-full dark:border-darkDivider" />
            </div>
            <div className="mt-4 flex flex-col divide-y dark:divide-darkDivider">
              {data?.products?.map((item) => (
                <div
                  key={item?.item?._id}
                  className="flex gap-2 py-2 hover:bg-slate-50"
                >
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
                      <div className="min-w-20 max-w-24 text-sm flex justify-between items-center bg-rose-50 border border-rose-300 rounded-md text-rose-500 dark:bg-darkAddBtn">
                        <button
                          className="p-2 rounded-sm hover:bg-rose-500 hover:text-white"
                          onClick={() => {
                            handleIncrement(item.item._id);
                          }}
                        >
                          <Plus className="size-4" />
                        </button>
                        <span className="mx-2">{item?.quantity}</span>
                        <button
                          className="p-2 rounded-sm hover:bg-rose-500 hover:text-white"
                          onClick={(e) => {
                            handleDecrement(item.item._id);
                          }}
                        >
                          <Minus className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-end mt-1">
              <button
                onClick={async () => {
                  await clearCart();
                  queryClient.invalidateQueries(["userCart"]);
                }}
                className="text-rose-600 px-2 py-1 rounded-lg hover:bg-rose-300/50 "
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-[#121212] dark:text-white">
            <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
              <p className="font-medium text-nowrap">Get AI Recipe</p>
              <hr className="w-full dark:border-darkDivider" />
            </div>
            <div className="flex justify-between items-center gap-3">
              <div className="w-[60%] text-sm text-slate-800 dark:text-darkText">
                <p>
                  Get AI Generated recipe from the ingredients added in your
                  carts!
                </p>
              </div>
              <div className="w-[40%] text-center">
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-radiant rounded-lg blur opacity-70 group-hover:opacity-100 bg-[length:200%_200%] animate-rotate-gradient"></div>
                  <div className="relative px-2 py-3 bg-white text-slate-800 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center dark:bg-darkCard dark:text-white">
                    <button
                      onClick={() => {
                        getRecipeHandler(ingredients);
                        window.scrollTo({
                          top: 300,
                          behavior: "smooth",
                        });
                      }}
                      className="flex items-center gap-1 text-nowrap"
                    >
                      <Sparkles className="size-4" /> Get Recipe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isBtnClicked && (
            <Recipe
              isLoading={recipeLoading}
              isError={recipeIsError}
              error={recipeError}
              text={recipe}
            />
          )}
          <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-darkCard dark:text-white">
            <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
              <p className="font-medium">Details</p>
              <hr className="w-full dark:border-darkDivider" />
            </div>
            <div className="my-2 flex flex-col gap-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-[10%]">
                  <Receipt />
                </span>
                <div className="w-[50%]">
                  <h2 className="font-medium">To Pay</h2>
                  <p className="text-gray-600 truncate">
                    Include of all taxes and charges
                  </p>
                </div>
                <div className="w-[30%] text-lg">
                  <p className="text-xs">Total</p>
                  <p>₹{totalPrice}</p>
                </div>
                <button
                  onClick={() => {
                    window.scrollTo({
                      top: 1000,
                      behavior: "smooth",
                    });
                  }}
                  className="w-[10%]"
                >
                  <ChevronRight />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-[10%]">
                  <AlertTriangle />
                </span>
                <div className="w-[50%]">
                  <h2 className="font-medium">Delivery Instructions</h2>
                  <p className="text-gray-600 truncate">
                    Read the following instructions
                  </p>
                </div>
                <div className="w-[30%] text-lg"></div>
                <span className="w-[10%]">
                  <ChevronRight />
                </span>
              </div>
            </div>
          </div>
          <div className="mb-10 font-palanquin bg-white p-4 rounded-xl dark:bg-darkCard dark:text-white">
            <div className="inline-flex items-center gap-x-2 w-full mb-4">
              <p className="font-montserrat font-medium">Receipt</p>
              <hr className="w-full dark:border-darkDivider" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="w-[50%]">
                  <p className="font-montserrat font-semibold text-gray-700 dark:text-darkText">
                    {data?.farmer?.farmDetails?.farmName}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-darkText">
                    {data?.farmer?.farmDetails?.farmLocation}
                  </p>
                </div>
                <div className="w-[50%] text-right">
                  <p className="text-sm text-gray-500 dark:text-darkText">
                    Date: {formatDate(Date.now())}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-darkText">
                    Receipt #{Math.floor(Math.random() * 100000)}
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
                    {data?.products?.map((item) => (
                      <tr
                        key={item?._id}
                        className="border-b dark:border-[#fc8999]"
                      >
                        <td className="px-4 py-2">{item?.item?.itemName}</td>
                        <td className="px-4 py-2 text-right">
                          {item?.quantity}
                        </td>
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
                    {/* <tr>
                      <td className="px-4 py-2 text-right" colSpan="3">
                        Subtotal
                      </td>
                      <td className="px-4 py-2 text-right">$35.00</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-right" colSpan="3">
                        Tax (10%)
                      </td>
                      <td className="px-4 py-2 text-right">$3.50</td>
                    </tr> */}
                    <tr>
                      <td className="px-4 py-2 text-right" colSpan="3">
                        Total
                      </td>
                      <td className="px-4 py-2 text-right">₹{totalPrice}</td>
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
          <div className="fixed bottom-0 right-0 left-0 text-center px-5 py-2 bg-white">
            <button
              onClick={handleOrder}
              className="w-full uppercase font-medium py-2 bg-rose-500 text-white rounded-lg lg:max-w-4xl"
            >
              order
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white p-4 rounded-xl dark:bg-darkCard dark:text-white">
            <div className="inline-flex items-center gap-x-2 w-full">
              <p className="font-medium text-nowrap">Items (0)</p>
              <hr className="w-full text-gray-900" />
            </div>
            <div className="px-4">
              <div className="mx-auto w-60 h-full">
                <img
                  className="w-full h-full object-cover"
                  loading="lazy"
                  src={cart}
                  alt="empty-cart"
                />
              </div>
              <p className="my-2 text-sm text-gray-700 text-center">
                Nothing to show right now! Add item to cart to see here.
                Continue shopping...
              </p>
            </div>
          </div>
          <div className="fixed bottom-0 right-0 left-0 text-center px-5 py-2 bg-white dark:bg-darkCard">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="w-full uppercase font-medium py-2 bg-green-600 text-white rounded-lg lg:max-w-4xl dark:bg-green-600/80"
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}

      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          total={orderDetails?.data?.order?.totalPrice}
          farmerName={`${orderDetails?.data?.order?.farmerId?.firstName} ${orderDetails?.data?.order?.farmerId?.lastName}`}
          id={orderDetails.data.order._id}
          customerName={`${orderDetails?.data?.order?.customerId?.firstName} ${orderDetails?.data?.order?.customerId?.lastName}`}
          dateAndTime={orderDetails?.data?.order?.createdAt}
        />
      )}
    </>
  );
};

export default Cart;
