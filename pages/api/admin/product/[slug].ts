import { handler } from '@/lib/api/apiHandler';
import { apiAuth } from '@/middleware/apiAuth';
import { connectDB } from '@/middleware/mongodb';
import { validate } from '@/middleware/yup';
import { Product } from '@/models/product';
import { ProductSchema } from '@/models/yup';
import { IProduct } from '@/types/models';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

const handleCase = {
  DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
    const id: string = req.query.slug as string;

    // Check if id exits and if is a valid id
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      await connectDB();
      await Product.findByIdAndDelete(id).exec();
      res.status(200).json({ message: 'Deleted successfully' })
    }else {
      throw new Error('Invalid ID');
    }
  },
  PUT: async (req: NextApiRequest, res: NextApiResponse) => {
    const id: string = req.query.slug as string;
    const data: Partial<IProduct> = req.body;
    
    // Check if id exits and if is a valid id
    if (id && mongoose.Types.ObjectId.isValid(id)) {
      await connectDB();
      const product = await Product.findByIdAndUpdate(id, data).exec();
      
      res.status(200).json(product);
    }else {
      throw new Error('Invalid ID');
    }
  }
}

export default validate( ProductSchema, apiAuth(handler(handleCase)) );