
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjFkYjQwZGM5MDAxYTAyZjMxZDcyN2Y4YmVjNDQ1NSIsIm5iZiI6MTcxOTU2NTI0NC44NDcyMTYsInN1YiI6IjY2N2U3NzAzOTAyMGQzZjExZGM0Y2IxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-5Eii_gn-zLCc9UzvZb7q9Poq_R65mvNajGS03cw584'
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