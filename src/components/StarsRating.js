import React, { useEffect, useState } from 'react'
import { howManyStarsForProduct } from '../helpers/printStarsForProduct'


export const StarsRating = ({stars, id}) => {

  const [starsState, setStarsState] = useState([])

  useEffect(()=> {
    const ratingStarsResult = howManyStarsForProduct(stars)
    setStarsState(ratingStarsResult)
  }, [stars])

  return (
    <div className="main-gallery-star-container">
      {
        starsState.map( rate => {
          return(
            <i key={id + Math.random()} className={`main-star ${rate} fa-star`}></i>
          )
        })
      }
    </div>
  )
}
