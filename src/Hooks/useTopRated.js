import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopular, addTopRated } from "../utils/MovieList";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addTopRated(jsonData.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
  return <div></div>;
};

export default useTopRated;