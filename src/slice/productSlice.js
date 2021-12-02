import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from '../api/productApi';

//initialState
const initialState = {
    data: {
        products: [],
        productsFilter: []
    },
    error: null,
    loading: false,
};


//actions
export const Product_create = createAsyncThunk(
    "Product_create",
    async (product, thunkApi) => {
        try {
            const { data } = await productApi.add(product);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);
export const Product_list = createAsyncThunk(
    "Product_list",
    async (thunkApi) => {
        try {
            const { data } = await productApi.list();
            return data;
        } catch (error) {
            return error;
        }
    }
);
export const Product_remove = createAsyncThunk(
    "Product_remove",
    async (product, thunkApi) => {
        try {
            const { data } = await productApi.remove(product);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);
export const Product_update = createAsyncThunk(
    "Product_update",
    async (product, thunkApi) => {
        try {
            const { data } = await productApi.update(product._id, product);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

//create Slice
const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //create
        builder.addCase(Product_create.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            Product_create.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error;
            }
        );
        builder.addCase(
            Product_create.fulfilled,
            (state, action) => {
                state.loading = false;
                state.data.push(action.payload);
            }
        );

        //list
        builder.addCase(Product_list.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            Product_list.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error;
            }
        );
        builder.addCase(
            Product_list.fulfilled,
            (state, action) => {
                console.log(action)
                state.loading = false;
                state.data.products = action.payload;
            }
        );

        //remove
        builder.addCase(Product_remove.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            Product_remove.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error;
            }
        );
        builder.addCase(
            Product_remove.fulfilled,
            (state, action) => {
                state.loading = false;
                let index = state.data.findIndex(
                    (item) => item._id === action.payload.data._id
                );
                state.data.splice(index, 1);
            }
        );

        //update
        builder.addCase(Product_update.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            Product_update.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error;
            }
        );
        builder.addCase(
            Product_update.fulfilled,
            (state, action) => {
                state.loading = false;
                console.log(action.payload)
                const index = state.data.findIndex((item) => {
                    return item._id === action.payload._id;
                });
                state.data[index] = {
                    ...state.data[index],
                    ...action.payload
                };
            }
        );
    }
})

export default ProductSlice.reducer;