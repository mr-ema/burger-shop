import Head from 'next/head';
import { Container, Main, Section } from '@styledComponents/main';
import { SubTitle } from '@styledComponents/text';
import { Card } from '@/components/card';
import Layout from '@/components/Layout';
import { Banner } from '@/components/banner';
import { IProduct } from '@/types/models';
import { FailToLoad } from '@/components/errors';
import type { GetServerSideProps } from 'next';
import { connectDB } from '@/middleware/mongodb';
import { Product } from '@/models/product';

type Props = {
  data: IProduct[]
}

export default function Page(props: Props) {
  const { data } = props;

  if (!data) return <FailToLoad />

  return (
    <Layout>
      <Head>
        <meta name="description" content="You hungry? come here and buy some delicios burgers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Main gridColumn='1/13'>
      <Section>
        <Banner 
          title='Hamburgers'
          imgUrl='https://images.unsplash.com/photo-1588258127600-adcd8cf614dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='hamburger'
        />
      </Section>

      <Section flexDirection='column' gap='2rem' minHeight='100vh'>
        <SubTitle>Our Burgers</SubTitle>
        <Container flexDirection='row'>
          {data.map((product: IProduct) => (
            <Card
              key={product._id.toString()}
              _id={product._id.toString()}
              name={product.name}
              price={product.price}
            />
          ))}
        </Container>
      </Section>
    </Main>
     
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  await connectDB();
  const res= JSON.stringify( await Product.find({}).exec() );
  const data = JSON.parse(res);
  
  return {
    props: { data }
  }
}