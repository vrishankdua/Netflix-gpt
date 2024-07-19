import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  console.log(movies);
  if (!movies) {
    return <div>No movies available</div>;
  }
  return(
    <div className="p-6 bg-black">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-y-scroll">
        
        <div className="flex">
          {  
               movies?.map((movie)=>(
              <MovieCard key={movie.id} posterPath={movie.poster_path} title={movie.title}/>
            ))
          }
        </div>
      </div>
   
    </div>
  )
  
  
};

export default MovieList;
