import useCounter from '../hooks/useCounter'
const INCREMENT = 10

function CounterAppWithCustomHook () {
  const { counter, increment, decrement, reset } = useCounter()
  return (
    <div className="container" style={{ padding: '2rem 0' }} >
        <div>Counter with CustomHook: {counter}</div>
        <hr />
        <div >
          <button onClick={() => increment(INCREMENT)} >+{INCREMENT}</button>
          <button onClick={reset} >reset</button>
          <button onClick={() => decrement(INCREMENT)} >-{INCREMENT}</button>
        </div>
    </div>

  )
}

export default CounterAppWithCustomHook
