import { handler } from '@/lib/api/apiHandler';
import { connectDB } from '@/middleware/mongodb';
import { validate } from '@/middleware/yup';
import { apiAuth } from '@/middleware/apiAuth';
import { Product } from '@/models/product';
import { ProductSchema } from '@/models/yup';
import type { IProduct } from '@/types/models';
import type { NextApiRequest, NextApiResponse } from 'next';

const handleCase = {
  POST: async (req: NextApiRequest, res: NextApiResponse) => {
    const data: IProduct = req.body;

    await connectDB(); // Connect To MongoDb
    await Product.create(data);
    res.status(200).json({message: 'Product Created'});
  }
}

export default validate( ProductSchema, apiAuth(handler(handleCase)) );