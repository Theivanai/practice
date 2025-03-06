import React, { useState } from 'react'

function Task1() {
  const [count, setcount] = useState(0)

  return (
    <div>
      <p>count:{count}</p>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Task1