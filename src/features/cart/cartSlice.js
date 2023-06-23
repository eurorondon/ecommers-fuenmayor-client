import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.data._id === newItem.data._id
      );
      if (existingItemIndex === -1) {
        state.cartItems.push(newItem);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

// // Función para almacenar los datos del carrito en el localStorage
// const saveCartItemsToLocalStorage = (cartItems) => {
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
// };
// // Middleware para almacenar los datos del carrito en el localStorage después de cada acción
// export const cartMiddleware = (store) => (next) => (action) => {
//   const result = next(action);

//   if (action.type.startsWith("cart/")) {
//     const { cartItems } = store.getState().cart;
//     saveCartItemsToLocalStorage(cartItems);
//   }

//   return result;
// };

export default cartSlice.reducer;
