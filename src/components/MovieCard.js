import React from 'react'
import { IMG_BASE_URL } from '../utils/constants'

const MovieCard = ({id,img}) => {
  if(!img) return null;
  return (
    <div>
      <img className="w-52 p-2 ml-2" src={IMG_BASE_URL + img} alt={id}></img>
    </div>
  )
}

export default MovieCard
