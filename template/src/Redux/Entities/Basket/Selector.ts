import { RootState } from '../../../Redux/store';

export const selectBasket = (state: RootState) => state.basket.value;

export const selectTotalCounter = (state: RootState) => {
    var counter = 0;
    state.basket.value.forEach((BasketItem) =>{
        counter +=BasketItem.counter;
    } );
    return counter;
}
export const selectTotalPaymentAmount = (state: RootState) => {
    var counter = 0;
    state.basket.value.forEach((BasketItem) =>{
        counter +=BasketItem.counter*BasketItem.product.off_price;
    } );
    return counter;
}

export const selectTotalAmount = (state: RootState) => {
    var counter = 0;
    state.basket.value.forEach((BasketItem) =>{
        counter +=BasketItem.counter*BasketItem.product.price;
    } );
    return counter;
}
