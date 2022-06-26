import {ProductType} from '../../../DTO';
export type ProductStoreType = {
    value: ProductType;
    status: 'idle' | 'loading' | 'failed';
    
}