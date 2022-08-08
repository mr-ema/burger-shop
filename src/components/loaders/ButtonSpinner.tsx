import styled, { keyframes } from 'styled-components';

export default function ButtonSpinner(): JSX.Element {
  return (
    <>
      <Spinner/>
    </>
  )
}

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  animation: ${rotate} 1800ms infinite linear;
  border-radius: 50%;
  border: 2px solid #222;
  border-left-color: transparent;
 
  width: 15px;
  height: 15px;
`