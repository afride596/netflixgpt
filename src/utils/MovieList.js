import { createSlice } from "@reduxjs/toolkit";

const MovieList = createSlice({
  name: "Movie",
  initialState: {
    nowPlayingMovies: null,
    popular: null,
    topRated: null,
    trending:null,
    upcoming:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    }, 
     addTrending: (state, action) => {
      state.trending = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },

  },
});
export const { addNowPlayingMovies, addPopular, addTopRated ,addTrending ,addUpcoming} =
  MovieList.actions;
export default MovieList.reducer;
