import { createSlice } from "@reduxjs/toolkit";

const homeDataSlice = createSlice({
  name: "homeData",
  initialState: {
    data: {},
  },
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addData } = homeDataSlice.actions;
export default homeDataSlice.reducer;
