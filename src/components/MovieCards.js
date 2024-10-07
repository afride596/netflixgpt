import React from "react";
import { MOVIE_CARDS_CDN_URL } from "../utils/constant";

const MovieCards = ({ path }) => {
      if(!path) return null
  return (
    <img
      className="mr-5  rounded-md hover:scale-125 delay-150 scroll-smooth hover:duration-150 hover:transition-all" 
      src={MOVIE_CARDS_CDN_URL + path}
      alt=""
    />
  );
};

export default MovieCards;
