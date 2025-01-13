import {
  ChevronDown,
  Home,
  LayoutDashboard,
  Search,
  ShoppingCart,
  UserCircle,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navColor = "#b6e5c7";
  const [tab, setTab] = useState("home");
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  const onClickHandler = (value) => {
    setTab(value);
  };
  return (
    <>
      <div className="relative p-2 bg-[#fff4e9] dark:bg-[#131518] dark:text-white">
        <div className="px-2 flex justify-between items-center">
          <Link to={"/"}>
            <p className="text-xl font-bold">cropZy</p>
          </Link>
          <Link to={"/profile"}>
            <div>
              <UserCircle className="size-7" />
            </div>
          </Link>
        </div>
        <div className="px-2 flex gap-x-1 items-center text-slate-700 dark:text-gray-400">
          <p className="text-sm">Jalgaon, Maharashtra</p>
          <ChevronDown className="size-4" />
        </div>
      </div>
      <div className="z-50 sticky top-0 p-2 bg-[#fff4e9] text-gray-600 dark:bg-[#131518] dark:text-white">
        <Search className="size-5 absolute left-4 top-5 dark:text-gray-500" />
        <div className="p-2 pl-8 bg-white border border-[#e5e7eb] rounded-lg dark:bg-black dark:text-gray-500">
          Search for "Aloo"
        </div>
      </div>

      <div className="z-50 w-full fixed bottom-0 right-0 left-0 p-2 bg-white grid grid-flow-col grid-rows-1 gap-2 text-sm font-medium dark:bg-[#131518] dark:text-white">
        <Link onClick={() => onClickHandler("home")} to={"/"}>
          <div
            className={
              (tab === "home" ? "text-violet-700" : "") +
              " flex flex-col items-center justify-center"
            }
          >
            <Home />
            <p>Home</p>
          </div>
        </Link>
        <Link onClick={() => onClickHandler("category")} to={"/category"}>
          <div
            className={
              (tab === "category" ? "text-violet-700" : "") +
              " flex flex-col items-center justify-center"
            }
          >
            <LayoutDashboard />
            <p>Category</p>
          </div>
        </Link>
        <Link onClick={() => onClickHandler("account")} to={"/cart"}>
          <div
            className={
              (tab === "account" ? "text-violet-700" : "") +
              " relative flex flex-col items-center justify-center"
            }
          >
            {cartItems.length > 0 ? (
              <p className="px-2 text-xs text-white bg-violet-700 absolute -top-1 right-[25%] rounded-xl">
                {cartItems.length}
              </p>
            ) : null}

            <ShoppingCart />
            <p>Cart</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
