import styled, { css } from 'styled-components'

type WrapperProps = {
    $error: boolean
    $disabled: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $error, $disabled }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings}

    &:hover ${Input} {
      background-color: ${theme.colors.light};
    }

    ${$error &&
        css`
      ${Input} {
        border-color: ${theme.colors.error};
        color: ${theme.colors.error};
      }

      ${Label} {
        color: ${theme.colors.error};
      }
    `}

    ${$disabled &&
        css`
      cursor: not-allowed;

      ${Input} {
        pointer-events: none;
        background-color: ${theme.colors.gray[500]};
      }

      ${Label} {
        color: ${theme.colors.gray[500]};
      }
    `}
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    line-height: ${theme.font.sizes.sm};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    outline: none;
    border: none;
    width: 100%;
    height: 3.6rem;
    padding: 0.8rem 1.2rem;
    border: 1px solid transparent;
    background-color: ${theme.colors.white};
    color: ${theme.colors.dark};
    transition: background-color 0.2s;

    &:focus {
      background-color: ${theme.colors.light};
    }

    &::placeholder {
      color: ${theme.colors.gray[500]};
    }
  `}
`

export const ErrorText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    line-height: ${theme.font.sizes.sm};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.error};
  `}
`
