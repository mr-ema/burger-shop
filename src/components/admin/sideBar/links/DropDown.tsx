import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

type Props = {
  name: string,
  icon: React.ReactNode,
  children: React.ReactNode
}

export default function DropDown({ icon, name, children }: Props
  ): React.FunctionComponentElement<JSX.Element> {

  const [isActive, setIsActive] = React.useState<boolean>(false);

  const handleClick = (element: SyntheticEvent) => {
    element.preventDefault();
    setIsActive(!isActive);
  }
  
  return (
    <>
      <Wrapper>
          <ToggleButton onClick={handleClick}>
              <span>{icon}</span>
              <span>{name}</span>
              <span className='arrow'><MdKeyboardArrowDown/></span>
          </ToggleButton>
      </Wrapper>
        {isActive && <Container>{children}</Container>}
    </>
  )
}

// Styles
const Wrapper = styled.li`
  border-radius: .39rem;
  cursor: pointer;
  color: #ddd;
  
  &:hover {
    transition: all 300ms ease-in;
    background: #b4b5ff;
    color: #222;
  }
`

const ToggleButton = styled.button`
    background: none;
    color: inherit;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    font-weight: bold;
    position: relative;
    padding: .6rem;
    text-align: center;
    text-decoration: none;
    width: 100%;

    @media screen and (max-width: 900px){font-size:  1rem;}
    @media screen and (max-width: 600px){font-size: .8rem;}

    span:nth-child(odd) { font-size: 1.4rem; }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 .6rem;
`