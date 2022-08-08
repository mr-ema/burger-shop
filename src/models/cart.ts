import mongoose from 'mongoose';
import { ICart } from '@/types/models';

const CartSchema = new mongoose.Schema<ICart>({
  products: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 }
    }
  ],
  
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  }
})

export const Cart = mongoose.models.Cart || mongoose.model<ICart>('Cart', CartSchema);