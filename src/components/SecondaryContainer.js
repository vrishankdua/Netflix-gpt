import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store?.movies);
   console.log(movies);
  return (
    movies.nowPlayingMovies&&
    <div>
     <MovieList title={"Now Playing"} movies={movies?. nowPlayingMovies}/>
     <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
     <MovieList title={"Popular"} movies={movies?.popularMovies}/>
     </div>
  )
}

export default SecondaryContainer