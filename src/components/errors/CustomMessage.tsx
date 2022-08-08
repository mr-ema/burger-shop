import { Container } from '@styledComponents/main'
import { Title } from '@styledComponents/text'
import Layout from '@/components/Layout'

type Props = {
  message: string,
}

export default function CustomMessage({ message }: Props): JSX.Element {
  return (
    <Layout>
      <Container width='100vw' height='100vh' color='#fff'>
        <Title>
          {message}
        </Title>
      </Container>
    </Layout>
  )
}