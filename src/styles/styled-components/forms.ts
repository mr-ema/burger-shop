import { IButton, IForm, IInput, IInvalidField, ILabel } from '@/types/styles';
import styled from 'styled-components';
import { Button } from './buttons';
import { fontReSize } from './functions';

export const Form = styled.form<IForm>`
  background: ${props => props.bg || 'none'};
  border: ${props => props.border || null};
  border-radius: ${props => props.borderRadius || null};
  color: ${props => props.color || '#000'};
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  gap: ${props => props.gap || '1.5rem'};
  position: ${props => props.position || 'relative'};
  padding: ${props => props.padding || '2rem 1.6rem 1rem 1.6rem'};
  opacity: ${props => props.opacity || null};
  left: ${props => props.left || null};
  top: ${props => props.top || null};
  right: ${props => props.right || null};
  bottom: ${props => props.bottom || null};

  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.maxWidth || '80%'};
  max-height: ${props => props.maxHeight || null};
  min-width: ${props => props.minWidth || '40%'};
  min-height: ${props => props.minHeight || null};

  @media screen and (max-width: 900px){ 
    align-items: center;
    justify-content: center;
  }
`

export const Input = styled.input<IInput>`
  background: ${props => props.bg || '#00000011'};
  border: ${props => props.border || '2px solid transparent'};
  border-radius: ${props => props.borderRadius || '.36rem'};
  border-width: ${props => props.borderWidth || null};
  border-color: ${props => props.borderColor || null};
  border-style: ${props => props.borderStyle || null};
  color: ${props => props.color || 'inherit'};
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWeight || 'normal'};
  text-align: ${props => props.textAlign || null};
  padding: ${props => props.padding || '.6rem'};

  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};

  &:disabled {
    opacity: .7;
  }

  &:focus {
    background-color: #6da9ff30;
    border: 2px solid #6da9ff;
  }

  @media screen and (max-width: 900px){
    font-size: ${props => fontReSize((props.fontSize || '1rem'), 'res', 0.1)};
  }
  @media screen and (max-width: 650px){
    font-size: ${props => fontReSize((props.fontSize || '1rem'), 'res', 0.2)};
  }
`

export const InvalidField = styled.span<IInvalidField>`
  color: ${props => props.color || 'inherit'};
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  gap: ${props => props.gap || null};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  font-size: ${props => props.fontSize || '0.8rem'};
  font-weight: ${props => props.fontWeight || 'bold'};
  text-align: ${props => props.textAlign || null};
  position: ${props => props.position || 'absolute'};
  left: ${props => props.left || '.3rem'};
  top: ${props => props.top || null};
  right: ${props => props.right || null};
  bottom: ${props => props.bottom || '0'};

  @media screen and (max-width: 900px){
    font-size: ${props => fontReSize((props.fontSize || '0.8rem'), 'res', 0.1)};
  }
  @media screen and (max-width: 650px){
    font-size: ${props => fontReSize((props.fontSize || '0.8rem'), 'res', 0.2)};
  }
`

export const FormButton = styled(Button)<IButton>`
  background-color: #4a569c;
  color: #eee;
`

export const Label = styled.label<ILabel>`
  color: ${props => props.color || null};
  font-size: ${props => props.fontSize || '0.8rem'};
  font-weight: ${props => props.fontWeight || 'bold'};
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  gap: ${props => props.gap || '1rem'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  text-align: ${props => props.textAlign || null};
`