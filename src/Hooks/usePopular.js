import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopular } from "../utils/MovieList";

const usePopular = () => {
  const dispatch = useDispatch();
  const popular=useSelector(store=>store.movies.popular)
  const getPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addPopular(jsonData.results));
  };

  useEffect(() => {
    !popular && getPopular();
  }, []);
  return <div></div>;
};

export default usePopular;
