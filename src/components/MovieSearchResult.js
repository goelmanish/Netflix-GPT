import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieSearchResult = () => {
  const { searchMovieDetail, searchMovies } = useSelector((store) => store.gpt);
 
  if(!searchMovies) return null;

  return (
    <>
     <div className="pt-[18%]">
     <div className="bg-black opacity-90">
          {searchMovies &&
            searchMovies.map((movieName, index) =>
              <MovieList
                title={movieName}
                key={movieName}
                movies={searchMovieDetail[index]} />
            )}
        </div>
      </div>
    </>
  );
};

export default MovieSearchResult;
