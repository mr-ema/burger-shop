import { Container, } from '@styledComponents/main';
import { AdminLayout } from '@/components/admin';
import { Form, FormButton, Input, InvalidField } from '@styledComponents/forms';
import { Title } from '@styledComponents/text';
import useFormValidation from '@/hooks/useFormValidation';
import { IProduct } from '@/types/yup';
import { validate }  from '@/components/admin/product/add';
import { Button } from '@styledComponents/buttons';
import { FloatError } from '@/components/errors';

export default function Page() {
  const dataSchema: IProduct = {
    name: '',
    stock: -1, // -1 = 'No stock'
    price: 0,
    description: ''
  }

  const { 
    handleSubmit, handleChange, error, sended, setSended, serverError
  } = useFormValidation<IProduct>(validate, dataSchema, 'POST', '/api/admin/product');

  if (sended && serverError.length === 0) return (
    <AdminLayout>
      <Container height='100%' color='#000'>
        <Title>Created</Title>
        <Button  onClick={() => setSended(false)} 
          color='#fff' bg='#222'
        >Add More Products</Button>
      </Container>
    </AdminLayout>
    )
  

  return (
    <AdminLayout>
      <Container width='100%' height='100%' bg='#eee' padding='0 0 2rem 0'>
      
      <Container gap='.3rem' maxHeight='180px' flexWrap='nowrap' style={{overflowY: 'scroll'}} 
        flexDirection='column' width='100%'>
        {serverError && 
          serverError.map((err, idx) => (
            <FloatError key={idx} code={err.code} message={err.message}/>
        ))}
      </Container>

        <Form autoComplete='off' onSubmit={handleSubmit}
          minWidth='40%' maxWidth='90%' color='#000'
          gap='1.5rem' alignItems='center' minHeight='65%'
          bg='#fff' borderRadius='.3rem'>
            
          <Title fontSize='2rem'>Add A New Product</Title>

          <Container flexDirection='column' width='100%' height='90px'>
            <label htmlFor='name'></label>
            <Input onChange={handleChange} width='100%' type='text' id='name' name='name' placeholder='Product Name'/>
            {error && <InvalidField color='#ff8000'>{error.name}</InvalidField>}
          </Container>

          <Container flexDirection='row' width='100%' justifyContent='space-between' flexWrap='nowrap'>
            <Container flexDirection='column' width='100%' height='90px'>
              <label htmlFor='stock'></label>
              <Input onChange={handleChange} width='100%' type='number' id='stock' name='stock' placeholder='Stock' />
              {error && <InvalidField color='#ff8000'>{error.stock}</InvalidField>}
            </Container>

            <Container flexDirection='column' width='100%' height='90px'>
              <label htmlFor='price'></label>
              <Input onChange={handleChange} width='100%' type='number' id='price' name='price' placeholder='Product Price'/>
              {error && <InvalidField color='#ff8000'>{error.price}</InvalidField>}
            </Container>
          </Container>
    
          <Container flexDirection='column' width='100%' height='90px'>
            <label htmlFor='description'></label>
            <Input onChange={handleChange} width='100%' type='text' id='description' name='description' placeholder='Product Description'/>
            {error && <InvalidField color='#ff8000'>{error.description}</InvalidField>}
          </Container>
          
          <Container width='60%'>
            <FormButton width='100%' height='35px' placeSelf='center' type='submit'>Create</FormButton>
          </Container>
        </Form>
      </Container>
    </AdminLayout>
  )
}