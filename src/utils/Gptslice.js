import { createSlice } from "@reduxjs/toolkit";

const Gptslice = createSlice({
  name: "gpt",
  initialState: {
    showGptView: false,
    movieName: null,
    movieResult: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptView = !state.showGptView;
    },
    addtmdbiMovie(state, action) {
      const { movieName, movieResult } = action.payload;
      state.movieName = movieName;
      state.movieResult = movieResult;
    },
  },
});
export const { toggleGptSearchView, addtmdbiMovie } = Gptslice.actions;
export default Gptslice.reducer;
