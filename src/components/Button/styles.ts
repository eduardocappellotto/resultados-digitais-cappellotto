import styled, { css } from 'styled-components'

type WrapperProps = {
  $iconPosition: 'left' | 'right'
}

const wrapperModifiers = {
  left: () => css`
    flex-direction: row-reverse;
  `,
  right: () => css`
    flex-direction: row;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, $iconPosition }) => css`
    width: 100%;
    height: 5.2rem;
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.secondary[900]};
    background-color: ${theme.colors.secondary[500]};
    line-height: 24px;
    font-size: ${theme.font.sizes.md};
    font-weight: ${theme.font.extrabold};
    text-transform: uppercase;
    color: ${theme.colors.primary[900]};
    letter-spacing: 0.2px;
    cursor: pointer;
    -webkit-box-shadow: 0px 6px 1px -2px ${theme.colors.black};
    -moz-box-shadow: 0px 6px 1px -2px ${theme.colors.black};
    box-shadow: 0px 6px 1px -2px ${theme.colors.black};
    transition: 0.1s;

    ${!!$iconPosition && wrapperModifiers[$iconPosition!]};

    &:hover {
      background-color: ${theme.colors.secondary[200]};
      border-color: transparent;
    }

    &[disabled] {
      background-color: ${theme.colors.gray[200]};
      color: ${theme.colors.gray[500]};
      pointer-events: none;
      border-color: transparent;
      -webkit-box-shadow: 0px 6px 1px -2px ${theme.colors.gray[500]};
      -moz-box-shadow: 0px 6px 1px -2px ${theme.colors.gray[500]};
      box-shadow: 0px 6px 1px -2px ${theme.colors.gray[500]};
    }
  `}
`
