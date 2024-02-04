import { Wrapper as Button } from '@/components/Button/styles'
import { Container } from '@/components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin-top: 3.6rem;
    height: 100%;
    display: flex;

    ${media.greaterThan('large')`
    margin-top: 0;
    align-items: center;
  `}

    ${Container} {
      display: flex;
      justify-content: center;
      gap: 9.5rem;

      ${media.greaterThan('large')`
      align-items: center;
    `}

      > img {
        display: none;

        ${media.greaterThan('large')`
        display: block;
      `}
      }
    }

    ${Button} {
      ${media.lessThan('large')`
      height: 3.6rem;
      font-size: ${theme.font.sizes.sm};
    `}
    }
  `}
`

export const Result = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 510px;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xs};

    ${media.lessThan("medium")`
    gap: ${theme.spacings.sm};
    `

    }

    a {
      color: ${theme.colors.white};
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:first-of-type {
        width: max-content;
        font-size: ${theme.font.sizes.sm};
        transition: color 0.2s;

        &:hover span {
          color: ${theme.colors.light};
          text-decoration: underline;
        }

        ${media.greaterThan('large')`
          font-size: ${theme.font.sizes.lg};
        `}
      }

      &:last-of-type {
        justify-content: center;
        font-size: ${theme.font.sizes.sm};
        font-weight: ${theme.font.extrabold};
        text-transform: uppercase;
        text-align: center;

        span {
          max-width: 209px;
        }

        ${media.greaterThan('large')`
          max-width: initial;
          font-size: ${theme.font.sizes.md};
          line-height: 5rem;

          span {
            max-width: unset;
          }
        `}
      }
    }
  `}
`

export const Error = styled.div``

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 159px;
    padding: 1.5rem 3.6rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: ${theme.colors.white};
    box-shadow: 0px 8px 18px 0px #21242929;
    border-radius: 2.4rem;

    ${media.greaterThan('large')`
      padding: 3.2rem 7.2rem;
      height: 248px;
    `}

    ul {
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.xs};

      ${media.greaterThan('large')`
        gap: ${theme.spacings.sm};
      `}
    }

    img {
      width: 4.5rem;
      height: 3.8rem;

      ${media.greaterThan('large')`
        width: 7.0rem;
      `}
    }
  `}
`

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 3px;
    height: 100%;
    background-color: ${theme.colors.primary[200]};
  `}
`
