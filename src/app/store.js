import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducers, { cartMiddleware } from "../features/cart/cartSlice";
import categoriesReducer from "../features/categories/categorySlice";
import authReducer from "../features/auth/AuthSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducers,
    categories: categoriesReducer,
    auth: authReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(cartMiddleware),
});
