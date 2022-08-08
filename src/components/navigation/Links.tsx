import Link from 'next/link';
import styled from 'styled-components';

export function Links(): JSX.Element {
  return (
    <>
       <Box>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </Box>
      <Box>
        <Link href='/admin'>
          <a>Admin</a>
        </Link>
      </Box>
      <Box>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </Box>

    </>
  )
}

const Box = styled.li`
   a {
    color: #eee;
    display: block;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 900px){ font-size: .8rem; }
    @media screen and (max-width: 650px){ font-size: .7rem; }

    &:hover {
      opacity: .6;
    }
  }
`