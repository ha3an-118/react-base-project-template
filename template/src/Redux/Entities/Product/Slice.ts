import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './State';

import { fetchProduct } from '../../../Api';

export const fetchProductById = createAsyncThunk(
  'product/fetchProduct',
  async (amount: number) => {
    const response = await  fetchProduct(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },
  extraReducers: (builder) => {
    builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  //     .addCase(incrementAsync.rejected, (state) => {
  //       state.status = 'failed';
  //     });
  },
});

// export const { add } = ProductSlice.actions;


export const ProductReducer = ProductSlice.reducer;