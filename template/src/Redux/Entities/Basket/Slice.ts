import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Basket, BasketItem } from './Type';

import { initialState } from './State';
import { ProductType } from '../../../DTO';
import Lodash from 'lodash';

const findProductInList = (list: BasketItem[],product:ProductType) =>
{
  return Lodash.find(list,(object: BasketItem)=>
  {
    return object.product.id == product.id;
  });
}
const removeProductInList = (list: BasketItem[],product:ProductType) =>{
  return Lodash.remove(list,(object: BasketItem)=>
  {
    return object.product.id == product.id;
  });
}

export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increase: (state: Basket ,action: PayloadAction<ProductType>) => {
      const temp = findProductInList(state.value,action.payload);
      if( temp !== undefined){
        if(temp.product.amount > temp.counter){
          temp.counter+=1;
        }
      }
    },
    decrease: (state: Basket ,action: PayloadAction<ProductType>) => {
      const temp = findProductInList(state.value,action.payload);
      if( temp !== undefined){
        if(temp.counter > 0){
          temp.counter-=1;
        }
      }
    },
    add: (state: Basket ,action: PayloadAction<ProductType>) => {
      const temp = findProductInList(state.value,action.payload);
      if(temp == undefined){
        state.value.push({
          product: action.payload,
          counter: 1,
        });
      }
    },
    remove: (state: Basket ,action: PayloadAction<ProductType>) => {
      removeProductInList(state.value,action.payload);
    }
  },
});

export const { add, increase,decrease , remove  } = BasketSlice.actions;


export const BasketReducer = BasketSlice.reducer;