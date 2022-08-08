import { LinkButton } from '@styledComponents/links';
import Link from 'next/link';
import styled from 'styled-components';

export default function Footer(): JSX.Element {
  return (
    <TableFooter>
      <Link href={'/'}>
        <LinkButton bg='none' color='#fff' border='2px solid #666'>Back To Shop</LinkButton>
      </Link> 
      
      <Link href={'/checkout'}>
        <LinkButton bg='#00b4d8' padding='.4rem 2rem' color='#000000'>CheckOut</LinkButton>
      </Link>
    </TableFooter>
  )
}

const TableFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: -.8rem;
  padding: .6rem;

  font-size: 1rem;
  font-weight: bold;
  @media screen and (max-width: 900px){font-size: .8rem;}
`