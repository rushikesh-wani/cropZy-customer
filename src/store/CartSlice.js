import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // state.items.push(action.payload);
      const item = action.payload;
      const isItemExisted = state.items.find((i) => i._id == item._id);
      if (isItemExisted) {
        isItemExisted.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    incrementItem: (state, action) => {
      const itemId = action.payload;
      // console.log(itemId);
      const item = state.items.find((i) => i._id == itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((i) => i._id == itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((i) => i._id != itemId);
      }
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, incrementItem, decrementItem } =
  cardSlice.actions;
export default cardSlice.reducer;
