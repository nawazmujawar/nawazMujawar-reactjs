import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  productCategories: [],
  selectedCategory: "All",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategories(state, action) {
      return { ...state, productCategories: action.payload };
    },
    setProductCategory(state, action) {
      return { ...state, selectedCategory: action.payload };
    },
  },
});

export const { getCategories, setProductCategory } = categorySlice.actions;

export default categorySlice.reducer;
