import { productSlice } from "../data/productSlice"
import cartSlice from "../data/cartSlice"
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer
    }
})