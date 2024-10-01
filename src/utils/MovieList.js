import { createSlice } from "@reduxjs/toolkit";

const MovieList = createSlice({
  name: "Movie",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});
export const { addNowPlayingMovies } = MovieList.actions;
export default MovieList.reducer;
