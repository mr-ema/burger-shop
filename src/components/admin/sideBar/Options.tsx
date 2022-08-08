import styled from 'styled-components';
import { 
  MdOutlineShoppingBag, MdAddBox, MdDelete, MdEdit, 
  MdStorefront, MdPerson, MdDeliveryDining 
} from 'react-icons/md';
import { BsCart } from 'react-icons/bs';
import DropDown from './links/DropDown';
import SingleLink from './links/SingleLink';

export default function Options(): JSX.Element {
  return (
    <>
      <Wrapper>
        <Title>Components</Title>
        <DropDown name='Products' icon={<MdOutlineShoppingBag/>}>
          <SingleLink path='/admin/products/add' icon={<MdAddBox/>} name='Add' />
          <SingleLink path='/admin/products/remove' icon={<MdDelete/>} name='Remove' />
          <SingleLink path='/admin/products/edit' icon={<MdEdit/>} name='Edit' />
          <SingleLink path='/admin/products/list-all' icon={<MdStorefront/>} name='List All' />
        </DropDown>
        
        <SingleLink path='/admin/customers' icon={<MdPerson/>} name='Customers' />
        <SingleLink path='/admin/deliveries' icon={<MdDeliveryDining/>} name='Deliveries' />
        <SingleLink path='/admin/carts' icon={<BsCart/>} name='Carts' />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: .6rem;
`

const Title = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 600px){font-size: 1rem;}
`