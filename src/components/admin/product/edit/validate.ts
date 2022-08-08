import { IProduct } from '@/types/yup';

type Error = {
  [key in keyof IProduct]: string
}

export default function validate(values: Partial<IProduct>) {
  const error = {} as Error;

  if (!values.name) {
    error.name = 'required';
  }else if (typeof values.name !== 'string') {
    error.name = 'invalid name';
  }

  if (!values.price) {
    error.price = 'required';
  }else if (values.price < 1) {
    error.price = 'invalid price';
  }


  if (values.stock && values.stock < -1) {
    error.stock = 'invalid number';
  }

  if (!values.description) {
    error.description = 'required';
  }else if (typeof values.description !== 'string') {
    error.description = 'invalid description';
  }

  return error;
}
