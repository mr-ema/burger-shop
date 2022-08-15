import React from 'react';
import { Container, Main, Wrapper } from '@styledComponents/main';
import SideBar from './sideBar/SideBar';
import TopBar from './topBar/TopBar';
import { useSession } from 'next-auth/react';
import IsLogin from '@/components/auth/isLogin';
import { Spinner } from '@/components/loaders';
import { getData, sendData } from '@/helpers/axios';
import { Button } from '@styledComponents/buttons';
import Head from 'next/head';

type Props = {
  children: React.ReactNode
}

type bypass = 'idle'|'bypassed'|'failed';

export default function AdminLayout({ children }: Props): JSX.Element {
  const [bypass, setBypass] = React.useState<bypass>('idle');
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const { data: session, status } = useSession();

  const bypassLogin = async () => {
    const res = await sendData('/api/admin/bypass', { mode: 'GOD_MODE' });
    if (!(res instanceof Error)) {
      if (res.status === 200) setBypass('bypassed')
      else setBypass('failed')
    }
  
  }

  React.useEffect(() => {
    const getBypass = async () => {
      const res = await getData('/api/admin/bypass');
      if (!(res instanceof Error)) {
        if (res.status === 200) setBypass('bypassed')
        else setBypass('failed')
      }
    }
    console.log(bypass === 'failed')
    getBypass()
  }, [bypass])
  
  if (status === 'loading') return <Spinner bg='#fff'/>

  if (!session && !bypass || bypass === 'failed') return (
    <Container width='100vw' height='100vh'>
      <IsLogin/>
      <Container position='absolute' top='10%'>
        <Button border='2px solid #222' onClick={() => bypassLogin()}>ByPass</Button>
      </Container>
    </Container>
)
  

  return (
    <Wrapper bg='#fff'>
      <Head>
        <title>{'<GodMode/>'}</title>
      </Head>
      {isActive && <SideBar />}
      <TopBar toggle={setIsActive}/>
      <Main gridColumn={isActive ? '2/13':'1/13'} gridRow='2' height='calc(100vh - 70px)' style={{overflowY: 'scroll'}}>
        {children}
      </Main>
    </Wrapper>
  )
}