import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo : null
  },
  reducers: {
    nowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    trailerVideo : (state,action) =>{
        state.trailerVideo = action.payload
    }
  },
});

export const { nowPlayingMovies ,trailerVideo} = movieSlice.actions;
export default movieSlice.reducer;