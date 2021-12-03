import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from '../api/userApi';

//initialState
const initialState = {
    data: [],
    error: null,
    loading: false,
};


//actions
export const User_list = createAsyncThunk(
    "User_list",
    async (thunkApi) => {
        try {
            const { data } = await userApi.list();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);
export const User_remove = createAsyncThunk(
    "User_remove",
    async (user, thunkApi) => {
        try {
            const { data } = await userApi.remove(user);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);


//create Slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //list
        builder.addCase(User_list.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            User_list.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error;
            }
        );
        builder.addCase(
            User_list.fulfilled,
            (state, action) => {
                state.loading = false;
                state.data = action.payload;
            }
        );

        //remove
        builder.addCase(User_remove.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            User_remove.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error;
            }
        );
        builder.addCase(
            User_remove.fulfilled,
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

export default userSlice.reducer;