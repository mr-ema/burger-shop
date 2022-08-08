import { handler } from '@/lib/api/apiHandler';
import { connectDB } from '@/middleware/mongodb';
import { Cart } from '@/models/cart';
import { Product } from '@/models/product';
import { ICart, IProduct } from '@/types/models';
import { CartProduct } from '@/types/redux';
import mongoose, { ObjectId } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

type Product = { _id: string | ObjectId, quantity: number }
type PopulatedProduct = {  _id: IProduct, quantity: number }
type PopulatedCart = {
  _id: ObjectId,
  products: PopulatedProduct[]
  customer: ObjectId 
}

const handleCase = {
  GET: async (req: NextApiRequest, res: NextApiResponse) => {
    const session: string = req.cookies['session'] as string;

    if (!session) throw new Error("can't get session cookie");

    await connectDB(); // Connect to mongodb

    const data = await Cart.findOne({ customer: session })
      .populate({ path: 'products._id', model: Product });
  
    if (!data) throw new Error("can't get cart from dataBase");
    
    const formatedData = formatData(data);
    res.status(200).json(formatedData);
  },

  POST: async (req: NextApiRequest, res: NextApiResponse) => {
    const session: string = req.cookies['session'] as string;
    
    await connectDB(); // Connect to mongodb
    
    if (!session) {
      const id: string = new mongoose.mongo.ObjectId().toString();
      res.setHeader("set-cookie", `session=${id}; path=/; samesite=lax; httponly;`);
      
      await Cart.create({
        products: [],
        customer: id
      });

      res.status(200).json([]);
    
    }else {
      const exits = await Cart.findOne({ customer: session }).exec();
      
      if (exits) {
        res.status(200).json(exits);

      }else {
        const data = await Cart.create({ 
          products: [],
          customer: session 
        });
        res.status(200).json(data);
      }
    }  
  },

  PUT: async (req: NextApiRequest, res: NextApiResponse) => {
    const session: string = req.cookies['session'] as string;

    if (!session) throw new Error("can't get session cookie");

    const data = req.body as Product;
    await connectDB(); // Connect to mongodb

    const prevData: ICart = await Cart.findOne({ customer: session }).exec();
    const newData: Product[] = [];

    if (prevData.products.filter(product => product._id.toString() === data._id).length) {
      const updatedData = prevData.products.map((product) => {
        if (product._id.toString() === data._id) {
          if (product.quantity > 0) product.quantity = product.quantity + data.quantity;
        }
        return product;
      });

      const filterData = updatedData.filter(product => product.quantity > 0);
      
      newData.push(...filterData)
    
    }else Array.isArray(data) ? void(0) : newData.push(...prevData.products, data);
    
    const cart = await Cart.findOneAndUpdate(
      { customer: session }, { products: newData }, { new: true }
    ).populate({ path: 'products._id', model: Product }).exec();
    
    const formatedData = formatData(cart);
   
    res.status(200).json(formatedData); 
  },

  DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
    const session: string = req.cookies['session'] as string;

    if (!session) throw new Error("can't get session cookie");

    await Cart.findByIdAndDelete(session).exec();
  }
}

export function formatData(data: PopulatedCart) {
  const result: CartProduct[] = data.products
    .map((product: PopulatedProduct) => {
      return {
        _id: product._id._id.toString(),
        name: product._id.name,
        price: product._id.price,
        quantity: product.quantity
      }
    });

  return result
}

export default handler(handleCase);