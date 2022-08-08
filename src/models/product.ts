import mongoose from 'mongoose';
import { IProduct } from '@/types/models';

const validateStock = (stock: number | null | string) => {
  const defaultStock = -1;
  
  if (!stock) return defaultStock;

  return stock;
}

const ProductSquema = new mongoose.Schema<IProduct>({
  name: { 
    type: String, required: true,
  },
  price: { 
    type: Number, required: true,
  },
  stock: {
    type: Number, set: validateStock,
  },
  description: { 
    type: String, required: true,
  },
  
}, { timestamps: true });

export const Product = mongoose.models.Product || mongoose.model('Product', ProductSquema);