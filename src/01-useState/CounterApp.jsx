import { useState } from 'react'

function CounterApp () {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })
  const { counter1, counter2, counter3 } = state
  const handleClick = () => {
    setState({ ...state, counter1: counter1 + 1 })
  }
  return (
    <>
        <div>CounterApp: {counter1}</div>
        <div>CounterApp: {counter2}</div>
        <div>CounterApp: {counter3}</div>
        <hr />
        <button onClick={handleClick} >+1</button>
    </>

  )
}

export default CounterApp
