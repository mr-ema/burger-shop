// INDIVIDUAL TYPES
type FlexDirection = 'row'|'column'|'column-reverse'|'row-reverse';
type JustifyContent = 'center'|'space-around'|'space-between'|'flex-start'|'flex-end'|'space-evenly';
type AlignItems = 'center'|'flex-start'|'flex-end'|'normal'|'stretch';
type TextAlign = 'center'|'justify'|'left'|'right'|'start'|'end';
type Display = 'block'|'inline'|'flex'|'inline-block'|'inline-flex';
type FontWeight = 'normal'|'bold'|'bolder'|'lighter'|'number'|'initial'|'inherit';
type FontSize = 'large'|'medium'|'small'|'larger'|'smaller'|'x-large'|'xx-large'|'x-small'|'xx-small'|string;
type Position = 'relative'|'absolute'|'sticky'|'fixed'|'static';
type AlignSelf = 'auto'|'stretch'|'center'|'flex-start'|'flex-end'|'baseline'|'initial'|'inherit';
type JustifySelf = 'auto'|'stretch'|'center'|'start'|'end'|'baseline';
type BorderStyle = 'hidden'|'dotted'|'dashed'|'solid'|'double'|'groove'|'ridge'|'inset'|'outset';
type FlexWrap = 'wrap'|'wrap-reverse'|'nowrap';

// INTERFACES
// Border =========================================================
interface Border {
  border?: string,
  borderRadius?: string,
  borderWidth?: string,
  borderColor?: string,
  borderStyle?: BorderStyle,
}
// Flex ============================================================
interface Flex {
  flexDirection?: FlexDirection,
  justifyContent?: JustifyContent,
  alignItems?: AlignItems,
  flexWrap?: FlexWrap,
  gap?: string,
}
// Grid ============================================================
interface Grid {
  gridColumn?: string,
  gridRow?: string,
  justifyContent?: JustifyContent,
  alignItems?: AlignItems,
  gap?: string
}
// Measurements ============================================================
interface Measurements {
  width?: string,
  height?: string,
  maxWidth?: string,
  minWidth?: string,
  maxHeight?: string,
  minHeight?: string,
}
// Button ==========================================================
export interface IButton extends Flex, IText, Measurements {
  border?: string,
  borderRadius?: string,
  bg?: string,
  color?: string,
  padding?: string,
  width?: string,
  height?: string,
  placeSelf?: string,
}

// Containers ==========================================================
export interface IContainer extends Flex, Measurements, Border {
  bg?: string,
  color?: string,
  padding?: string,
  position?: Position,
  opacity?: string,
  top?: string,
  left?: string,
  right?: string,
  bottom?: string,
  zIndex?: string,
}

export interface ISection extends Flex, Measurements, Border {
  width?: string,
  height?: string,
  color?: string,
  bg?: string,
  padding?: string,
  opacity?: string,
}

export interface IMain extends Grid, Measurements {
  bg?: string,
}

// Texts ==========================================================
export interface IText {
  color?: string,
  fontSize?: FontSize,
  fontWeight?: FontWeight,
  textAlign?: TextAlign
}

export interface ITextSpan extends IText, Flex, Border {
  bg?: string,
  display?: Display, 
  padding?: string,
}

export interface ITitle extends IText {
  width?: string,
}
// Links ======================================================
export interface ILink extends IText {}
export interface ILinkFlex extends ILink, Flex {}
export interface ILinkButton extends ILinkFlex, IButton {}
// Forms ======================================================
export interface IForm extends IContainer{}
export interface IInvalidField extends ITextSpan {
  position?: Position,
  top?: string,
  bottom?: string,
  left?: string,
  right?: string
}
export interface IInput extends IText, Border {
  bg?: string,
  padding?: string 
  width?: string,
  height?: string,
}
export interface ILabel extends Flex, IText {}