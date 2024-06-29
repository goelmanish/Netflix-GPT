import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

  return (
    <>
      <div className="bg-black">
        <div className="-mt-60 z-20 relative">
          <MovieList
            title="Now Playing Movies"
            movies={movies?.nowPlayingMovies}
          />
          <MovieList title="Trending" movies={movies?.nowPlayingMovies} />
          <MovieList title="Comedy" movies={movies?.nowPlayingMovies} />
          <MovieList title="Animation" movies={movies?.nowPlayingMovies} />
          <MovieList title="Up Coming" movies={movies?.nowPlayingMovies} />
        </div>
      </div>
    </>
  );
}

export default SecondaryContainer
