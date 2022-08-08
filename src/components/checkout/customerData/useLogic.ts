import { ICustomer } from '@/types/yup';
import { useRouter } from 'next/router';
import React from 'react';
import { SendData, validate } from './helper';

export default function useLogic() {
  const router = useRouter();
  const [data, setData] = React.useState<ICustomer>({
    firstName: '',
    lastName: '',
    email: '',
    direction: '',
    step: 2
  });

  const [error, setError] = React.useState<Partial<ICustomer> | null>(null);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (Object.keys(validate(data)).length === 0) {
      await SendData(data);
      setTimeout(() => router.reload(), 600); // wait for step update from dataBase;
    }else {
      setError(validate(data));
    }

  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    setError({
      ...error,
      [e.target.name]: null
    });
  }

  return { handleChange, handleSubmit, handleBlur, error}
}

