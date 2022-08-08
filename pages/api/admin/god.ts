import { handler } from '@/lib/api/apiHandler';
import { apiAuth } from '@/middleware/apiAuth';
import { connectDB } from '@/middleware/mongodb';
import { Cart } from '@/models/cart';
import { Customer } from '@/models/customer';
import { Delivery } from '@/models/delivery';
import { NextApiRequest, NextApiResponse } from 'next';

const handleCase = {
  GET: async function(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json('HELLO GOD');
  },

  DELETE: async function(req: NextApiRequest, res: NextApiResponse) {
    const secret = req.headers.authorization as string;

    if (secret === process.env.GODMODE_SECRET) {
      await connectDB();
      await Delivery.deleteMany({});
      await Customer.deleteMany({});
      await Cart.deleteMany({});
      res.status(200).json('YOU DID IT');
    }else throw new Error('YOU FAILED :C');

  }
}

export default apiAuth(handler(handleCase));