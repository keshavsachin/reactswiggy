import React from 'react'

function Card({hotel_Name,cuisine,rating,distance}) {
  return (
   <div >
    <div className='Cardcont'>
        <div>
            <h3>{hotel_Name}</h3>
            <h3>{cuisine}</h3>
        </div>
        <div>
            <h3>{rating}</h3>
            <h4>{distance} km</h4>
        </div>
   </div>
  </div>
  )
}

export default Card