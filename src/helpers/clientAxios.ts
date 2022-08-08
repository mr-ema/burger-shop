import axios, { AxiosError, AxiosResponse } from 'axios';

export async function getClientData<T>(apiRoute: string) {
  try {
    const res = await axios.get(apiRoute);
    return res as AxiosResponse;
  }catch(err) {
    if (axios.isAxiosError(err)) {
      return Promise.reject(err as AxiosError); 
    }
    return Promise.reject(err as Error); 
  }
} 