import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts(state, action) {
      return action.payload;
    },
    removeProduct(state, action) {
      return state.filter((product: any) => product._id !== action.payload);
    },
  },
});

export const { getProducts, removeProduct } = productSlice.actions;

export default productSlice.reducer;
