import { Container } from '@styledComponents/main';
import { Span, Title } from '@styledComponents/text';

type Props = {
  price: number,
  name: string,
  stock: number,
  _id: string,
} 

export default function Card({ price, name, stock, _id }: Props): JSX.Element {

  return (
      <Container
        padding='2rem 0' borderWidth='0 0 .2rem 0' borderStyle='solid'
        borderColor='#ddd' flexDirection='row' bg='#ffffff' justifyContent='space-around'
        color='#222' width='100%' minHeight='30%'>
          <Container flexDirection='column'>
            <Title fontSize='2rem'>{name}</Title>
            <Container flexDirection='column'>
              <Container>
                <Span color='#666'>
                  PRICE: <Span color='#222'>{price}</Span>
                </Span>
                <Span color='#666'>
                  STOCK: <Span color='#222'>{stock === -1 ? 'No Stock' : stock}</Span>
                </Span>
              </Container>
              <Span color='#666'>
                ID: <Span color='#222'>{_id}</Span>
              </Span>
            </Container>
          </Container>
      </Container>
  )
}