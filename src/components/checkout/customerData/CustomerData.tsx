import { Spinner } from '@/components/loaders';
import { Button } from '@styledComponents/buttons';
import { Form, Input, InvalidField } from '@styledComponents/forms';
import { Container } from '@styledComponents/main';
import { SubTitle } from '@styledComponents/text';
import React from 'react';
import StepBox from '../StepBox';
import useLogic from './useLogic';

export default function CustomerData(): JSX.Element | null {
  const [isMount, setIsMount] = React.useState<boolean>(false);
  const { handleSubmit, handleChange, handleBlur, error } = useLogic();

  React.useEffect(() => { setIsMount(true) }, []);

  if(!isMount) return <Spinner />  // Fix hydration error

  return (
    <Container width='100vw' flexDirection='column' minHeight='100vh'>
      <StepBox step={1} />
      <Form minWidth='40%' maxWidth='80%' onSubmit={handleSubmit} autoComplete='off' color='#000' gap='1.5rem' alignItems='center' padding='2.6rem 1.3rem' bg='#fff' borderRadius='.3rem'>
        <SubTitle fontSize='2.4rem' width='100%'>Contact Information</SubTitle>

        <Container flexDirection='row' width='100%' justifyContent='space-between'>
          <Container width='100%' flexDirection='column' alignItems='flex-start' height='70px'>
            <Input width='100%' onChange={handleChange} onBlur={handleBlur}
              id='firstName' bg='#00000011' padding='.6rem' type='text' name='firstName' placeholder='Name'/>
            {error && <InvalidField color='#ff8000'>{error.firstName}</InvalidField>}
          </Container>

          <Container width='100%' flexDirection='column' alignItems='flex-start' height='70px'>
            <Input width='100%' onChange={handleChange} onBlur={handleBlur}
              id='lastName' bg='#00000011' padding='.6rem' type='text' name='lastName' placeholder='Last Name'/>
            {error && <InvalidField color='#ff8000'>{error.lastName}</InvalidField>}
          </Container>
        </Container>
        
        <Container width='100%' height='70px'>
          <Input onChange={handleChange} onBlur={handleBlur}
            id='email' width='100%' bg='#00000011' padding='.6rem' type='email' name='email' placeholder='Email Address'/>
          {error && <InvalidField color='#ff8000'>{error.email}</InvalidField>}
        </Container>

        <Container width='100%' height='70px'>
          <Input onChange={handleChange} onBlur={handleBlur}
            id='direction' width='100%' bg='#00000011' padding='.6rem' type='text' name='direction' placeholder='Direction'/>
          {error && <InvalidField color='#ff8000'>{error.direction}</InvalidField>}
        </Container>

        <Button type='submit' bg='#4a569c' color='#eee' width='200px' height='35px' placeSelf='center'>
          Next
        </Button>
      </Form>
    </Container>
    )
}