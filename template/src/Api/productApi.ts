import { Api } from "./Api";
import { ProductType, ContentType, CategoryType, StoreType } from "../DTO";
// A mock function to mimic making an async request for data
const convertApiToContentObject = (input: []) => {
  return input.map((value: any) => {
    let out: ContentType = {
      hash: value?.hash,
      link: value?.link,
    }
    return out;
  })
}

const convertApiToCategoryObject = (input: []) => {
  return input.map((value: any) => {
    let out: CategoryType = {
      id: value.id,
      parent_id: value.parent_id,
      top_parent_id: value.top_parent_id,
      description: value.description,
      title: value.title,

    }
    return out;
  })
}
const convertApiToStoreObject = (input: any) => {
  let out: StoreType = {
    id: input?.id,
    status: input?.status,
    title: input?.title,
    description: input?.description,
    phoneNumber: input?.phone_number,
    address: input?.address,
  }
  return out;
}

const convertApiToProductObjectArray = (input: []) => {
  return input.map((data: any) => convertApiToProductObject(data));
}
const convertApiToProductObject = (data: any) => {
  let out: ProductType = {
    id: data?.id,
    title: data?.title,
    description: data?.description,
    price: data?.price,
    off_price: data?.off_price,
    amount: data?.amount,
    contents: convertApiToContentObject(data?.contents),
    categories: convertApiToCategoryObject(data?.categories),
    store: convertApiToStoreObject(data?.store),

  }
  return out;
}

export function fetchProduct(id: number) {
  return new Promise<{ data: ProductType }>((resolve) => {

    const api = new Api({path: "/api/v1/user/product/" + id,method: "get"});
    return api.call().then((data: any) => {

      return resolve({
        data: convertApiToProductObject(data)
      });
    })
  });

}

export function fetchProducts(id: number = 2) {
  return new Promise<{ data: ProductType[] }>((resolve) => {

    const api = new Api({ path:"/api/v1/user/product",method:"get"});
    return api.call().then((data: any) => {

      return resolve({
        data: convertApiToProductObjectArray(data?.data)
      });
    })
  });

}
