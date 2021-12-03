import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../slice/categorySlice';
import productSlice from '../slice/productSlice';
import userSlice from '../slice/userSlice';


const store = configureStore({
    reducer: {
        category: categorySlice,
        product: productSlice,
        user: userSlice
    }
})

export default store