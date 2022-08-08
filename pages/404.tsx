import { Span, Title } from '@styledComponents/text';
import { Container, Wrapper } from '@styledComponents/main';
import Image from 'next/image';
import image from '@public/assets/404.jpg';
import { Button } from '@styledComponents/buttons';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  return (
    <Wrapper bg='#000'>
      <Container width='100vw' height='100vh'>
        <Container opacity='.36' width='100%' height='100%' zIndex='0' position='absolute'>
          <Image 
            src={image}
            alt='background'
            layout='fill'
            objectFit='contain'
          />
        </Container>

        <Container flexDirection='column' width='100%' height='100%' zIndex='1' padding='0 2rem'>
          <Title fontSize='7rem'>404</Title>
          <Span color='#ccc' fontSize='1.7rem'>{"Sorry Can't Find This Page"}</Span>
          <Button onClick={() => router.back()} color='#222' width='160px'>Go Back</Button>
        </Container>
      </Container>
    </Wrapper>
  )
}