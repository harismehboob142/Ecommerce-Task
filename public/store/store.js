import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
import Productslice from "./productSlice";
const store = configureStore({
  reducer: {
    cart: Cartslice,
    product: Productslice,
  },
});
export default store;
