import styled from 'styled-components'

type Props = {
  step: number
}

export default function StepBox({ step }: Props): JSX.Element {
  return (
    <Box>
      <Step bgColor={ step > 0}>1</Step>
      <Line bgColor={ step > 1}/>
      <Step bgColor={ step > 1}>2</Step>
      <Line bgColor={ step > 2}/>
      <Step bgColor={ step > 2}>3</Step>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 2rem;
`

const Step = styled.div<{bgColor: boolean}>`
  background-color: ${props => props.bgColor ?  '#4a569c': '#ffffff30'};
  border: 0;
  color: #E6E6E6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`

const Line = styled.div<{bgColor: boolean}>`
  background-color: ${props => props.bgColor ?  '#4a569c': '#ffffff30'};
  border: 0;
  width: 100px;
  height: 10px;
`