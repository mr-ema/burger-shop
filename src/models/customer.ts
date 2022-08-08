import { ICustomer } from '@/types/models';
import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new mongoose.Schema<ICustomer>({
  firstName:  { type: String, required: true },
  lastName:   { type: String, required: true },
  email:      { type: String, required: true },
  direction:  { type: String, required: true },
  step:       { type: Number, required: true },

  deliveries: [{ type: Schema.Types.ObjectId, ref: 'Delivery' }],

  cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
})

export const Customer = mongoose.models.Customer || mongoose.model<ICustomer>('Customer', CustomerSchema);