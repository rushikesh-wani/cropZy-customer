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
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* {Public Routes} */}
        <Route path="/login" element={<Login />} />

        {/* {Protected Routes} */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Categories />} />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="category/:category" element={<ProductsPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
