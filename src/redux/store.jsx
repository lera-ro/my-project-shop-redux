import { configureStore } from "@reduxjs/toolkit";
import cosmetics from './cosmeticsSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        cosmetics,
        cart
    }
})