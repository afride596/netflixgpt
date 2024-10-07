import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from "../utils/MovieList";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const upcoming=useSelector(store=>store.movies.upcoming)
  const getUpcomming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addUpcoming(jsonData.results));
  };

  useEffect(() => {
    !upcoming&& getUpcomming();
  }, []);

  return <div></div>;
};

export default useUpcoming;
