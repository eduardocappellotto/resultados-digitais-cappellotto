import styled, { css } from 'styled-components'
import { Container } from "@/components/Container";
import { Wrapper as Text } from '../Text/styles'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 1.7rem 0;

    ${Container} {
      display: flex;
      justify-content: space-between;
      align-items: center;

      ${media.greaterThan('medium')`
        gap: ${theme.spacings.xs};
        justify-content: center;
      `}
    }

    * {
      font-size: ${theme.font.sizes.sm};
    }

    ${Text} {
      color: ${theme.colors.gray[500]};
    }

    a {
      font-weight: ${theme.font.bold};
      text-decoration: underline;
      color: ${theme.colors.gray[500]};
    }
  `}
`
