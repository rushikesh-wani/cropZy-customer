import React from "react";
import { createBrowserRouter } from "react-router-dom";
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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <DetailsLayout />,
    children: [
      {
        path: "/farmer/:id",
        element: <Farmer />,
        handle: { nav: "Farmer" },
      },
      {
        path: "/category",
        element: <Categories />,
        handle: { nav: "Category" },
      },
      {
        path: "/category/:category",
        element: <Categories />,
        handle: { nav: "Category" },
      },

      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
        handle: { nav: "Profile" },
      },
      {
        path: "/profile/theme",
        element: (
          <ProtectedRoute>
            <Theme />
          </ProtectedRoute>
        ),
        handle: { nav: "Theme" },
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
        handle: { nav: "My Cart" },
      },
      {
        path: "/orders",
        element: (
          <ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>
        ),
        handle: { nav: "My Orders" },
      },
      {
        path: "/recipe",
        element: (
          <ProtectedRoute>
            <Recipe />
          </ProtectedRoute>
        ),
        handle: { nav: "AI Recipe" },
      },
    ],
  },
  {
    path: "/:itemId",
    element: <Product />,
  },
  // {
  //   path: "/farmer/:id",
  //   element: (
  //     <DetailsLayout nav={"Farmer"}>
  //       <Farmer />
  //     </DetailsLayout>
  //   ),
  // },
  // {
  //   path: "/:itemId",
  //   element: <Product />,
  // },
  // {
  //   path: "/category",
  //   element: (
  //     <DetailsLayout nav={"Category"}>
  //       <Categories />
  //     </DetailsLayout>
  //   ),
  // },
  // {
  //   path: "/category/:category",
  //   element: (
  //     <DetailsLayout nav={"Category"}>
  //       <Categories />
  //     </DetailsLayout>
  //   ),
  // },
  // {
  //   path: "/profile",
  //   element: (
  //     <ProtectedRoute>
  //       <DetailsLayout nav={"Profile"}>
  //         <Profile />
  //       </DetailsLayout>
  //     </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/profile/theme",
  //   element: (
  //     <ProtectedRoute>
  //       <DetailsLayout nav={"Theme"}>
  //         <Theme />
  //       </DetailsLayout>
  //     </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/recipe",
  //   element: (
  //     <ProtectedRoute>
  //       <DetailsLayout nav={"Recipe"}>
  //         <Recipe />
  //       </DetailsLayout>
  //     </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/cart",
  //   element: (
  //     <DetailsLayout nav={"My Cart"}>
  //       <Cart />
  //     </DetailsLayout>
  //   ),
  // },
  // {
  //   path: "/orders",
  //   element: (
  //     <ProtectedRoute>
  //       <DetailsLayout nav={"My Orders"}>
  //         <MyOrders />
  //       </DetailsLayout>
  //     </ProtectedRoute>
  //   ),
  // },
]);

export default appRouter;
