'use client'

import { Wrapper as Text } from '@/components/Text/styles'
import { Wrapper as TextField } from '@/components/TextField/styles'
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

export const Form = styled.form`
  ${({ theme }) => css`
    max-width: 620px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};

    a {
      text-decoration: underline;
    }
  `}
`


export const FieldsWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: ${theme.spacings.sm};
    column-gap: 4rem;
    grid-auto-rows: min-content;

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(2, 1fr);
    `};

    ${TextField}:first-of-type {
      ${media.greaterThan('medium')`
        grid-column: 1 / 3;
      `};
    }
  `}
`

export const Warnings = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    ul {
      padding-left: 2rem;
    }

    li {
      color: ${theme.colors.gray[200]};
      line-height: 1.5;
    }
  `}
`
