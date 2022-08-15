import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import { Footer, Header } from './layout'
import { Wrapper } from '@styledComponents/main'
import Head from 'next/head'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
  
  return (
    <Provider store={store}>
      <Head>
        <title>Burger Shop</title>
      </Head>
      <Wrapper bg='#090909'>
        <Header/>

        {children}
        
        <Footer/>
      </Wrapper>
    </Provider>
  )
}