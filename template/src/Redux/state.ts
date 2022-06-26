
import type {Basket} from './Entities/Basket';
import type {ProductStoreType} from './Entities/Product'
import type { ProductsStoreType } from './Entities/Products';
export type RootState ={
    basket: Basket,
    product: ProductStoreType,
    products: ProductsStoreType,
}