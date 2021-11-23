import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk('crypto/getData', async () => {

})

export const cryptoSlice = createSlice({
    name: 'crypto',
    initialState: {
        data: [],
        status: '',
    },
    extraReducers: builder => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export default cryptoSlice.reducer;