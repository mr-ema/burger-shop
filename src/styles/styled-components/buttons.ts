import styled from 'styled-components';
import { IButton } from '@/types/styles';
import { fontReSize } from './functions';

// Button ====================================================
export const Button = styled.button<IButton>`
  place-self: ${props => props.placeSelf || null};
  background: ${props => props.bg || '#fff'};
  border: ${props => props.border || '0'};
  border-radius: ${props => props.borderRadius || '.3rem'};
  color: ${props => props.color || 'inherit'};
  font-weight: ${props => props.fontWeight || 'bold'};
  font-size: ${props => props.fontSize || '1rem'};
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
  gap: ${props => props.gap || '1rem'};
  padding: ${props => props.padding || '.4rem .9rem'};

  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.maxWidth || null};
  max-height: ${props => props.maxHeight || null};
  min-width: ${props => props.minWidth || null};
  min-height: ${props => props.minHeight || null};

  @media screen and (max-width: 900px){
    font-size: ${props => fontReSize((props.fontSize || '1rem'), 'res', 0.2)};
  }
  @media screen and (max-width: 650px){
    font-size: ${props => fontReSize((props.fontSize || '1rem'), 'res', 0.3)};
  }

  &:hover {
    transition: all 300ms;
    transform: scale(1.05);
  }

  &:disabled {
    opacity: .8;
    cursor: unset;

    &:hover {
      transform: none;
    }
  }
`
// Icon-Button ====================================================
export const ButtonIcon = styled(Button)`
  background: none;
  font-size: ${props => props.fontSize || '1.8rem'};

  @media screen and (max-width: 900px){
    font-size: ${props => fontReSize((props.fontSize || '1.8rem'), 'res', 0.2)};
  }
  @media screen and (max-width: 650px){
    font-size: ${props => fontReSize((props.fontSize || '1.8rem'), 'res', 0.4)};
  }
`