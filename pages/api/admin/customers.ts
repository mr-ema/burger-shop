import { handler } from '@/lib/api/apiHandler';
import { connectDB } from '@/middleware/mongodb';
import { apiAuth } from '@/middleware/apiAuth';
import { Customer } from '@/models/customer';
import { Delivery } from '@/models/delivery';
import { ICustomer } from '@/types/models';
import { NextApiRequest, NextApiResponse } from 'next';

const handleCase = {
  GET: async function(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    const customers: ICustomer[] | any[] = await Customer.find({})
      .populate({ path: 'deliveries', model: Delivery });

    res.status(200).json(customers);
  },
}

export default apiAuth(handler(handleCase));