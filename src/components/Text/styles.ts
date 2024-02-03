import styled, { DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
    $color: 'black' | 'dark' | 'white'
    $size?: 'small' | 'medium' | 'large'
    $weight?: 'regular' | 'bold'
}

const wrapperModifiers = {
    small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xs};
  `,
    medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.sm};
  `,
    large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.sm};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.lg};
    `}
  `
}

export const Wrapper = styled.p<WrapperProps>`
  ${({ theme, $color, $size, $weight }) => css`
    color: ${theme.colors[$color!]};
    line-height: 1.7;
    font-weight: ${theme.font[$weight!]};

    ${!!$size && wrapperModifiers[$size!](theme)};
  `}
`
