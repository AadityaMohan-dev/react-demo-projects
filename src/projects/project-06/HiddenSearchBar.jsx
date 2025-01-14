import React, { useState } from 'react'

function HiddenSearchBar() {
    const [bgColor,setBgColor] = useState("white")
    const [show,setShow] = useState(false)
    const handleClick = (e) => {
            setBgColor("black")
            if(e.target.id === "container"){
                setBgColor("white")
                setShow(false)
            }
    }
  return (
    <div className= "h-screen w-full items-center text-center" id='container' style={{backgroundColor : bgColor}} onClick={handleClick} >
     {show ? (
        <input type="text" className='w-96 border h-10 rounded' placeholder='search...'/>
     ) : (
        <div id="btn" onClick={() => (setShow(true), setBgColor("black"))} className="px-5 py-3 border border-black rounded w-24">search</div>
     )
     }
    
    </div>
  )
}

export default HiddenSearchBar
