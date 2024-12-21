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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="font-palanquin bg-white p-4 rounded-xl">
        {" "}
        <div className="w-full inline-flex items-center gap-2">
          <div className="w-[30%] h-16 bg-slate-200 rounded-lg">
            <img
              src=""
              alt="profile-pic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[70%]">
            <p className="text-xl font-semibold font-montserrat">
              Rushikesh Wani
            </p>
            <p className="text-sm text-gray-500">email@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="font-palanquin bg-white p-4 rounded-xl">
        <div className="my-2 inline-flex items-center gap-2">
          <UserCircle />
          <Link to={"/"}>My Profile</Link>
        </div>
        <hr />
        <div className="my-2 inline-flex items-center gap-2">
          <SunMoon />
          <Link to={"/"}>Theme</Link>
        </div>
        <hr />
        <div className="my-2 inline-flex items-center gap-2">
          <Settings />
          <Link to={"/"}>Settings</Link>
        </div>
        <hr />
      </div>
      <div className="font-palanquin bg-white p-4 rounded-xl">
        <div className="my-2 inline-flex items-center gap-2">
          <ShoppingBag />
          <Link to={"/orders"}>My orders</Link>
        </div>
        <hr />
        <div className="my-2 inline-flex items-center gap-2">
          <History />
          <Link to={"/"}>Orders History</Link>
        </div>
        <hr />
        <div className="my-2 inline-flex items-center gap-2">
          <CircleOff />
          <Link to={"/"}>Cancelled orders</Link>
        </div>
        <hr />
      </div>
      <div className="font-palanquin bg-white p-4 rounded-xl">
        <div className="my-2 inline-flex items-center gap-2">
          <Trash />
          <Link to={"/"}>Delete account</Link>
        </div>
        <hr />
        <div className="my-2 inline-flex items-center gap-2">
          <LogOut />
          <Link to={"/"} className="text-red-600">
            Logout
          </Link>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Profile;
