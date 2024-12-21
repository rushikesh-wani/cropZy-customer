import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import AppStore from "./store/AppStore";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <Provider store={AppStore}>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <ToastContainer />
          <AppRoutes />
        </div>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
