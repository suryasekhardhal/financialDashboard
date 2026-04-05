import { configureStore } from "@reduxjs/toolkit";
import financeReducer from "../features/financeSlice";
import themeReducer from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    finance: financeReducer,
    theme: themeReducer,

  },
});