import { sendData, updateData } from '@/helpers/axios';
import React from 'react';

type Error<T> = {
  readonly [K in keyof T]?: T[K]|string|number
}

export default function useFormValidation<T>(
  validate: (data: T) => Error<T> | {},
  dataSchema: T,
  method: 'PUT'|'POST' = 'POST',
  apiRoute: string
) {
  const [data, setData] = React.useState<T>(dataSchema);
  const [sended, setSended] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error<T>>({});
  const [serverError, setServerError] = React.useState<ServerError[]>([]);

async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    let err = validate(data); // check for errors from client side
    
    if (Object.keys(err).length === 0) {
        const res = (method === 'POST') ? 
          await sendData<T>(apiRoute, data) : await updateData<T>(apiRoute, data);
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
            setServerError([]);
            setData(method === 'POST' ? {} as T : data);
            setSended(true);
            setError({});
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

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    setError({
      ...error,
      [e.target.name]: null
    });
  }


  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return { 
    handleChange, handleSubmit, handleBlur, handleSelect,
    error, sended, setSended, serverError, data, setData
    }
}

