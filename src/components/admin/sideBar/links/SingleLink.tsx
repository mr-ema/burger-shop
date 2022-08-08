import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  icon: React.ReactNode,
  name: string
  basePath?: string, 
  path: string,
}

export default function SingleLink({ icon, name, path }: Props): React.FunctionComponentElement<JSX.Element> {

  return (
    <Wrapper>
      <Link href={path}>
        <a>
          <span>{icon}</span>
          <span>{name}</span>
        </a>
      </Link>
    </Wrapper>
  )
}


// Styles
const Wrapper = styled.li`
  list-style: none;
  border-radius: .39rem;
  cursor: pointer;
  color: #ddd;
  
  &:hover {
    transition: all 300ms ease-in;
    background: #b4b5ff;
    color: #222;
  }

  & > a {
    color: inherit;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    font-weight: bold;
    padding: .6rem;
    text-align: center;
    text-decoration: none;
    width: 100%;

    span:first-child { font-size: 1.4rem; }

    @media screen and (max-width: 900px){font-size:  1rem;}
    @media screen and (max-width: 600px){font-size: .8rem;}
  }
`
