import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="pb-14 lg:pb-0 max-w-full mx-auto dark:bg-[#252525]">
      <Navbar />
      <div
        id="layout-wrapper"
        className="max-w-full mx-auto lg:max-w-6xl lg:mx-44"
      >
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
