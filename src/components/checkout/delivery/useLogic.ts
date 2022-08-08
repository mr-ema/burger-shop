import { IDelivery } from '@/types/models';
import { useRouter } from 'next/router';
import React from 'react';
import { sendData } from '@/helpers/axios';

export default function useLogic() {
  const router = useRouter();
  const [sending, setSending] = React.useState<boolean>(false);
  const [data, setData] = React.useState<Partial<IDelivery>>({
    date: '',
    time: '9:00', // default value
    status: 'PENDING' // default value
  });

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setSending(true);

    const res = await sendData('/api/forms/delivery', data)
    if ( !(res instanceof Error) ) {
      if (res.status === 200) {
        setTimeout(() => router.reload(), 1000);
      }else {
        setSending(false);
      }
    }else {
      console.error('Axios Client Error: ', res);
    }
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return { handleChange, handleSelect, handleSubmit, sending }
}

