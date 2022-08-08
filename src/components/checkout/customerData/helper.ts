import { ICustomer } from '@/types/yup';
import axios, { AxiosError } from 'axios';

export function validate(values: ICustomer) {
  const error = {} as Partial<ICustomer>;

  if (!values.direction) {
    error.direction = 'required';
  }else if (typeof values.direction !== 'string') {
    error.direction = 'invalid direction';
  }

  if (!values.lastName) {
    error.lastName = 'required';
  }else if (typeof values.lastName !== 'string') {
    error.lastName = 'invalid name';
  }else if (values.lastName.length < 3) {
    error.firstName = 'must have at least 3 letters'
  }

  if (!values.firstName) {
    error.firstName = 'required';
  }else if (typeof values.firstName !== 'string') {
    error.firstName = 'invalid name';
  }else if (values.firstName.length < 3) {
    error.firstName = 'must have at least 3 letters'
  }

  if (!values.email) {
    error.email = 'required';
  }else if (typeof values.email !== 'string') {
    error.email = 'invalid email';
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = 'invalid email';
  }

  return error;
}

export async function SendData(data: ICustomer) {
  try {
    const res = await axios.post('/api/forms/customer', data);
    console.log(res);
  }catch(err) {
    const error = err as AxiosError;
    console.log(error.message);
  }
} 