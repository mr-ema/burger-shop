import { IText, ITextSpan, ITitle } from '@/types/styles';
import styled from 'styled-components';
import { fontReSize } from './functions';

// Param =====================================================================
export const Param = styled.p<IText>`
  color: ${props => props.color || 'inherit'};
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWeight || 'normal'};
  text-align: ${props => props.textAlign || 'center'};

  @media screen and (max-width: 900px){
    font-size: ${props => fontReSize((props.fontSize || '1rem'), 'res', 0.1)};
  }
  @media screen and (max-width: 650px){
    font-size: ${props => fontReSize((props.fontSize || '1rem'), 'res', 0.2)};
  }
`
// Span =====================================================================
export const Span = styled.span<ITextSpan>`
  background: ${props => props.bg || null};
  border: ${props => props.border || null};
  border-radius: ${props => props.borderRadius || null};
  border-width: ${props => props.borderWidth || null};
  border-color: ${props => props.borderColor || null};
  border-style: ${props => props.borderStyle || null};
  color: ${props => props.color || 'inherit'};
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  align-items: ${props => props.alignItems || 'center'};
  gap: ${props => props.gap || '1rem'};
  padding: ${props => props.padding || null};
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWeight || 'bold'};
  text-align: ${props => props.textAlign || 'center'};

  @media screen and (max-width: 900px){
    font-size: ${props => fontReSize((props.fontSize || '1rem'), 'res', 0.1)};
  }
  @media screen and (max-width: 650px){
    font-size: ${props => fontReSize((props.fontSize || '1rem'), 'res', 0.2)};
  }
`
// Title<h1> =====================================================================
export const Title = styled.h1<ITitle>`
  color: ${props => props.color || 'inherit'};
  font-family: 'Josefin Sans', sans-serif;
  font-size: ${props => props.fontSize || '4rem'};
  font-weight: ${props => props.fontWeight || 'normal'};
  text-align: ${props => props.textAlign || 'center'};
  width: ${props => props.width || 'auto'};

  @media screen and (max-width: 900px){
    font-size: ${props => fontReSize((props.fontSize || '4rem'), 'div', 1.2)};
  }
  @media screen and (max-width: 650px){
    font-size: ${props => fontReSize((props.fontSize || '4rem'), 'div', 1.3)};
  }
`
// Title<h2> =====================================================================
export const SubTitle = styled.h2<ITitle>`
  color: ${props => props.color || 'inherit'};
  font-family: 'Josefin Sans', sans-serif;
  font-size: ${props => props.fontSize || '3rem'};
  font-weight: ${props => props.fontWeight || 'normal'};
  text-align: ${props => props.textAlign || 'center'};
  width: ${props => props.width || 'auto'};

  @media screen and (max-width: 900px){
    font-size: ${props => fontReSize((props.fontSize || '3rem'), 'div', 1.2)};
  }
  @media screen and (max-width: 650px){
    font-size: ${props => fontReSize((props.fontSize || '3rem'), 'div', 1.3)};
  }
`