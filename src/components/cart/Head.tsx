import styled from 'styled-components'

export default function Head(): JSX.Element {
  return (
    <TableHead>
      <span>Product</span>     
      <span>Quantity</span>   
      <span>Price</span>   
      <span>Total</span>
    </TableHead>
  )
}

const TableHead = styled.header`
  background-color: #333;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: .6rem;

  font-size: 1rem;
  font-weight: bold;
  @media screen and (max-width: 900px){font-size: .8rem;}

  span:first-child {
    width: 100px;
    text-align: center;
    @media screen and (max-width: 600px) {width: 60px;}
  }
`