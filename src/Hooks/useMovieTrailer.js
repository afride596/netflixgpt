import  { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
    const [trailerId, setTrailerId] = useState(null);
  const getTrailervideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const filterdata = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    setTrailerId(trailer.key);

    // console.log(trailer);
  };
  useEffect(() => {
    !trailerId && getTrailervideo();
  });
  return trailerId;
};

export default useMovieTrailer;
