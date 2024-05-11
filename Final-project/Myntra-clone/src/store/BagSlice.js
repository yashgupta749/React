import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: ["001", "002"],
  reducers: {
    addtoBag: (state, action) => {
      state.push(action.payload);
    },
    removeFrombag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
