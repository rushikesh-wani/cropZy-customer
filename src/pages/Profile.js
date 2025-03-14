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
      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-darkCard dark:text-white">
        <div className="w-full inline-flex items-center gap-2">
          <div className="w-[20%] h-16 bg-slate-200 rounded-full">
            <img
              src={data?.data?.profileImg}
              alt={`${data?.data?.firstName} ${data?.data?.lastName}`}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-[60%]">
            <p className="text-xl font-semibold font-montserrat">
              {`${data?.data?.firstName} ${data?.data?.lastName}`}
            </p>
            <p className="text-sm text-gray-500">{data?.data?.email}</p>
          </div>
          <div className="w-[10%]">
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="text-red-600 bg-rose-100 p-2 rounded-full hover:bg-rose-200"
            >
              <LogOut className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-darkCard dark:text-white">
        <Link to={"/profile"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
            <UserCircle />
            My Profile
          </div>
        </Link>
        <hr />
        <Link to={"/profile/theme"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
            <SunMoon />
            Theme
          </div>
        </Link>
        <hr />
        <Link to={"/"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
            <Settings />
            Settings
          </div>
        </Link>
        <hr />
      </div>
      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-darkCard dark:text-white">
        <Link to={"/orders"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
            <ShoppingBag />
            My orders
          </div>
        </Link>
        <hr />
        <Link to={"/"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
            <History />
            Orders History
          </div>
        </Link>
        <hr />
        <Link to={"/"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
            <CircleOff />
            Cancelled orders
          </div>
        </Link>
        <hr />
      </div>
      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-darkCard dark:text-white">
        <Link to={"/"}>
          <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
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
          className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800"
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
