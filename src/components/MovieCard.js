import React from 'react'
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({posterPath,title}) => {
  
  return (
    <div className='w-48 mr-2'> 
      <img alt={title} src={IMG_CDN+posterPath}/>
      {/* <h2>{title}</h2> */}
    </div>
  )
}

export default MovieCard