import React, { useEffect } from 'react'
import { MovieTrailer } from '../service/TMDBService';
import { useDispatch, useSelector} from 'react-redux';
import { trailerVideo } from '../utils/movieSlice';

const VideoBackground = ({movieId}) => {
const dispatch = useDispatch();
const trailer = useSelector((store)=> store.movies?.trailerVideo);

    useEffect( () => { 
        MovieTrailer(movieId)
          .then((data) => {
              const clips = data.filter(
                (clips) => clips.type === "Trailer"
              );
              dispatch(trailerVideo(clips[0]));
          })
          .catch((e) => {
            console.log(e);
          });
    },[]);
  return (
    
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen w-[100%] h-[100%] top-0 left-0"
        src={"https://www.youtube.com/embed/" + trailer?.key +"?autoplay=1&mute=1&loop=1"} 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBackground
