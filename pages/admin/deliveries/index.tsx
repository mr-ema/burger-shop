import { AdminLayout } from '@/components/admin';
import { Container } from '@styledComponents/main';
import { FailToLoad } from '@/components/errors';
import Spinner from '@/components/admin/loaders/Spinner';
import axios from 'axios';
import useSWR from 'swr';
import { Title } from '@styledComponents/text';
import { IDelivery } from '@/types/models';
import Delivery from '@/components/admin/deliveries/Delivery';

const fetcher = ( url: string ) => axios.get(url).then(res => res.data as IDelivery[]);

export default function Page() {
  const { error, data } = useSWR('/api/admin/deliveries', fetcher);
  
  if (error) return ( <AdminLayout> <FailToLoad message={error.message}/> </AdminLayout> )
  if (!data) return <Spinner />

  return (
    <AdminLayout>
      <Container width='100%' height='100%'>
        {data.length ?
        data.map(delivery => ( <Delivery key={delivery._id.toString()} {...delivery} /> )) 
        : <Title color='#222'>No Data</Title>
        }
      </Container>
    </AdminLayout>
  )
}