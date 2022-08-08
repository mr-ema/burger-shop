import Link from 'next/link';
import styled from 'styled-components';
import { Links } from './Links';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { createCart, fetchCart, selectCart } from '@/features/cart/cartSlice';
import React from 'react';
import { ButtonSpinner } from '@/components/loaders';

export default function Menu(): React.FunctionComponentElement<JSX.Element> {
  const dispatch: any = useDispatch();
  const cart = useSelector(selectCart);
  const status = cart.status;
  const cartItems = cart.numberItems || 0;

  React.useEffect(() => {
    if (status === 'idle') dispatch(fetchCart());
    if (status === 'failed') dispatch(createCart());

  }, [status, cart, dispatch])

  return (
    <Wrapper>
      <Container>
        <Links />
        
        <Link href='/cart'>
          <Cart>
            <CartItems>
              {
                status === 'loading' ?
                <ButtonSpinner /> :
                cartItems
              }
            </CartItems>
            <FaShoppingCart />
          </Cart>
        </Link>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  grid-column: 1/13;
  grid-row: 1;
  
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 0 0 1rem 0;
 
  height: 80px;
`

const Container = styled.ul`
  grid-column: 2/3;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 2rem;
  padding: 0 1.6rem;
`

const Cart = styled.a`
  border: 0;
  color: #ddd;
  font-size: 1.6rem;
  position: relative;
  padding: 1rem 1rem 0 0;
  @media screen and (max-width: 650px){ 
    padding: .8rem .8rem 0 0;
    font-size: 1.3rem; 
    }
`

const CartItems = styled.span`
  background-color: #f3c677;
  border-radius: 50%;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;

  font-size: 1rem;
  font-weight: bold;
  @media screen and (max-width: 650px){ 
    width: 15px;
    height: 15px;
    font-size: .8rem;
    }
`