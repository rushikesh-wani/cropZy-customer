import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/Home";
import ProductsPage from "../components/ProductsPage";
import Login from "../pages/Login";
import Categories from "../pages/Categories";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Farmer from "../pages/Farmer";
import Items from "../pages/Items";
import DetailsLayout from "../layout/DetailsLayout";
import MyOrders from "../pages/MyOrders";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* {Public Routes} */}
        <Route path="/login" element={<Login />} />
        <Route path="/farmer/:id" element={<Farmer />} />
        <Route path="/:itemId" element={<Product />} />
        {/* <Route path="cart" element={<Cart />} /> */}
        {/* {Protected Routes} */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Categories />} />
          <Route path="category/:category" element={<Categories />} />
          {/* <Route path="category/:category" element={<Items />} /> */}
        </Route>
        <Route
          path="/profile"
          element={
            <DetailsLayout nav={"Profile"}>
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            </DetailsLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <DetailsLayout nav={"My Cart"}>
              <Cart />
            </DetailsLayout>
          }
        />
        <Route
          path="/orders"
          element={
            <DetailsLayout nav={"My Orders"}>
              <MyOrders />
            </DetailsLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
