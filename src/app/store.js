import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducers, { cartMiddleware } from "../features/cart/cartSlice";
import categoriesReducer from "../features/categories/categorySlice";
import authReducer from "../features/auth/AuthSlice";
import userReducer from "../features/auth/UserSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducers,
    categories: categoriesReducer,
    auth: authReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(cartMiddleware),
});
