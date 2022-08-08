import { Container } from '@styledComponents/main';
import useSWR from 'swr';
import axios from 'axios';
import { AdminLayout } from '@/components/admin';
import Spinner from '@/components/admin/loaders/Spinner';
import { FailToLoad } from '@/components/errors';
import { IProduct } from '@/types/models';
import React from 'react';
import { RemoveCard } from '@/components/admin/product/remove';

const fetcher = ( url: string ) => axios.get(url).then(res => res.data as IProduct[]);

export default function Page() {
  const { data, error } = useSWR('/api/product', fetcher);

  if (error) return (<AdminLayout><FailToLoad/></AdminLayout>)
  if (!data) return <Spinner/>

  return (
    <AdminLayout>
      <Container width='100%' height='100%'>
        {data.map(product => (
          <RemoveCard
            key={product._id.toString()}
            name={product.name}
            price={product.price}
            stock={product.stock}
            _id={product._id.toString()}
          />
        
        ))}
      </Container>
    </AdminLayout>
  )
}