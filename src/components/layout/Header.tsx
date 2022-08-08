import { Menu } from '@/components/navigation';
import styled from 'styled-components';

export default function Header(): JSX.Element {
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  grid-column: 1/13;
`