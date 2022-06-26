import {combineReducers } from '@reduxjs/toolkit';


import {BasketReducer } from './Entities/Basket';
import {ProductReducer} from './Entities/Product';
import {ProductsReducer} from './Entities/Products';

const rootReducer = combineReducers({
    basket: BasketReducer,
    product: ProductReducer,
    products: ProductsReducer,
  });
export default rootReducer;