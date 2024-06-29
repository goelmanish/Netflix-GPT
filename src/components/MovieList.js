import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
 //  console.log(movies)
  return (
    <div className="pt-4 pb-2 mx-4">
      <h1 className=" text-3xl text-white ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex flex-none" >
          {movies &&
            movies?.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  img={movie.poster_path}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MovieList
