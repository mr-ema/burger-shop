import styled from 'styled-components'
import { GoPlus, GoDash } from 'react-icons/go'
import { useAppDispatch } from '@/app/hooks'
import { modQuantity } from '@/features/cart/cartSlice'
import Image from 'next/image';
import { Container } from '@styledComponents/main';

type Props = {
  _id: string,
  quantity: number,
  price: number,
  total: number
}

export default function Product({ _id, quantity, price, total }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Container className='image'>
        <Image 
          src={'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80'}
          alt='product'
          layout='fill'
        />
      </Container>
      <Quantity>
        <Action onClick={() => dispatch(modQuantity({ _id: _id, quantity: -1 }))}><GoDash/></Action>
        <Content>{quantity}</Content>
        <Action onClick={() => dispatch(modQuantity({ _id: _id, quantity: 1 }))}><GoPlus/></Action>
      </Quantity>
      <Content>{price}</Content>
      <Content>{total}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-bottom: 3px solid #333;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 1rem 0;

  .image {
    object-fit: cover;
    width: 80px;
    height: 80px;

    @media screen and (max-width: 600px) {
      width: 60px;
      height: 60px;
    }
  }
`

const Content = styled.span`
  display: block;
  font-size: 1rem;
  @media screen and (max-width: 900px){font-size: .8rem;}
`

const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  @media screen and (max-width: 900px){font-size: .8rem;}
`

const Action = styled.button`
  background: none;
  color: inherit;
  font-size: 1rem;
  @media screen and (max-width: 900px){font-size: .8rem;}
`