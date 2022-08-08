import { handler } from '@/lib/api/apiHandler';
import { connectDB } from '@/middleware/mongodb';
import { apiAuth } from '@/middleware/apiAuth';
import { NextApiRequest, NextApiResponse } from 'next';
import { ICart } from '@/types/models';
import { Cart } from '@/models/cart';

const handleCase = {
  GET: async function(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    const carts: ICart[] | any[] = await Cart.find({});

    res.status(200).json(carts);
  },

  DELETE: async function(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    await Cart.deleteMany({ 'products.0': { $exists: false } });
    
    res.status(200).json('DELETED');
  }
}

export default apiAuth(handler(handleCase));