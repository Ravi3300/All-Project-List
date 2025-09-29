import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.jsx"; // Import default export

export const store = configureStore({
  reducer: {  // ✅ Reducer should be inside an object
    counter: counterReducer,
  },
});