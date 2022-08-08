import { Button } from '@styledComponents/buttons';
import { Container } from '@styledComponents/main'
import { Span, Title } from '@styledComponents/text'
import { useRouter } from 'next/router';

type Props = {
  message?: string
}

export default function FailToLoad({ message }: Props): JSX.Element {
  const router = useRouter();
  return (
      <Container flexDirection='column' width='100vw' height='100vh' bg='#fff' color='#222'>
        <Title>
          {'<Failed To Load/>'}
        </Title>

        { message && 
          <Span border='0px solid #c20000' borderWidth='0 0 0 4px' bg='#ff00002f'
                padding='.6rem' borderRadius='0 .3rem .3rem 0'
          >
            {message}
          </Span> 
        }
        
        <Button width='200px' border='2px solid #222' onClick={() => router.reload()}>
          Retry
        </Button>
      </Container>
  )
}