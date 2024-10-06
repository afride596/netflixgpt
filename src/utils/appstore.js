import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import movieReducer from "./MovieList"
import gptReducer from "./Gptslice"
import configReducer from "./ConfigSlice"
const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt:gptReducer,
    config:configReducer

  },
});
export default appstore;
