import styled from 'styled-components';
import { MdDashboard } from 'react-icons/md';
import SingleLink from './links/SingleLink';
import Options from './Options';

export default function SideBar(): JSX.Element | null {
  return (
    <Wrapper>
      <Logo />
      <SingleLink icon={<MdDashboard/>} path='/admin' name='DashBoard'/>
      <Options />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-column: auto;
  grid-row: 2;
  background-color: #18192c;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: absolute;

  height: 100vh;
  z-index: 2;

  @media screen and (max-width: 900px){width: 100%;}
`

const Logo = styled.div`
  width: 100%;
  height: 100px;
`