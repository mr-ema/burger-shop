import { Span } from '@styledComponents/text';
import { Container } from '@styledComponents/main';
import React from 'react';

type Props = {
  id: string,
  date: string,
  time: string,
  status: string
}

export default function Deliveries({ id, date, time, status }: Props): JSX.Element {

  return (
    <Container flexDirection='column' alignItems='flex-start' bg='#222' 
      color='#ddd' borderRadius='.3rem' padding='1rem'>

      <Span fontSize='.8rem'>ID: {id}</Span>
      <Span fontSize='.8rem'>Date: {date}</Span>
      <Span fontSize='.8rem'>Time: {time}</Span>
      <Span fontSize='.8rem'>STATUS: {status}</Span>
    </Container>
  )
}