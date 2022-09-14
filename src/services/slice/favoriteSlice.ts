import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.push(action.payload);
    },
    removeFavorite(state, action) {
      return state.filter((product: any) => product._id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
