import React from 'react';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { emptyCart, selectCart } from '@/features/cart/cartSlice';
import { useAppSelector } from '@/app/hooks';
import { Head, Product, Footer } from './index';
import { useDispatch } from 'react-redux';
import { Container } from '@styledComponents/main';
import { Title } from '@styledComponents/text';
import { ButtonIcon } from '@styledComponents/buttons';

export default function Cart(): JSX.Element {
  const cart = useAppSelector(selectCart);

  const dispatch: any = useDispatch();

  if (cart.numberItems === 0) return (
    <Container height='90vh'>
      <Title>Go Shopping</Title>
    </Container>
    )
  
  return (
      <Wrapper>
        <Container width='100%' justifyContent='space-between'>
          <Title>Shop Cart</Title>
          <ButtonIcon onClick={() => dispatch(emptyCart())}>
              <FaTrashAlt/>
          </ButtonIcon>
        </Container>
          <Head />
        
        {cart.products.map(product => (
          product.quantity > 0 &&
            <Product
              key={product._id.toString()}
              _id={product._id.toString()}
              quantity={product.quantity}
              price={product.price}
              total={(product.quantity * product.price)}
            />
        ))}

        <Footer />
      </Wrapper>
  )
}

const Wrapper = styled.div`
  background: none;
  border-radius: .9rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  padding: 1rem;

  width: 100%;
`