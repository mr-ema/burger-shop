import { Input, Label } from '@styledComponents/forms';
import { Button, ButtonIcon } from '@styledComponents/buttons';
import { Container } from '@styledComponents/main';
import { Span } from '@styledComponents/text';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { IProduct } from '@/types/models';
import useFormValidation from '@/hooks/useFormValidation';
import validate from './validate';
import { FloatError } from '@/components/errors';

type Props = {
  price: number,
  name: string,
  stock: number,
  description: string,
  _id: string,
} 

export default function EditCard({ price, name, stock, description, _id }: Props): JSX.Element {
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const dataSchema = {
    name: name,
    price: price,
    stock: stock,
    description: description
  }
  
  
  const { 
    handleSubmit, handleChange, error, serverError, data, sended, setSended
  } = useFormValidation<Partial<IProduct>>(validate, dataSchema, 'PUT', '/api/admin/product/' + _id);

  React.useEffect(() => { setDisabled((prev) => sended || prev) }, [sended]);

  return (
      <Container
        padding='2rem 0' borderWidth='.2rem 0 0 0' borderStyle='solid'
        borderColor='#ddd' flexDirection='row' bg='#ffffff' justifyContent='space-around'
        color='#222' width='100%'>
        {serverError && serverError.map((error, idx) => (
          <FloatError key={idx} code={error.code} message={error.message} />
        ))}
        
        <Container flexDirection='column' alignItems='flex-start'>
          <Container color='#666'>
            ID: <Span color='#222'>{_id}</Span>
          </Container>

          <Container >
            <Label color='#666'>
              <Input onChange={handleChange} bg={error.name ? '#ff000030' : undefined}
                name='name' color='#222' value={data.name} disabled={disabled} />
              NAME
            </Label>
            {error && <Span fontSize='0.9rem'>{error.name}</Span>}
          </Container>

          <Container>
            <Label color='#666'>
              <Input onChange={handleChange} bg={error.price ? '#ff000030' : undefined}
                name='price' color='#222' value={data.price} disabled={disabled} />
              PRICE 
            </Label>
            {error && <Span fontSize='0.9rem'>{error.price}</Span>}
          </Container>

          <Container>
            <Label color='#666'>
              <Input onChange={handleChange} bg={error.stock ? '#ff000030' : undefined}
                name='stock' color='#222' value={data.stock} disabled={disabled}/>
              STOCK
            </Label>
            {error && <Span fontSize='0.9rem'>{error.stock}</Span>}
          </Container>

          <Container>
            <Label color='#666'>
              <Input onChange={handleChange} bg={error.description ? '#ff000030' : undefined}
                name='description' color='#222' value={data.description} disabled={disabled}/>
              DESCRIPTION 
            </Label>
            {error && <Span fontSize='0.9rem'>{error.description}</Span>}
          </Container>

          <Button  onClick={handleSubmit} disabled={disabled}
            bg={sended ? '#06b700' : '#007ab7'} color='#eee' width='100%'
            >{sended ? 'saved' : 'save'}
          </Button>
        </Container>

        <ButtonIcon onClick={() => { setDisabled(!disabled); setSended(false) }}>
              <AiFillEdit />
        </ButtonIcon>
      </Container>
  )
}