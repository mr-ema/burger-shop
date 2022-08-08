import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '@styledComponents/main';
import AdminLayout from '../AdminLayout';

export default function Spinner(): JSX.Element {
  return (
    <AdminLayout>
      <Container width='100vw' height='100vh'>
        <Spin />
      </Container>
    </AdminLayout>
  )
}
const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const Spin = styled.div`
  animation: ${rotate} 1800ms infinite linear;
  border-radius: 50%;
  border: 9px solid #464588;
  border-left-color: transparent;
 
  width: 150px;
  height: 150px;
  @media screen and ( max-width: 900px ) {
    border-width: 10px;
    width: 100px;
    height: 100px;
  }
  @media screen and ( max-width: 600px ) {
    border-width: 7px;
    width: 50px;
    height: 50px;
  }
`