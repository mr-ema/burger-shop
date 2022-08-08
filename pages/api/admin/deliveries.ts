import { handler } from '@/lib/api/apiHandler';
import { connectDB } from '@/middleware/mongodb';
import { apiAuth } from '@/middleware/apiAuth';
import { Delivery } from '@/models/delivery';
import { NextApiRequest, NextApiResponse } from 'next';
import { IDelivery } from '@/types/models';
import { Product } from '@/models/product';

const handleCase = {
  GET: async function(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    const deliveries: IDelivery[] | any[] = await Delivery.find({})
      .populate({ path: 'products', model: Product });

    res.status(200).json(deliveries);
  }
}

export default apiAuth(handler(handleCase));