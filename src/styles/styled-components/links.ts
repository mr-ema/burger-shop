import styled from 'styled-components';
import { ILink, ILinkButton, ILinkFlex } from '@/types/styles';
import { fontReSize } from './functions';

// Link<a> =====================================================================
export const LinkSimple = styled.a<ILink>`
  display: block;
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

  &:hover {
    opacity: 0.8;
  }
`
// FlexLink<a> =====================================================================
export const LinkFlex = styled(LinkSimple)<ILinkFlex>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  gap: ${props => props.gap || '1rem'};
`

export const LinkButton = styled(LinkFlex)<ILinkButton>`
  place-self: ${props => props.placeSelf || null};
  border: ${props => props.border || '0'};
  background: ${props => props.bg || '#FFAA2B'};
  border-radius: ${props => props.borderRadius || '.6rem'};
  padding: ${props => props.padding || '.4rem .9rem'};

  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`