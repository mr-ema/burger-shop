import React from 'react';
import styled from 'styled-components';
import { Container } from '@/styles/styled-components/main';
import { localCurrency } from '@/helpers/currency';
import { useAppDispatch } from '@/app/hooks';
import { addNewProduct } from '@/features/cart/cartSlice';
import { Button } from '@styledComponents/buttons';
import Image from 'next/image';

type Props = {
  _id: string,
  name: string,
  price: number,
  imgUrl?: string
}

export default function Card({ _id, name, price, imgUrl }: Props): React.FunctionComponentElement<JSX.Element> {
  const localPrice = localCurrency('es-CL', 'CPL', price);
  const dispatch = useAppDispatch();

  return (
    <>
      <Wrapper>
        <Price>{localPrice || '$400'}</Price>
        <Container width='90%' height='55%'>
        <Image 
          className='img-style'
          src={imgUrl || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80'}
          alt={name}
          layout={'fill'}
          objectFit={'cover'}
        />
        </Container>
        <Container position='absolute' bottom='.4rem' width='80%'>
          <Button
            bg='#deb46c'
            color='#111'
            width='100%' 
            onClick={() => dispatch(addNewProduct({ _id: _id, quantity: 1 }))}>
            Add
          </Button>
        </Container>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background-color: #111;
  color: #deb46c;
  border-radius: .6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 1rem;

  width: 200px;
  height: 300px;

  @media screen and (max-width: 900px){ 
    width: 150px; 
    height: 250px;
  }
  @media screen and (max-width: 600px){ 
    width: 120px; 
    height: 200px;
  }

  .img-style {
    width: 100%;
    height: 100%;
  }
`

const Price = styled.span`
  background-color: none;
  border-radius: .6rem 0 .6rem 0;
  color: inherit;
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  padding: .3rem .9rem;
  position: absolute;
  left: 0;
  top: 0;

  @media screen and (max-width: 900px){ font-size: 1rem;}
  @media screen and (max-width: 600px){ font-size: .8rem;}
`