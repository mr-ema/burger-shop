import { IMain, IContainer, ISection } from '@/types/styles';
import styled from 'styled-components';

export const Wrapper = styled.div<{bg?: string}>`
  background-color: ${props => props.bg || '#161616'};
  color: #ddd;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0;

  min-height: 100vh;
  width: 100vw;
`

export const Main = styled.main<IMain>`
  background: ${props => props.bg || 'none'};
  grid-column: ${props => props.gridColumn || '2/12'};
  grid-row: ${props => props.gridRow || '2'};

  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent || 'unset'};
  gap: 2rem;

  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.maxWidth || null};
  max-height: ${props => props.maxHeight || null};
  min-width: ${props => props.minWidth || null};
  min-height: ${props => props.minHeight || null};
`

export const Container = styled.div<IContainer>`
  background: ${props => props.bg || 'none'};
  border: ${props => props.border || null};
  border-radius: ${props => props.borderRadius || null};
  border-width: ${props => props.borderWidth || null};
  border-color: ${props => props.borderColor || null};
  border-style: ${props => props.borderStyle || null};
  color: ${props => props.color || null};
  display: flex;
  flex-direction: ${props => props.flexDirection || 'unset'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  gap: ${props => props.gap || '1.3rem'};
  position: ${props => props.position || 'relative'};
  padding: ${props => props.padding || null};
  opacity: ${props => props.opacity || null};
  left: ${props => props.left || null};
  top: ${props => props.top || null};
  right: ${props => props.right || null};
  bottom: ${props => props.bottom || null};

  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.maxWidth || null};
  max-height: ${props => props.maxHeight || null};
  min-width: ${props => props.minWidth || null};
  min-height: ${props => props.minHeight || null};

  z-index: ${props => props.zIndex || null};
`

export const Section = styled.section<ISection>`
  background: ${props => props.bg || 'none'};
  border: ${props => props.border || null};
  border-radius: ${props => props.borderRadius || null};
  border-width: ${props => props.borderWidth || null};
  border-color: ${props => props.borderColor || null};
  border-style: ${props => props.borderStyle || null};
  color: ${props => props.color || null};
  display: flex;
  flex-direction: ${props => props.flexDirection || 'unset'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  gap: ${props => props.gap || '1.3rem'};
  opacity: ${props => props.opacity || null};

  width: ${props => props.width || 'auto'};
  height: ${props => props.height || null};
  max-width: ${props => props.maxWidth || null};
  max-height: ${props => props.maxHeight || null};
  min-width: ${props => props.minWidth || null};
  min-height: ${props => props.minHeight || '45vh'};
`