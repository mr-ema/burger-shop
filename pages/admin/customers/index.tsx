import { AdminLayout } from '@/components/admin';
import { Container } from '@styledComponents/main';
import { ICustomer } from '@/types/models';
import { FailToLoad } from '@/components/errors';
import Spinner from '@/components/admin/loaders/Spinner';
import axios from 'axios';
import useSWR from 'swr';
import Customer from '@/components/admin/customer/Customer';
import { Title } from '@styledComponents/text';

const fetcher = ( url: string ) => axios.get(url).then(res => res.data as ICustomer[]);

export default function Page() {
  const { error, data } = useSWR('/api/admin/customers', fetcher);
  
  if (error) return ( <AdminLayout> <FailToLoad message={error.message}/> </AdminLayout> )
  if (!data) return <Spinner />

  return (
    <AdminLayout>
      <Container width='100%' height='100%'>
        {data.length ?
        data.map(customer => ( <Customer key={customer._id.toString()} {...customer} /> )) 
        : <Title color='#222'>No Data</Title>
        }
      </Container>
    </AdminLayout>
  )
}