import { emptyCart } from '@/features/cart/cartSlice';
import { getData, updateData } from '@/helpers/axios';
import { ICustomer } from '@/types/yup';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { validate } from './helper';

interface Data extends ICustomer {
  date: string,
  time: string,
}

export default function useLogic() {
  const dispatch: any = useDispatch();
  const router = useRouter();

  const [data, setData] = React.useState<Data>({
    firstName: '',
    lastName: '',
    direction: '',
    email: '',      
    step: 3,
    time: '',
    date: ''
  });
  const [sended, setSended] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Partial<ICustomer> | null>(null);
  const [serverError, setServerError] = React.useState<ServerError[]>([]);
  
  useEffect(() => {
    async function getFormData(){
      const resCustomer = await getData('/api/forms/customer');
      const resDelivery = await getData('/api/forms/delivery');
      
      if (!(resCustomer instanceof Error) && !(resDelivery instanceof Error)) {
        if (resCustomer.status === 200 && resDelivery.status === 200) {
            const customer = resCustomer.data;
            const delivery = resDelivery.data;
            
            setData({ ...customer, ...delivery });
        }else {
          if (resDelivery.status !== 200) {
            setServerError([
              { code: resCustomer.status, message: resCustomer.data },
              { code: resDelivery.status, message: resDelivery.data }
            ]);
          }else {
            setServerError([{ code: resCustomer.status, message: resCustomer.data }]);
          }
        }

      }

    }

    getFormData();
  }, [])

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    let err = validate(data); // check for errors from client side

    if (Object.keys(err).length === 0) {
      const res = await updateData<Data>('/api/forms/customer', data);
      // check if 'res' is no an error from js. So can access axios error props.
      if (!(res instanceof Error)) {
        if (res && res.status !== 200) {
          // check if data is an array and setErrors
          if (Array.isArray(res.data)) {
            let errors: ServerError[] = []; // create a variable to save errors.
            res.data.map(err => {
              errors.push( { // save errors here
                code: res.status,
                message: err
              })
            });
            setServerError(errors); // pupolate with error variable
          }else {
            setServerError( // pupolate with error from server response
              [{ code: res.status, message: res.data }]);
          }
        }else {
          // Reset All States
          setSended(true);
          setServerError([]);
          setData(data);
          setError({});
          dispatch(emptyCart());
          setTimeout(() => router.reload(), 1000); // wait for update from dataBase;
        }
      }else console.log('Axios Client Error:', res); // log js error
    }
    setError(validate(data));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  
  return { data, handleChange, handleSubmit, handleSelect, error, serverError, sended }
}