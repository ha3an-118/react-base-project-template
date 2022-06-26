import { CategoryType , ContentType , StoreType } from "./index"

export type ProductType = {
    id: number,
    title: string,
    description: string,
    price: number,
    off_price: number,
    amount: number,
    categories: CategoryType[],
    contents: ContentType[],
    store?: StoreType,
}