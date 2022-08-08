import { Title } from '@styledComponents/text';
import { Container, Wrapper } from '@styledComponents/main';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@styledComponents/buttons';

export default function IsLogin() {
  const { data: session } = useSession();

  if (session)  {
    return  (
      <>
       <Wrapper>
        <Container width='100vw' flexDirection='column' gap='3rem'>
          <Title fontSize='3rem'>Signed in as { session.user.email }</Title>
          <Button bg='#eee' color='#000' width='200px' onClick={() => signOut()}>Sign Out</Button>
        </Container>
       </Wrapper>
      </>
    )
  }

  return  (
    <>
      <Wrapper bg='#fff'>
        <Container width='100vw' flexDirection='column' gap='3rem'>
          <Title color='#222' fontSize='3rem'>
            You Not Signed In
          </Title>
          <Button border='2px solid #222' color='#000' width='200px' onClick={() => signIn()}>Sign In</Button>
        </Container>
      </Wrapper>
    </>
  )
}