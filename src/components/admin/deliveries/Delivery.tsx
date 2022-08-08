import { Span } from '@styledComponents/text';
import { Container } from '@styledComponents/main';
import { IDelivery } from '@/types/models';
import React from 'react';
import { Button } from '@styledComponents/buttons';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export default function Delivery({ 
  _id, products, date, time, status, customer 
}: IDelivery): JSX.Element {

  const [toggle, setToggle] = React.useState<boolean>(false);

  return (
    <Container
    padding='2rem 0' borderWidth='0 0 .2rem 0' borderStyle='solid'
    borderColor='#ddd'
    flexDirection='column' bg='#ffffff' color='#222' 
    width='100%' height='auto'>
      <Container bg='#222' color='#ddd' padding='1rem' borderRadius='.6rem' 
      flexDirection='column' >
        <Span color='#aaa'>_ID: {_id.toString()}</Span>
        <Span color='#aaa'>CUSTOMER_ID: {customer.toString()}</Span>
        <Span>DATE: {date}</Span>
        <Span>TIME: {time}</Span>
        <Span>STATUS: {status}</Span>
        <Button onClick={() => setToggle(!toggle)} bg='none' 
        justifyContent='space-around' gap='.2rem' placeSelf='center'>
          Products 
          <MdOutlineKeyboardArrowDown/>
        </Button> 
        <Container>
          {toggle && products.map(product => (
            <Container key={product._id.toString()} flexDirection='column'>
              <Span color='#aaa'>_id: {product._id.toString()}</Span>
              <Span>quantity: {product.quantity}</Span>
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  )
}