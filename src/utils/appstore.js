import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import movieReducer from "./MovieList"
import gptReducer from "./Gptslice"
const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt:gptReducer
  },
});
export default appstore;
