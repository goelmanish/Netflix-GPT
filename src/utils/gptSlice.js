import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchState: false,
    searchMovieDetail: {},
    searchMovies: null
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.gptSearchState = !state.gptSearchState;
    },
    addMoviesResult: (state, action) => {
      const { searchMovieDetails, searchMovies } = action.payload;
      state.searchMovieDetail = searchMovieDetails;
      state.searchMovies = searchMovies;
    },
  },
});

export const { toggleGptSearch, addMoviesResult }  = gptSlice.actions;
export default gptSlice.reducer;