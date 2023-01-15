import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import vendorReducer from "../slices/vendorSlice";
import getAllProduct from "../slices/productSlice";
import buyerReducer from "../slices/buyerSlice";
export const store = configureStore({
  reducer: {
    auth: userReducer,
    vendor: vendorReducer,
    products: getAllProduct,
    buyers: buyerReducer,
  },
});
