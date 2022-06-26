import { ProductType } from "../../../DTO";

export type BasketItem ={
    product: ProductType,
    counter: number
}
export type Basket = {
    value: BasketItem[]
    status: 'idle' | 'loading' | 'failed';
};