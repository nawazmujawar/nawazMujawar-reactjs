import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slice/categorySlice";
import favoriteReducer from "../slice/favoriteSlice";
import loadingReducer from "../slice/loadingSlice";
import productReducer from "../slice/productSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    favorite: favoriteReducer,
    product: productReducer,
    loading: loadingReducer,
  },
});

export default store;
