import { Span } from '@styledComponents/text';
import { Container } from '@styledComponents/main';
import { FiAlertTriangle } from 'react-icons/fi';

type Props = {
  code?: number,
  message: string
}

export default function FloatError({ code, message }: Props): JSX.Element {
  return (
    <Container 
      bg='#00000080' color='#ffffff' width='100%' maxHeight='100px'
      border='2px solid #c40000' borderWidth='2px 0' padding='.69rem 0'>

      <Container gap='.4rem'>
        <Span fontSize='1.8rem' color='#c40000'>
          <FiAlertTriangle/>
        </Span>
        <Span>Error ({code || 'unknow'})</Span>
      </Container>

      <Span>{message}</Span>
    </Container>
  )
}