import { Container } from '@styledComponents/main';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import styled from 'styled-components';

type Props = {
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TopBar({ toggle }: Props): JSX.Element {
  const { data: session } = useSession();

  return (
    <Wrapper>
      <Sandwich onClick={() => toggle(prev => !prev)}>
        <AiOutlineBars/>
      </Sandwich>

      <Container 
        position='absolute' right='1rem' top='10px' padding='0'
        width='50px' height='50px' borderRadius='50%' zIndex='3'>

        {
          <Image 
            src={session?.user.image as string || 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80'}
            alt='user'
            layout='fill'
          />
        }
      </Container>
    </Wrapper>
  )
}


const Sandwich = styled.button`
  background: none;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 2rem;
  position: absolute;
  left: 1rem;
  top: 1rem;

  width: 20%;
  height: auto;
`

const Wrapper = styled.header`
  background: #18192c;
  grid-row: 1;
  grid-column: 1/13;

  display: flex;
  flex-direction: row;
  height: 70px;
  z-index: 2;
`