import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../slice/categorySlice';
import productSlice from '../slice/productSlice';


const store = configureStore({
    reducer: {
        category: categorySlice,
        product: productSlice
    }
})

export default store