import { ICustomer } from '@/types/yup';

interface Data extends ICustomer {
  time: string,
  date: string
}

export function validate(values: Data) {
  const error = {} as Data;

  if (!values.direction) {
    error.direction = 'required';
  }else if (typeof values.direction !== 'string') {
    error.direction = 'invalid direction';
  }

  if (!values.lastName) {
    error.lastName = 'required';
  }else if (typeof values.lastName !== 'string') {
    error.lastName = 'invalid name';
  }

  if (!values.firstName) {
    error.firstName = 'required';
  }else if (typeof values.firstName !== 'string') {
    error.firstName = 'invalid name';
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