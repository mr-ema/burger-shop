import { handler } from '@/lib/api/apiHandler';
import { connectDB } from '@/middleware/mongodb';
import { validate } from '@/middleware/yup';
import { Customer } from '@/models/customer';
import { Delivery } from '@/models/delivery';
import { CustomerSchema } from '@/models/yup';
import { ICustomer, IDelivery } from '@/types/models';
import { NextApiRequest, NextApiResponse } from 'next';

const handleCase = {
  GET: async function(req: NextApiRequest, res: NextApiResponse) {
    const id = req.cookies['session'];
    await connectDB();
    const customer: ICustomer = await Customer.findById(id).exec();

    res.status(200).json(customer);
  },

  POST: async function(req: NextApiRequest, res: NextApiResponse) {
    const session = req.cookies['session'] as string;
    const data = req.body;
    await connectDB();
    await Customer.create({_id: session, ...data});
    res.status(200).json('created');
  },

  PUT: async function(req: NextApiRequest, res: NextApiResponse) {
    interface Data extends ICustomer, IDelivery {};

    const id = req.cookies['session'];
    const data: Data = req.body;

    const deliveryID = data.deliveries && data.deliveries[data.deliveries.length - 1];
    const delivery = { date: data.date, time: data.time };

    await connectDB()
    await Customer.findByIdAndUpdate(id, { ...data, step: 4 }).exec();

    if (deliveryID) {
      await Delivery.findByIdAndUpdate(deliveryID, delivery);
    }
    
    res.status(200).json('updated');
  }
}

export default validate( CustomerSchema, handler(handleCase) );