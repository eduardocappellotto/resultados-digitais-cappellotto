import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    margin: 0 auto;
    padding: 0;


    ${media.lessThan('medium')`
        padding: 0 2.4rem;
      `}
  `}
`
