import React, { useRef } from "react";
import MovieCards from "./MovieCards";
const Moviecontainer = ({ title, movies }) => {
 
  if (movies === null) return;
  //   console.log(movies[0].poster_path);

  return (
    <div className=" ">
      <h1 className="text-2xl md:text-4xl font-medium px-10 py-4">{title}</h1>

 

      <div className="flex md:px-10 px-2 overflow-x-scroll overflow-y-hidden scrollbar-hide  scroll-smooth ref={scrollContainer} ">
        <div className="flex relative w-36 md:w-52 flex-shrink-0   ">
          {movies.map((movie) => (
            <MovieCards key={movie.id} path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Moviecontainer;
