import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    INCREASE_QUANTITY: (state, action) => {
      state.numberCart++
      state.Carts[action.payload].quantity++;
      return {
        ...state
      }
    }
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;