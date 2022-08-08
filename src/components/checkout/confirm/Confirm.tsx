import { Button, ButtonIcon } from '@styledComponents/buttons';
import { Form, Input, InvalidField } from '@styledComponents/forms';
import { Container } from '@styledComponents/main';
import { SubTitle } from '@styledComponents/text';
import { FiEdit } from 'react-icons/fi';
import React from 'react';
import useLogic from './useLogic';
import StepBox from '../StepBox';
import { FloatError } from '@/components/errors';
import { Spinner } from '@/components/loaders';

type Disabled = {
  form_1: boolean,
  form_2: boolean
}

export default function Confirm(): JSX.Element | null {
  const [isMount, setIsMount] = React.useState<boolean>(false);
  const [disabled, setDisabled] = React.useState<Disabled>({
    form_1: true,
    form_2: true
  });
  const { 
    handleChange, data, error, handleSubmit, 
    handleSelect, serverError, sended
  } = useLogic();

  
  React.useEffect(() => { setIsMount(true)}, []);
  
  if(!isMount) return <Spinner />  // Fix hydration error
  
  return (
    <Container width='100vw' flexDirection='column' minHeight='100vh' padding='2rem 0'>
      <StepBox step={3} />
      {serverError.length > 0 && 
        serverError.map((err, idx) => <FloatError key={idx.toString()} {...err} />)
      }
      
      <Form color='#000' gap='1.5rem' onSubmit={handleSubmit}
        alignItems='flex-start' padding='2.6rem 1.3rem' bg='#fff' 
        borderRadius='.3rem'>
        <SubTitle fontSize='2.4rem' width='100%'>Contact Information</SubTitle>

        <Container width='100%' gap='.3rem'>
        <ButtonIcon fontSize='1.6rem' type='button'
          onClick={() => setDisabled({ ...disabled, form_1: !disabled.form_1 })}
          ><FiEdit /></ButtonIcon>
        </Container>

        <Container flexDirection='row' width='100%' justifyContent='space-between'>
          <Container width='100%' flexDirection='column' alignItems='flex-start' height='70px'>
            <Input width='100%' onChange={handleChange} disabled={disabled.form_1} value={data.firstName}
              id='firstName' bg='#00000011' padding='.6rem' type='text' name='firstName' placeholder='Name'/>
            {error && <InvalidField color='#ff8000'>{error.firstName}</InvalidField>}
          </Container>

          <Container width='100%' flexDirection='column' alignItems='flex-start' height='70px'>
            <Input width='100%' onChange={handleChange} disabled={disabled.form_1} value={data.lastName}
              id='lastName' bg='#00000011' padding='.6rem' type='text' name='lastName' placeholder='Last Name'/>
            {error && <InvalidField color='#ff8000'>{error.lastName}</InvalidField>}
          </Container>
        </Container>

        <Container width='100%' height='70px'>
          <Input onChange={handleChange} disabled={disabled.form_1} value={data.email}
            id='email' width='100%' bg='#00000011' padding='.6rem' type='email' name='email' placeholder='Email Address'/>
          {error && <InvalidField color='#ff8000'>{error.email}</InvalidField>}
        </Container>

        <Container width='100%' height='70px'>
          <Input onChange={handleChange} disabled={disabled.form_1} value={data.direction}
            id='direction' width='100%' bg='#00000011' padding='.6rem' type='text' name='direction' placeholder='Direction'/>
          {error && <InvalidField color='#ff8000'>{error.direction}</InvalidField>}
        </Container>

        <SubTitle fontSize='2.4rem' width='100%'>Delivery</SubTitle>
        <Container flexDirection='row' width='100%' style={{ marginBottom: '2rem' }}>
          <Container width='100%' gap='.3rem'>
            <ButtonIcon fontSize='1.6rem' type='button'
              onClick={() => setDisabled({ ...disabled, form_2: !disabled.form_2 })}><FiEdit /></ButtonIcon>
          </Container>

          <Input name='date' id='date' type='date' 
            onChange={handleChange} disabled={disabled.form_2}
            value={data.date}
          />
          
          <select name="time" onChange={handleSelect} disabled={disabled.form_2} value={data.time}>
            <option value="9:00">9:00</option>
            <option value="12:00">12:00</option>
            <option value="15:00">15:00</option>
            <option value="18:00">18:00</option>
          </select>
        </Container>

        <Button type='submit' disabled={sended} bg='#4a569c' color='#eee' width='200px' height='35px' placeSelf='center'>
          confirm and pay
        </Button>
      </Form>
    </Container>
    )
}