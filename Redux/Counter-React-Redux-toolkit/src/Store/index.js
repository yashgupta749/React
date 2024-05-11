import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrememt: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;

export default counterStore;

// const INITIAL_VALUE = {
//   counter: 0,
//   privacy: false,
// };

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "INCREMENT") {
//     return { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { ...store, counter: store.counter - 1 };
//   } else if (action.type === "ADD") {
//     return { ...store, counter: store.counter + Number(action.payload.num) };
//   } else if (action.type === "SUBTRACT") {
//     return { ...store, counter: store.counter - Number(action.payload.num) };
//   } else if (action.type === "PRIVACY_TOGGLE") {
//     return { ...store, privacy: !store.privacy };
//   }
//   return store;
// };
