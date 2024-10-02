import React from "react";
import Moviecontainer from "./Moviecontainer";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black text-white ">
      <div>
        <button className="leftButton z-30 relative">ddddddd</button>
      </div>
      <div className="z-10 relative -top-60 w-screen h-[1840px]">
        <Moviecontainer
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        />

        <Moviecontainer title={"Popular"} movies={movies.popular} />
        <Moviecontainer title={"Top Rated"} movies={movies.topRated} />
        <Moviecontainer title={"Upcoming"} movies={movies.upcoming} />
        <Moviecontainer title={"Trending"} movies={movies.trending} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
