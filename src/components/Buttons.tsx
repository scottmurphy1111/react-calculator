import React from 'react'
import styled from 'styled-components'

const ButtonsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
`

function Buttons({children}: any) {
  return <ButtonsStyled>{children}</ButtonsStyled>
}

export default Buttons
