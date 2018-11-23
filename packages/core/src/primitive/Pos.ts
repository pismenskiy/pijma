import styled from '../styled'

import {Value, cssValue} from './Value'
import {Box, BoxProps} from './Box'

export interface PosProps extends BoxProps {
  type?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
  zIndex?: number | 'auto'
  top?: Value
  right?: Value
  bottom?: Value
  left?: Value
}

export const Pos = styled(Box, {
  shouldForwardProp: (prop) => !['type', 'zIndex', 'top', 'right', 'bottom', 'left'].includes(prop),
})<PosProps>(({theme, ...props}) => ({
  position: props.type,
  zIndex: props.zIndex,
  top: cssValue(props.top, theme.scale),
  right: cssValue(props.right, theme.scale),
  bottom: cssValue(props.bottom, theme.scale),
  left: cssValue(props.left, theme.scale),
}))
