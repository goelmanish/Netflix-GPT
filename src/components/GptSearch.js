import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import language from './../utils/languageResource';
import openai from '../service/openAIService';
import { getMovieDetail } from '../service/TMDBService';
import { addMoviesResult } from '../utils/gptSlice';
import MovieSearchResult from './MovieSearchResult';

const GptSearch = () => {
  const dispatch = useDispatch();
  const currLanguage = useSelector(store => store.app?.language);
  const { searchMovieDetail, searchMovies } = useSelector((store) => store.gpt);
    const searchText = useRef("");
    const gptQuery = "Act like a movie recomendation system and return only 10 movies name in form of comma separated again query: " + searchText.current.value;
    const handleSearchClick = async ()=>{
      console.log(searchText.current.value);
      // const searchResult = await openai.chat.completions.create({
      //   messages: [{ role: "user", content: gptQuery }],
      //   model: "gpt-3.5-turbo",
      //});
      // gpt api results will come here but it require to add payment method in gpt. Here I am assuming the expected request from gpt api like comma separated movies name.
      // console.log(searchResult.choices);

      const movies = "Don,Hera Pheri,Gadar,Ta ra rum pum,Ghajini".split(",");
      if(!searchMovies){
        const moviesPromises = movies.map((movie) => getMovieDetail(movie));
        const moviesArray = await Promise.all(moviesPromises);
        console.log(moviesArray);
        dispatch(
          addMoviesResult({
            searchMovieDetails: moviesArray,
            searchMovies: movies,
          })
        );
      }
    }
  return (
    <div>
      <div className="">
        <div className="fixed -z-10">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background"
          />
        </div>
        <div className="w-6/12 absolute place-items-center mt-[10%] mx-auto right-0 left-0">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-12"
          >
            <input
              type="text"
              ref={searchText}
              placeholder={language[currLanguage].searchTextPlaceHolder}
              className="p-2 mx-4 text-black col-span-9 rounded-lg"
            ></input>
            <button
              className="p-2 mx-4 pl-4 text-black col-span-3 bg-blue-500 rounded-lg"
              onClick={handleSearchClick}
            >
              {language[currLanguage].search}
            </button>
          </form>
        </div>
        {/* <MovieSearchResult /> */}
      </div>
      
    </div>
  );
}

export default GptSearch
