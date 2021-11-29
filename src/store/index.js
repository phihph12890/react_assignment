import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../slice/categorySlice';


const store = configureStore({
    reducer: {
        category: categorySlice
    }
})

export default store