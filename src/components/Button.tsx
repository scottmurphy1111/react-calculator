import React, {forwardRef, memo} from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.div`
  display: flex;
  flex: 0 1 25%;

  button {
    width: 100%;
    height: 40px;
    margin: 2px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`

const Button = ({value, handler}: any, ref: any) => (
  <ButtonStyled style={{flexBasis: value === '=' ? '50%' : '25%'}}>
    <button type='button' ref={ref} onClick={() => handler(ref)}>
      {value}
    </button>
  </ButtonStyled>
)

export default memo(forwardRef(Button))
