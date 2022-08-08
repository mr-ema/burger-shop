import { Cart as CartComponent } from '@/components/cart';
import Layout from '@/components/Layout';
import { Main } from '@styledComponents/main';
import { NextPage } from 'next';
import styled from 'styled-components';

const Cart: NextPage = () => {
  return (
    <Layout>
      <Main>
        <CartComponent />    
      </Main>
      </Layout>
  )
}

const Table = styled.div`
  background-color: #111;
  border-radius: .9rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  padding: 1rem;

  width: 100%;

  div:first-child {
    margin-bottom: 2rem;
  }
`

const TableHead = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  font-size: 1rem;
  @media screen and (max-width: 900px){font-size: .8rem;}
`

export default Cart;