import { handler } from '@/lib/api/apiHandler';
import { connectDB } from '@/middleware/mongodb';
import { Product } from '@/models/product';
import type { IProduct } from '@/types/models';
import type { NextApiRequest, NextApiResponse } from 'next';

const handleCase = {
  GET: async (req: NextApiRequest, res: NextApiResponse) => {
    await connectDB(); // Connect to mongodb
    
    // Return all products from database
    const data: IProduct[] = await Product.find({}).exec();
    
    // Check if data is return
    if (data.length < 1 || !data) res.status(200).json({message: 'No Items'});
    else res.status(200).json(data);
  }
}

export default handler(handleCase);