import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slices/productSlice.js'
import cartReducer from '../slices/cartSlice.js';
import userReducer from '../slices/userSlice.js';
import orderReducer from '../slices/orderSlice.js';

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        user: userReducer,
        orders: orderReducer,
    },
});

export default store;
