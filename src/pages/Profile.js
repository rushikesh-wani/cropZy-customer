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
        Welcome back,
        <span className="text-violet-800">{` ${data?.data?.firstName} ${data?.data?.lastName}!`}</span>
      </div>
      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-[#131518] dark:text-white">
        <div className="w-full inline-flex items-center gap-2">
          <div className="w-[20%] h-16 bg-slate-200 rounded-lg">
            <img
              src={data?.data?.profileImg}
              alt={`${data?.data?.firstName} ${data?.data?.lastName}`}
              className="w-full h-full object-cover"
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

      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-[#131518] dark:text-white">
        <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
          <UserCircle />
          <Link to={"/"}>My Profile</Link>
        </div>
        <hr />
        <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
          <SunMoon />
          <Link to={"/profile/theme"}>Theme</Link>
        </div>
        <hr />
        <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
          <Settings />
          <Link to={"/"}>Settings</Link>
        </div>
        <hr />
      </div>
      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-[#131518] dark:text-white">
        <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
          <ShoppingBag />
          <Link to={"/orders"}>My orders</Link>
        </div>
        <hr />
        <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
          <History />
          <Link to={"/"}>Orders History</Link>
        </div>
        <hr />
        <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
          <CircleOff />
          <Link to={"/"}>Cancelled orders</Link>
        </div>
        <hr />
      </div>
      <div className="font-palanquin bg-white p-4 rounded-xl dark:bg-[#131518] dark:text-white">
        <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
          <Trash />
          <Link to={"/"}>Delete account</Link>
        </div>
        <hr />
        <div className="px-1 py-2 w-full inline-flex items-center gap-2 hover:bg-violet-50 hover:text-violet-800">
          <LogOut />
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="text-red-600"
          >
            Logout
          </button>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Profile;
