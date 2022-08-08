import { Title } from '@styledComponents/text';
import { Container } from '@styledComponents/main';
import Image from 'next/image';

type Props = {
  title: string,
  imgUrl: string,
  alt: string,
  height?: string
}

export default function Banner({ title, imgUrl, alt, height }: Props): JSX.Element {
  return (
    <Container width='100vw'>
      <Container width='100%' height={height || '90vh'} opacity='0.4'>
        <Image 
          src={imgUrl}
          alt={alt}
          priority={true}
          layout='fill'
          objectFit='cover'
        />
      </Container>
      <Container position='absolute'>
        <Title color='#99acff'>{title}</Title>
      </Container>
    </Container> 
  )
}