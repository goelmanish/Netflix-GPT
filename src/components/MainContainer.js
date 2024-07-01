import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
const movies = useSelector((store) => store.movies?.nowPlayingMovies);

if(!movies) return null;

function getRandomArbitrary(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }

const indx = getRandomArbitrary(1,movies.length-1); 
console.log(indx);
const mainMovie = movies[indx];
console.log(mainMovie);
const { original_title, overview,id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer
