import { Container } from '@styledComponents/main';
import { Title } from '@styledComponents/text';

export default function NoCart(): JSX.Element {
  return (
    <Container width='100%' minHeight='100vh'>
      <Title>You Cart Is Empty</Title>
    </Container>
  )
}