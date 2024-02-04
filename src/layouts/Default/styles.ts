import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Main = styled.main`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.gradient};
  `} 
`
