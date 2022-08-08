import { Span, SubTitle } from '@styledComponents/text';
import { Container } from '@styledComponents/main';
import React from 'react';
import { ICustomer } from '@/types/models';
import Deliveries from './Deliveries';
import { Button } from '@styledComponents/buttons';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

interface Props extends ICustomer {}

export default function Customer({ 
  _id, firstName, lastName, 
  direction, email, deliveries
}: Props): JSX.Element {
  
  const [toggle, setToggle] = React.useState<boolean>(false);

  return (
    <Container 
    padding='2rem 0' borderWidth='0 0 .2rem 0' borderStyle='solid'
    borderColor='#ddd'
    flexDirection='column' bg='#ffffff' color='#222' 
    width='100%' height='auto'>

    <SubTitle>{firstName + ' ' + lastName}</SubTitle>
    <Span>ID: {_id.toString()}</Span>
    <Span>E-mail: {email}</Span>
    <Span>Direction: {direction}</Span>
    <Container flexDirection='column'>
      <Button onClick={() => setToggle(!toggle)} justifyContent='space-around' gap='.2rem'>
        Deliveries 
        <MdOutlineKeyboardArrowDown/>
      </Button> 
        <Container flexDirection='row'>
        {deliveries && toggle && 
          deliveries.map(delivery => (
            <Deliveries
              key={delivery._id.toString()}
              id={delivery._id.toString()}
              date={delivery.date}
              time={delivery.time}
              status={delivery.status}
            />
          ))}
        </Container>
      </Container>
  </Container>
  )
}