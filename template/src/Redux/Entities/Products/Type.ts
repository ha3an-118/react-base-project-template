import {ProductType} from '../../../DTO';
export type ProductsStoreType = {
    value: ProductType[];
    //pagination info
    status: 'idle' | 'loading' | 'failed';
    
}