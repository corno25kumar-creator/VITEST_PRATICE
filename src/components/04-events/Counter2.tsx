import { useState } from 'react'

export const Counter2 = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1 data-testid="count-val">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}