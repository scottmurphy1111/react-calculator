import React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 200px;
`

function Wrapper({children}: any) {
  return <WrapperStyled>{children}</WrapperStyled>
}

export default Wrapper
