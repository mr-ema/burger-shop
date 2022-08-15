import { AdminLayout } from '@/components/admin';
import { removeData } from '@/helpers/axios';
import { Input, Label } from '@styledComponents/forms';
import { Button } from '@styledComponents/buttons';
import { Container } from '@styledComponents/main';
import { Span, Title } from '@styledComponents/text';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { LinkButton } from '@styledComponents/links';

export default function Page() {
  const [destroyDB, setDestroyDB] = React.useState<boolean>(false);

  if (destroyDB) return (
    <AdminLayout>
      <Dialog />
    </AdminLayout>
  )

  return (
   <AdminLayout>
    <Container height='100%' color='#222'>
      <Container width='100%' height='100px' position='absolute' 
      top='20%' zIndex='1'>
        <Button bg='none' border='2px solid #aaa' color='#aaa'
        onClick={() => setDestroyDB(true)}>
          Destroy DataBase
        </Button>
      </Container>
      <Container width='100vw' bg='#000' height='100vh' left='0' top='0' position='fixed'>
        <Image 
          src={'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
          alt='unsplash'
          priority={true}
          layout='fill'
        />
      </Container>
      <Container gap='1rem' flexDirection='column'>
        <Span 
        fontSize='2rem' color='#ddd' borderRadius='.6rem'
        padding='.6rem'>
          GODMODE
        </Span>

        <Link href={'/'}>
          <LinkButton fontSize='.9rem' bg='#aaa' color='#222'>Back To Shop</LinkButton>
        </Link>
        
      </Container>
    </Container>
   </AdminLayout>
  )
}

function Dialog() {
  const [secret, setSecret] = React.useState<string>('');
  const [fase, setFase] = React.useState<0|1>(0);
  const [count, setCount] = React.useState<number>(0);
  const [message, setMessage] = React.useState<string>('');

  async function endOfTheWorld(secret: string) {
    console.log(secret)
    const res = await removeData('/api/admin/god', { headers: { Authorization: secret } });
    if (!(res instanceof Error)) {
      if (res.status === 200) {
        setMessage(res.data as string);
        console.log('VIVA LA VIDA LOCA, NICE JOB.')
      }
      else {
        setMessage(res.data as string);
      }
    }else console.error('(1) => ', res);
  }

  function start() {

    if (fase === 0) {
      alert('Look your console');
      console.log('01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01101101 01110101 01110011 01101001 01100011 00101110 01111001 01101111 01110101 01110100 01110101 01100010 01100101 00101110 01100011 01101111 01101101 00101111 01110011 01100101 01100001 01110010 01100011 01101000 00111111 01110001 00111101 01101100 01101001 01110110 01101001 01101110 00101011 01101100 00101011 01100001 00101011 01110110 01101001 01100100 01100001 00101011 01101100 01101111 01100011 01100001 00001010 01100111 01110101 01100101 01110011 01110011 00100000 01110100 01101000 01100101 00100000 01101101 01101111 01110110 01101001 01100101');
      setFase(1);
    }
    if (fase === 1 && secret.length > 2 && secret.length < 6) {
      setCount(prev => prev + 1);
      if (count === 1) console.warn('Clue(1) => The Name Is longer that 2 char and shorter that 6 char'); 
      if (count === 2) console.warn('Clue(2) => Start With S and end with k');
      if (count === 3) console.warn('Clue(3) => The name is 5 char long');
      if (count > 3) setCount(1);
      endOfTheWorld(secret);
    }else console.warn('Try again');
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSecret(e.target.value as string);
  }

  return (
    <Container height='100%' bg='#000' color='#222'>
      <Container width='100vw' bg='#000' height='100vh' left='0' top='0' position='fixed'>
        <Image 
          src={'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
          alt='unsplash'
          priority={true}
          layout='fill'
        />
      </Container>
      <Container zIndex='1' flexDirection='column'>
        <Title color='#8791ff'>{fase === 1 ? 'Good Lock' : 'Ready?'}</Title>
        <Button fontSize='1.2rem' bg='#8791ff' onClick={start}>{fase === 1 ? 'send' : 'yes'}</Button>
        {fase === 1 && 
          <Label color='#8791ff' fontSize='1.2rem'>
            Secret Word
            <Input fontSize='1.2rem' type='text' onChange={handleChange} name='secret' />
          </Label>
        }
    
        {message && 
          <Span bg='#8791ff' padding='.6rem 1rem' borderRadius='.39rem'
          fontSize='2rem' color='#222'>
            {message}
          </Span>
        }
      </Container>
    </Container>
  )
}

