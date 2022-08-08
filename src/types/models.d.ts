import { Date, ObjectId } from 'mongoose';
import { CartProduct } from './redux';

// Product =====================================
export interface IProduct {
  _id: ObjectId,
  name: string,
  price: number,
  stock: number,
  description: string,
  createdAt: Date,
  updatedAt: Date
}

// Cart ========================================
export interface ICart {
  _id: ObjectId,
  products: [{ _id: ObjectId, quantity: number }],
  customer: ObjectId,
}

// Customer ====================================
export interface ICustomer {
  _id: ObjectId,
  firstName: string,
  lastName: string,
  email: string,
  direction: string,
  step: number,
  deliveries?: IDelivery[],
  cart?: ICart
}

// Delivery ====================================
export interface IDelivery {
  _id: ObjectId,
  products: [{ _id: ObjectId, quantity: number }],
  date: string,
  time: string,
  status: 'PENDING'|'ON_ROUTE'|'CANCELED'|'DELIVERED',
  customer: ObjectId,
}