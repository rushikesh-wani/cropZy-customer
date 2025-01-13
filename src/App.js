import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import AppStore from "./store/AppStore";
import { initializeDarkMode } from "./utils/DarkMode";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/AppRoutes";

const App = () => {
  const queryClient = new QueryClient();
  useEffect(() => {
    window.scrollTo(0, 0);
    initializeDarkMode();
  }, []);
  return (
    <Provider store={AppStore}>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <ToastContainer />
          <RouterProvider router={appRouter} />
        </div>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
