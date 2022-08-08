import { ButtonSpinner, Spinner } from '@/components/loaders';
import { Button } from '@styledComponents/buttons';
import { Form, Input } from '@styledComponents/forms';
import { Container } from '@styledComponents/main';
import { SubTitle } from '@styledComponents/text';
import React from 'react';
import StepBox from '../StepBox';
import useLogic from './useLogic';

export default function Delivery(): JSX.Element | null {
  const [isMount, setIsMount] = React.useState(false);
  const { handleSubmit, handleChange, handleSelect, sending } = useLogic();
  
  React.useEffect(() => { setIsMount(true)}, []);
  
  if(!isMount) return <Spinner />  // Fix hydration error

  return (
    <Container width='100vw' flexDirection='column' height='100vh'>
      <StepBox step={2} />
      <Form autoComplete='off' bg='#fff' borderRadius='.6rem' onSubmit={handleSubmit}>
        <SubTitle fontSize='2.4rem' width='100%'>Delivery</SubTitle>
        <Container flexDirection='row'>
          <Input name='date' id='date' type='date' onChange={handleChange}/>
          
          <select name="time" onChange={handleSelect}>
            <option value="9:00">9:00</option>
            <option value="12:00">12:00</option>
            <option value="15:00">15:00</option>
            <option value="18:00">18:00</option>
          </select>
        </Container>

        <Button type='submit' bg='#4a569c' color='#eee' width='200px' height='35px' placeSelf='center' disabled={sending}>
          {sending ? <ButtonSpinner/> : 'Next'}
        </Button>
      </Form>
    </Container>
    )
}