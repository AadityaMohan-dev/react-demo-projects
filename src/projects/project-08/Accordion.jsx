import React, { useState } from 'react'

function Accordion({title , content}) {
    console.log(title , content);
    const[isActive, setIsActive] = useState(false)
    
  return (
    <section key={Math.random()} className='py-1'>
        
        <div id="accordion-card" className='flex justify-between p-5 bg-slate-200 space-y-4 items-center'>
            <h1>{title}</h1>
            <p onClick={() => setIsActive(!isActive)} className='cursor-pointer text-xl'>{isActive ? "-" : "+"}</p>
        </div>

        <div id="content">
            {isActive &&  <p className=' p-5 bg-yellow-200 space-y-4 items-center'>{content}</p>}
        </div>
    </section>
  )
}

export default Accordion
