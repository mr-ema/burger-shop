import { CustomerData, Delivery, Confirm, NoCart, Paid } from '@/components/checkout';
import Layout from '@/components/Layout';
import { connectDB } from '@/middleware/mongodb';
import { Cart } from '@/models/cart';
import { Customer } from '@/models/customer';
import { ICustomer } from '@/types/models';
import { Main } from '@styledComponents/main';
import { GetServerSideProps } from 'next';
import React from 'react';

type Props = {
  step: number
}

export default function Page(props: Props) {
  const step = props.step;

  return (
    <Layout>
      <Main gridColumn='1/13'>
        {step === 0 && <NoCart />} 
        {step === 1 && <CustomerData />}
        {step === 2 && <Delivery />}
        {step === 3 && <Confirm />}
        {step === 4 && <Paid />}
      </Main>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = ctx.req.cookies['session'];
  let step = 1;

  if (session) {
    try {
      await connectDB();
      const customer: ICustomer = await Customer.findById(session).exec();
      const cart = await Cart.findOne({ customer: session }).exec();

      if (!customer) step = 1;
      if (customer.step === 4 && cart.products.length) {
        await Customer.findByIdAndUpdate(session, { step: 2 }).exec();
        step = 2;
      }else step = customer.step;

      if (!cart || !cart.products.length && step !== 4) step = 0;

    }catch(err) {
      console.error(err);
    }
  }else {
    console.error("can't get session token");
  }
  
  return {
    props: { step }
  }
}