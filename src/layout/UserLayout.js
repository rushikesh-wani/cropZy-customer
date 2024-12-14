import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="md:mx-20 lg:mx-52">
      <Navbar />
      <div id="layout-wrapper" className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
