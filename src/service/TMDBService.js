
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_TOKEN
  }
};


export const PlayList = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
, OPTIONS);

let json = await data.json();
//console.log(json.results);
return json.results;

}

export const MovieTrailer = async (movieId) => {
  const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US'
, OPTIONS);

let json = await data.json();
//console.log(json.results);
return json.results;

}
