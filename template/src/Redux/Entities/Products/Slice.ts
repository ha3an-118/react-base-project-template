import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './State';

import {  fetchProducts as fetchProductsApi } from '../../../Api';

export const fetchProducts = createAsyncThunk(
  'products/fetchProduct',
  async (amount: number) => {
    const response = await  fetchProductsApi(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const ProductsSlice = createSlice({
  name: 'Products',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },
  extraReducers: (builder) => {
    builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  //     .addCase(incrementAsync.rejected, (state) => {
  //       state.status = 'failed';
  //     });
  },
});

// export const { add } = ProductSlice.actions;


export const ProductsReducer = ProductsSlice.reducer;