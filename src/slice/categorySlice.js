import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from '../api/categoryApi';


//initialState
const initialState = {
    data: [],
    error: null,
    loading: false,
};


//actions
export const Category_create = createAsyncThunk(
    "Category_create",
    async (category, thunkApi) => {
        try {
            const { data } = await categoryApi.add(category);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);
export const Category_list = createAsyncThunk(
    "Category_list",
    async (thunkApi) => {
        try {
            const { data } = await categoryApi.list();
            return data;
        } catch (error) {
            return error;
        }
    }
);

export const Category_remove = createAsyncThunk(
    "Category_remove",
    async (category, thunkApi) => {
        try {
            const { data } = await categoryApi.remove(category);
            return data;
        } catch (error) {
            return error;
        }
    }
);

//create Slice
const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(Category_list.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            Category_list.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error;
            }
        );
        builder.addCase(
            Category_list.fulfilled,
            (state, action) => {
                state.loading = false;
                state.data = action.payload;
            }
        );

        builder.addCase(Category_remove.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            Category_remove.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error;
            }
        );
        builder.addCase(
            Category_remove.fulfilled,
            (state, action) => {
                state.loading = false;

                let index = state.data.findIndex(
                    (item) => item._id === action.payload.data._id
                );
                state.data.splice(index, 1);
            }
        );
    }
})

export default categorySlice.reducer;
