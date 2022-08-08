import { AdminLayout } from '@/components/admin';
import { Container } from '@styledComponents/main';
import { ICart } from '@/types/models';
import { FailToLoad } from '@/components/errors';
import Spinner from '@/components/admin/loaders/Spinner';
import axios from 'axios';
import useSWR from 'swr';
import { Title } from '@styledComponents/text';
import Cart from '@/components/admin/carts/Cart';
import { Button } from '@styledComponents/buttons';
import React from 'react';
import { removeData } from '@/helpers/axios';

const fetcher = ( url: string ) => axios.get(url).then(res => res.data as ICart[]);

export default function Page() {
  const [deleted, setDeleted] = React.useState<boolean>(false);
  const { error, data } = useSWR('/api/admin/carts', fetcher);

  if (error) return ( <AdminLayout> <FailToLoad message={error.message}/> </AdminLayout> )
  if (!data) return <Spinner />

  async function deleteAll() {
    const res = await removeData('/api/admin/carts', []);
    if (!(res instanceof Error)) {
      if (res.status === 200) setDeleted(true);
      else setDeleted(false);
    }
  }

  return (
    <AdminLayout>
      <Container width='100%' height='100%' gap='2rem'>
        <Container width='100%' padding='2rem 0'>
          <Button border='2px solid #222' color='#222' width='50%' padding='1rem 0'
          onClick={deleteAll} disabled={deleted}>
            {deleted ? 'Deleted' : 'Delete All Empty Carts'}
          </Button>
        </Container>
        {data.length ?
          data.map(cart => ( <Cart key={cart._id.toString()} {...cart} /> )) 
          : <Title color='#222'>No Data</Title>
        }
      </Container>
    </AdminLayout>
  )
}