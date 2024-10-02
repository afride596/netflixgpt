import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addTrending } from '../utils/MovieList';

const useTrending = () => {
    const dispatch = useDispatch();
  const getTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addTrending(jsonData.results));
  };

  useEffect(() => {
    getTrending();
  }, []);
  return <div></div>;
 
}

export default useTrending
