import React, { useEffect } from 'react'
import Header from './Header'
import { PlayList } from '../service/TMDBService'
import { useDispatch, useSelector } from 'react-redux'
import { nowPlayingMovies } from '../utils/movieSlice'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'
import MovieSearchResult from './MovieSearchResult'


const Browse = () => {
  const dispatch = useDispatch();
const showGptSearch = useSelector(store=>store.gpt?.gptSearchState);
const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  useEffect( () => { 
    !movies && PlayList()
    .then((data)=>{
      //  console.log(data);
        dispatch(nowPlayingMovies(data));
    })
    .catch((e)=>{
      console.log(e);
    })
      
     // dispatch(nowPlayingMovies(playlist));
  },[]);

  return (
    <div>
      {showGptSearch ? (
        <div className="w-full">
        <GptSearch />
        <MovieSearchResult />
        </div>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browse
