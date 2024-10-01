import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import movieReducer from "./MovieList"
const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});
export default appstore;
