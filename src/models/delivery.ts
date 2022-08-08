import { IDelivery } from '@/types/models';
import mongoose from 'mongoose';

const DeliverySquema = new mongoose.Schema<IDelivery>({
  products: [{
    _id: { type: mongoose.Schema.Types.ObjectId },
    quantity: { type: Number, required: true }
  }],

  date:   { type: String, required: true },
  time:   { type: String, required: true },
  status: { type: String, default: 'PENDING'},
  
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  }
})

export const Delivery = mongoose.models.Delivery || mongoose.model<IDelivery>('Delivery', DeliverySquema);