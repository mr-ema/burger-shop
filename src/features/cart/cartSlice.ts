import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';
import { CartProduct, ModQuantity, Product } from '@/types/redux';
import { sendData, updateData } from '@/helpers/axios';
import { getClientData } from '@/helpers/clientAxios';
import { AxiosError } from 'axios';
import { ICart } from '@/types/models';

// Define the type for the slice state
export interface CartState {
  numberItems: number,
  products: CartProduct[],
  status: 'idle'|'loading'|'succeeded'|'failed',
  error: AxiosError|Error|null
}

// Define the initial state using that type
const initialState: CartState = {
  numberItems: 0,
  products: [],
  status: 'idle',
  error: null
}

export const createCart = createAsyncThunk('cart/createCart', async () => {
  const res = await sendData('/api/cart', []);
  if (!(res instanceof Error)) return res.data;
  else console.error('Axios client Error: ', res);
});

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const res = await getClientData<ICart>('/api/cart');
  if (!(res instanceof Error)) return res.data;
  else return res;
});

export const addNewProduct = createAsyncThunk('cart/createCart', async (product: Product) => {
  const res = await updateData('/api/cart', product);
  if (!(res instanceof Error)) return res.data;
  else console.error('Axios client Error: ', res);
});

export const removeProduct = createAsyncThunk('cart/removeProduct', async (_id: string) => {
  const res = await updateData('/api/cart', _id);
  if (!(res instanceof Error)) return res.data;
  else console.error('Axios client Error: ', res);
});

export const modQuantity = createAsyncThunk(
  'cart/modQuantity', async (data: ModQuantity) => {
    const res = await updateData('/api/cart', data);
    if (!(res instanceof Error)) return res.data;
    else console.error('Axios client Error: ', res);
});

export const emptyCart = createAsyncThunk('cart/empyCart', async () => {
  const res = await updateData('/api/cart', []);
  if (!(res instanceof Error)) return res.data;
  else console.error('Axios client Error: ', res);
});

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  reducers: {
    getAllProducts: state => { state.products },
  },

  extraReducers(builder) {
    builder
    .addCase(fetchCart.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase(fetchCart.fulfilled, (state, action) => {
      state.status = 'succeeded';

      // Add any fetched posts to the array
      state.products = action.payload;
      state.numberItems = state.products.length;
    })
    .addCase(fetchCart.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error as Error;
    })
    .addCase(emptyCart.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase(emptyCart.fulfilled, (state, action) => {
      state.status = 'succeeded';

      // Add any fetched posts to the array
      state.products = action.payload;
      state.numberItems = 0;
    })
    .addCase(addNewProduct.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase(addNewProduct.fulfilled, (state, action) => {
      state.status = 'succeeded';

      state.products = action.payload;
      state.numberItems = action.payload.length;
    })
    .addCase(modQuantity.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase(modQuantity.fulfilled, (state, action) => {
      state.status = 'succeeded';

      state.products = action.payload;
      state.numberItems = action.payload.length;
    })
    
  }

})

export const { getAllProducts } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart;

const cartReducer = cartSlice.reducer;

export default cartReducer;