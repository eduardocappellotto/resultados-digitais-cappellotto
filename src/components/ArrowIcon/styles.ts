import styled, { css } from 'styled-components'

type WrapperProps = {
  $direction: 'left' | 'up' | 'right' | 'down'
}

const wrapperModifiers = {
  left: () => css`
    transform: rotate(-180deg);
  `,
  up: () => css`
    transform: rotate(270deg);
  `,
  right: () => css`
    transform: rotate(0deg);
  `,
  down: () => css`
    transform: rotate(90deg);
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ $direction }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    ${!!$direction && wrapperModifiers[$direction]()};
  `}
`
