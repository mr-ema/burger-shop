import styled from 'styled-components'
import { RiPhoneFill, RiMailFill, RiMapPin2Fill } from 'react-icons/ri'
import { Container } from '@styledComponents/main'
import { Span, Title } from '@styledComponents/text'
import { ButtonIcon } from '@styledComponents/buttons'
import { LinkSimple } from '@styledComponents/links'
import Link from 'next/link'

export default function Footer(): JSX.Element {
  return (
    <Wrapper>
      <Container flexDirection='column' alignItems='flex-start'>
        <ButtonIcon>
          <RiPhoneFill/>
          <Span><a href='tel:+56 9 11111111'>+56 9 11111111</a></Span>
        </ButtonIcon>

        <ButtonIcon>
          <RiMailFill/>
          <Span><a href='mailto: support@company.com'>support@company.com</a></Span>
        </ButtonIcon>

        <ButtonIcon>
          <RiMapPin2Fill/>
          <Span textAlign='start'>
              <a href='https://goo.gl/maps/rZdGEMLXphkR9a448' target={'_blank'} rel="noreferrer">
                111 avenue street,<br></br> <b>Santiago Chile</b>
              </a>
            </Span>
        </ButtonIcon>
      </Container>
      
      <Container flexDirection='column'>
        <Title fontSize='1.7rem'>Links</Title>
        <LinkSimple href='https://github.com/mr-ema' target={'_blank'} rel="noreferrer">GitHub</LinkSimple>
        <Link href='/about'>
          <LinkSimple>About</LinkSimple>
        </Link>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  grid-column: 2/12;
  background-color: #111;
  border-radius: .6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  padding: 2rem 0;
  margin-bottom: 2rem;
  width: 100%;
  height: auto;
`