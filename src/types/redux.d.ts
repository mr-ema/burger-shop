import { ObjectId } from 'mongoose';

export interface CartProduct {
  _id: string,
  name: string,
  price: number,
  quantity: number,
}

export interface CartFromServer {
  _id: string,
  productID: CartProduct,
  quantity: number
}

export interface Product {
  _id: string,
  quantity: number
}

export interface ModQuantity {
  _id: string,
  quantity: number
}