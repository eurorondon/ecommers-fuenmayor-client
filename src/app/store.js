import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducers, { cartMiddleware } from "../features/cart/cartSlice";
import categoriesReducer from "../features/categories/categorySlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducers,
    categories: categoriesReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(cartMiddleware),
});
