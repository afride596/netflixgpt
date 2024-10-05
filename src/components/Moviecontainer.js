import React, { useRef } from "react";
import MovieCards from "./MovieCards";
const Moviecontainer = ({ title, movies }) => {
  const scrollContainer = useRef(null);
  const scrollRight = () => {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  };
  if (movies === null) return;
  //   console.log(movies[0].poster_path);

  return (
    <div className=" ">
      <h1 className="text-4xl font-medium px-10 py-4">{title}</h1>

 

      <div className="flex px-10  overflow-x-scroll overflow-y-hidden scrollbar-hide  scroll-smooth ref={scrollContainer} ">
        <div className="flex relative w-52 flex-shrink-0   ">
          {movies.map((movie) => (
            <MovieCards key={movie.id} path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Moviecontainer;
