import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/MovieList";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
  const getNowplayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowplayingMovies();
  },[]);
};
export default useNowPlayingMovies;