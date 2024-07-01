import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchState: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.gptSearchState = !state.gptSearchState;
    },
  },
});

export const { toggleGptSearch }  = gptSlice.actions;
export default gptSlice.reducer;