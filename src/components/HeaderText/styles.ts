import styled, { DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'

export type WrapperProps = {
  $color: 'white' | 'dark'
  $size: 'small' | 'medium' | 'large'
  $align: 'left' | 'center'
}

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.lg};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlg};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes['2xlg']};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes['2xlg']};
    `}
  `
}

export const Wrapper = styled.h1<WrapperProps>`
  ${({ theme, $color, $size = 'medium', $align }) => css`
    color: ${theme.colors[$color!]};
    text-align: ${$align};

    ${!!$size && wrapperModifiers[$size](theme)};
  `}
`
