import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice';
import category from './categorySlice';

const store = configureStore({
  reducer: {
    cart,
    category
  },
});

export default store;