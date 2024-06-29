import React, { useEffect } from 'react'
import Header from './Header'
import { PlayList } from '../service/TMDBService'
import { useDispatch } from 'react-redux'
import { nowPlayingMovies } from '../utils/movieSlice'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  const dispatch = useDispatch();

  useEffect( () => { 
    PlayList()
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
      {/* <Header /> */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
