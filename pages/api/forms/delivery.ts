import { handler } from '@/lib/api/apiHandler';
import { connectDB } from '@/middleware/mongodb';
import { Cart } from '@/models/cart';
import { Customer } from '@/models/customer';
import { Delivery } from '@/models/delivery';
import { Product } from '@/models/product';
import { ICustomer, IDelivery } from '@/types/models';
import { NextApiRequest, NextApiResponse } from 'next';
import { formatData } from '../cart';

const handleCase = {
  GET: async function(req: NextApiRequest, res: NextApiResponse) {
    const id = req.cookies['session'];
    await connectDB();
    const customer: ICustomer = await Customer.findById(id).exec();

    if (customer.deliveries) {
      const deliveryIndex: number = customer.deliveries.length;
      const deliveryID = customer.deliveries[deliveryIndex - 1];
      const delivery = await Delivery.findById(deliveryID).exec();

      res.status(200).json(delivery);
    
    }else throw new Error('something went wrong')

  },
  
  POST: async function(req: NextApiRequest, res: NextApiResponse) {
    const data: IDelivery = req.body;
    const customerID = req.cookies['session'];
    
    await connectDB();
    
    const cart = await Cart.findOne({ customer: customerID })
      .populate({ path: 'products._id', model: Product }).exec();

    const products = formatData(cart);
    
    await Delivery.create({ ...data, customer: customerID, products: products }).then(
      (delivery: IDelivery) => {
        Customer.findById(customerID)
        .exec(
          (err, doc) => {
            if (err) return err;
            doc.step = 3;
            doc.deliveries.push(delivery._id);
            doc.save();
            res.status(200).json('created');
        });
      })
  
  }
}

export default handler(handleCase);