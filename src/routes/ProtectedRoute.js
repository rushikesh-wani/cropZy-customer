// // src/components/ProtectedRoute.js
// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { api } from "../services/api";

// const ProtectedRoute = ({ children }) => {
//   const [success, setSuccess] = useState(false);
//   useEffect(() => {
//     const checkUser = async () => {
//       try {
//         const res = await api.get("/protected");
//         console.log(res?.data);
//         if (res?.status === 200) {
//           setSuccess(true);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     checkUser();
//   }, []);

//   // if (!token) {
//   //   // If no token exists, redirect to login
//   //   return <Navigate to="/login" replace />;
//   // }

//   if (success) {
//     return children;
//   } else {
//     return <Navigate to="/login" replace />;
//   }
//   // (success) ? { return children} :  {return <Navigate to="/login" replace />}
// };

// export default ProtectedRoute;

// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
