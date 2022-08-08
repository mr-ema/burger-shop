import { Container, Main, Section } from '@styledComponents/main';
import { Param, SubTitle } from '@styledComponents/text';
import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout>
    <Main gridColumn='2/12' minHeight='100vh' justifyContent='center'>
      <Section bg='#111' flexDirection='column' gap='2rem' minHeight='20vh' borderRadius='.9rem'>
        <SubTitle fontSize='2.2rem'>About The Site</SubTitle>
        <Container padding='0 1rem'>
          <Param>
            This is a template of a ecommerce site made with NextJS, Redux and MongoDB Atlas.
          </Param>
        </Container>
      </Section>

      <Section bg='#111' flexDirection='column' gap='2rem' minHeight='20vh' borderRadius='.9rem'>
        <SubTitle fontSize='2.2rem'>Feactures</SubTitle>
        <Container padding='0 1rem'>
          <Param>
            This site has a server side cart, and an admin panel that you can only access by login
            with a github account or you can pick bypass and force the entry.
          </Param>
        </Container>
      </Section>

      <Section bg='#111' flexDirection='column' gap='2rem' minHeight='20vh' borderRadius='.9rem'>
        <SubTitle fontSize='2.2rem'>Important</SubTitle>
        <Container padding='0 1rem'>
          <Param>
            This is just a template site also I mainly did it to practice and improve my code,
            and learn more about backend so please {"don't"} put sensitive data here.
          </Param>
        </Container>
      </Section>
    </Main>
     
    </Layout>
  )
}