import React, { useState } from 'react'

function ToggleBgColor() {
    const [color,setColor] = useState("white")
  return (
    <div id="container" className={`bg-${color}-500 h-screen place-content-end`}>
        <div className='flex justify-around p-8 roundded bg-slate-300'>
      <button className='px-5 py-3 rounded text-white bg-red-500 uppercase' onClick={() => setColor("red")}>red</button>
      <button className='px-5 py-3 rounded text-white bg-blue-500 uppercase' onClick={() => setColor("blue")}>blue</button>
      <button className='px-5 py-3 rounded text-white bg-green-500 uppercase' onClick={() => setColor("green")}>green</button>
    </div>
    </div>
  )
}

export default ToggleBgColor
