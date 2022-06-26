import {ProductStoreType} from './Type';

export const initialState : ProductStoreType = {
    value : {
        id: 12,
        title: "tittle",
        description: "some ",
        price: 0,
        off_price: 0,
        amount: 0,
        contents: [],
        categories: [],
    },
    status: 'idle',
}