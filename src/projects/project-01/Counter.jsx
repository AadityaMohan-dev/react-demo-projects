import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count , setCount] = useState(0)
  return (<>
    <div className='rounded bg-black text-white font-bold  items-center text-center '>
      <h1 className='text-9xl'>{count}</h1>
    </div>
    <div className='w-screen items-center flex justify-center gap-20 border py-10'>
        <button onClick={()=>{setCount(count + 1)}} className='rounded-full w-10 bg-black items-cente text-white text-4xl'>+</button>
        <button onClick={()=>{setCount(count - 1)}} className='rounded-full w-10 bg-black items-cente text-white text-4xl'>-</button>
    </div>
    </>
  )
}

export default Counter
