import { useQuery } from "@tanstack/react-query";
import {
  CircleOff,
  History,
  LogOut,
  Settings,
  ShoppingBag,
  SunMoon,
  Trash,
  UserCircle,
} from "lucide-react";
import React from "react";
import Details from "../components/skeleton/Details";
import { Link, useNavigate } from "react-router-dom";
import { viewProfile } from "../services/ProfileServices";
import { logout } from "../services/AuthServices";

const Profile = () => {
  const navigate = useNavigate();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["profileData"],
    queryFn: viewProfile,
    retry: false,
  });
  console.log(data);
  console.log(error);

  if (isPending) return <Details />;
  if (isError) {
    navigate("/login");
    const errorMessage = error?.message || "Something went wrong!";
    return (
      <p className="text-center text-red-700 font-montserrat font-medium">
        {errorMessage}
      </p>
    );
  }
  return (
    <>
      <div className="font-palanquin font-medium text-xl dark:text-white">
        <span> Welcome back,</span>
        <span className="text-violet-800">{` ${data?.data?.firstName} ${data?.data?.lastName}!`}</span>
      </div>
      <div className="font-palanquin bg-white px-4 py-2 rounded-xl dark:bg-darkCard dark:text-white">
        <div className="w-full inline-flex justify-between items-center gap-2">
          <div className="flex gap-2 justify-center items-center">
            <img
              src={data?.data?.profileImg}
              alt={`${data?.data?.firstName} ${data?.data?.lastName}`}
              className="size-20 rounded-full object-cover"
            />
            <div className="">
              <p className="text-xl font-semibold font-montserrat">
                {`${data?.data?.firstName} ${data?.data?.lastName}`}
              </p>
              <p className="text-sm text-gray-500">{data?.data?.email}</p>
            </div>
          </div>

          <div className="">
            <button
              onClick={async () => {
                await logout();
                navigate("/login");
              }}
              className="text-red-600 bg-rose-100 p-2 rounded-full hover:bg-rose-200 dark:bg-rose-500 dark:text-white"
            >
              <LogOut className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-darkCard dark:text-white">
        <Link to={"/profile/user"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800 dark:hover:bg-violet-600/20 dark:hover:text-white">
            <UserCircle />
            My Profile
          </div>
        </Link>
        <hr />
        <Link to={"/profile/theme"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800 dark:hover:bg-violet-600/20 dark:hover:text-white">
            <SunMoon />
            Theme
          </div>
        </Link>
        <hr />
        <Link to={"/"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800 dark:hover:bg-violet-600/20 dark:hover:text-white">
            <Settings />
            Settings
          </div>
        </Link>
        <hr />
      </div>
      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-darkCard dark:text-white">
        <Link to={"/orders"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800 dark:hover:bg-violet-600/20 dark:hover:text-white">
            <ShoppingBag />
            My orders
          </div>
        </Link>
        <hr />
        <Link to={"/order-history"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800 dark:hover:bg-violet-600/20 dark:hover:text-white">
            <History />
            Orders History
          </div>
        </Link>
        <hr />
        <Link to={"/order-cancelled"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800 dark:hover:bg-violet-600/20 dark:hover:text-white">
            <CircleOff />
            Cancelled orders
          </div>
        </Link>
        <hr />
      </div>
      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-darkCard dark:text-white">
        <Link to={"/"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800 dark:hover:bg-violet-600/20 dark:hover:text-white">
            <Trash />
            Delete account
          </div>
        </Link>
        <hr />
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800 dark:hover:bg-violet-600/20 dark:hover:text-white"
        >
          <LogOut />
          <p className="text-red-600">Logout</p>
        </button>
        <hr />
      </div>
    </>
  );
};

export default Profile;
