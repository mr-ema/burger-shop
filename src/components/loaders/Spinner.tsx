import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '@styledComponents/main';

type Props = {
  bg?: string
}

export default function Spinner({ bg }: Props): JSX.Element {
  return (
      <Container width='100vw' height='100vh' bg={bg || '#191919'}>
        <Spin />
      </Container>
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