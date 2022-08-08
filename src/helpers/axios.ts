import axios, { AxiosError, AxiosResponse } from 'axios';

export async function getData<T>(apiRoute: string) {
  try {
    const res = await axios.get(apiRoute);
    return res as AxiosResponse;
  }catch(err) {
    if (axios.isAxiosError(err)) {
      if (err.response) return err.response;
      return err as AxiosError;
    }

    return err as Error;
  }
} 

export async function sendData<T>(
  apiRoute: string,
  data: T)
{
  try {
    const res = await axios.post(apiRoute, data);
    return res as AxiosResponse;

  }catch(err) {
    if (axios.isAxiosError(err)) {
      if (err.response) return err.response;
      return err as AxiosError;
    }

    return err as Error;
  }
} 

export async function updateData<T>(
  apiRoute: string,
  data: T)
{
  try {
    const res = await axios.put(apiRoute, data);
    return res as AxiosResponse;

  }catch(err) {
    if (axios.isAxiosError(err)) {
      if (err.response) return err.response;
      return err as AxiosError;
    }

    return err as Error;
  }
} 

export async function deleteByID(apiRoute: string, ID: string): Promise<any> {
  let data;

  try {
    const res = await axios.delete(apiRoute + ID);
    data = res.data;
    return data;
  }catch(err) {
    const error = err as AxiosError;
    data = error;
    return data;
  }
} 

export async function removeData(endPoint: string, headers?: object) {
  try {
    if (headers) {
      const res = await axios.delete(endPoint, headers);
      return res as AxiosResponse;
    }else {
      const res = await axios.delete(endPoint);
      return res as AxiosResponse;
    }

  }catch(err) {
    if (axios.isAxiosError(err)) {
      if (err.response) return err.response;
      return err as AxiosError;
    }

    return err as Error;
  }
}