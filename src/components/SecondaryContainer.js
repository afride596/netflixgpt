import React from "react";
import Moviecontainer from "./Moviecontainer";
import { useSelector } from "react-redux";
import { useRef } from "react";
// import Leftscroll from "../utils/Leftscroll";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="  ">
      <div className="relative  text-white bg-black w-screen    ">
        <div className="  relative  mx-5   -top-56 ">
          <div>
            <Moviecontainer
              title={"Now Playing"}
              movies={movies.nowPlayingMovies}
            />
          </div>

          <div className="   ">
            <Moviecontainer title={"Popular"} movies={movies.popular} />
          </div>

          <div>
            <Moviecontainer title={"Top Rated"} movies={movies.topRated} />
          </div>

          <div>
            <Moviecontainer title={"Upcoming"} movies={movies.upcoming} />
          </div>

          <div>
            <Moviecontainer title={"Trending"} movies={movies.trending} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
