import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import homeDataReducer from "./HomeDataSlice";

const AppStore = configureStore({
  reducer: {
    cart: cartReducer,
    homeData: homeDataReducer,
  },
});

export default AppStore;
