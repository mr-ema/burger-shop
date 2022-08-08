import mongoose from 'mongoose';

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)

export const connectDB = async () => {
  // stablish connection
  const connect = await mongoose.connect(process.env.MONGO_URI as string);

  return { connect }
}