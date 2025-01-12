import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Meal() {
    const [items,setItems] = useState([])
    useEffect(() => {
        axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then((res)=>{
            console.log(res.data.meals);
            setItems(res.data.meals)
        })
        .catch((err) => console.log(err)
        )
    },[])

    const itemsList = items.map((i) => {
                return <div className='grid grid-cols-3  py-10'>
                        <div id="card" className='bg-slate-100 rounded-lg shadow-lg p-10 w-96'>
                            <img src={i.strMealThumb } alt="" />
                            <div className='flex justify-between'>
                                <p>{i.strMeal}</p>
                                <p>#{i.idMeal}</p> 
                            </div>
                        </div>
                    </div>
                })
        
  return (
    <div>
      {itemsList}
    </div>
  )
}

export default Meal
