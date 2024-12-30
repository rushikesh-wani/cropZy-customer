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
import Theme from "../components/Theme";
import Recipe from "../pages/Recipe";
import Signup from "../pages/Signup";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/farmer/:id"
          element={
            <DetailsLayout nav={"Farmer"}>
              <Farmer />
            </DetailsLayout>
          }
        />
        <Route path="/:itemId" element={<Product />} />
        <Route
          path="category"
          element={
            <DetailsLayout nav={"Category"}>
              <Categories />
            </DetailsLayout>
          }
        />
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="category/:category" element={<Items />} /> */}
        </Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <DetailsLayout nav={"Profile"}>
                <Profile />
              </DetailsLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile/theme"
          element={
            <ProtectedRoute>
              <DetailsLayout nav={"Theme"}>
                <Theme />
              </DetailsLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipe"
          element={
            <ProtectedRoute>
              <DetailsLayout nav={"Recipe"}>
                <Recipe />
              </DetailsLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="category/:category"
          element={
            <DetailsLayout nav={"Category"}>
              <Categories />
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
            <ProtectedRoute>
              <DetailsLayout nav={"My Orders"}>
                <MyOrders />
              </DetailsLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
