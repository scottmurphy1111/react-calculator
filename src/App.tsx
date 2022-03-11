/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
import React, {createRef, RefObject, useEffect, useMemo, useRef, useState} from 'react'

import './App.css'
import Button from './components/Button'
import Buttons from './components/Buttons'
import Display from './components/Display'
import Wrapper from './components/Wrapper'

const btns = [
  ['C', '+/-', '%', '/'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
]

const App = () => {
  const [calc, setCalc] = useState({
    sign: '',
    value: '',
    result: '',
  })

  const buttonRefs = useRef([])

  // useEffect(() => {
  buttonRefs.current = useMemo(
    () => btns.flat().map((btn, i) => buttonRefs.current[i] ?? createRef()),
    []
  )
  // }, [])

  useEffect(() => {}, [])

  const handleReset = () => {
    setCalc({
      sign: '',
      value: '',
      result: '',
    })
  }

  const doMath = (val: string, total: string, sign: string): string => {
    // console.log(`val =  ${val}`)
    // console.log(`total =  ${total}`)
    // console.log(`sign =  ${sign}`)
    const numVal = +val
    const numTotal = +total
    const returnVal =
      sign === '+'
        ? numVal + numTotal
        : sign === '-'
        ? numVal - numTotal
        : sign === 'X'
        ? numVal * numTotal
        : numVal / numTotal

    return returnVal.toString()
  }

  const handlePlusMinus = () => {
    const numVal = +calc.value
    setCalc({
      ...calc,
      value: (numVal * -1).toString(),
    })
  }

  const handlePercent = () => {}

  const handleMathSign = (ref: any) => {
    setCalc({
      ...calc,
      sign: ref.current.textContent ? ref.current.textContent : '',
      value: '',
      result: calc.value,
    })
  }

  const handlePeriod = () => {
    let numVal

    if (!calc.value) {
      numVal = '0.'
    } else {
      numVal = +calc.value
    }

    setCalc({
      ...calc,
      value: numVal.toString(),
    })
  }

  const handleEqual = () => {
    setCalc({
      ...calc,
      result: doMath(calc.result, calc.value, calc.sign),
      value: calc.result,
    })
  }

  const handleNumber = (ref: any) => {
    const value = ref.current.textContent

    setCalc({
      ...calc,
      value: calc.value + value,
    })
  }

  return (
    <Wrapper>
      <Display calc={calc} />
      <Buttons>
        {btns.flat().map((btn, i) => (
          <Button
            ref={buttonRefs.current[i]}
            key={btn}
            value={btn}
            handler={
              btn === 'C'
                ? handleReset
                : btn === '+/-'
                ? handlePlusMinus
                : btn === '%'
                ? handlePercent
                : btn === '/' || btn === 'X' || btn === '-' || btn === '+'
                ? handleMathSign
                : btn === '.'
                ? handlePeriod
                : btn === '='
                ? handleEqual
                : handleNumber
            }
          />
        ))}
      </Buttons>
    </Wrapper>
  )
}

export default App
