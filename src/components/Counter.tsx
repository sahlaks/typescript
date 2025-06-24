import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState<number>(0)
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>INC</button>
        <button onClick={()=>setCount(count-1)}>DEC</button>
    </div>
  )
}

export default Counter