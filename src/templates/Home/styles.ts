'use client'

import { Wrapper as Text } from '@/components/Text/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  padding: 5.4rem 0;

  ${media.greaterThan('medium')`
    padding: 7.2rem 0;
  `};
`

export const Header = styled.header`
  ${({ theme }) => css` 
    margin-bottom: 4.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.xs};

    ${Text} {
      max-width: 621px;
      width: 100%;
      line-height: 2.8rem;
      text-align: center;

      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.md};
      `}
    }
  `}
`

export const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.lg};

    ${media.greaterThan('large')`
      flex-direction: row;
      justify-content: space-between;
      align-items: initial;
    `};

    > img {
      max-width: 268px;
      max-height: 198px;
      object-fit: contain;
      width: 100%;

      ${media.greaterThan('medium')`
        max-width: 471px;
        max-height: 347px;
      `};
    }
  `}
`