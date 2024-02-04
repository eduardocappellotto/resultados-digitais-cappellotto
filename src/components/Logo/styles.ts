import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100px;
  height: 24px;

  ${media.greaterThan('medium')`
      width: 147px;
      height: 36px;
  `}
`
