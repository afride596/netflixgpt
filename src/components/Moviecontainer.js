import React from "react";
import MovieCards from "./MovieCards";
const Moviecontainer = ({ title, movies }) => {
  if (movies === null) return;
  //   console.log(movies[0].poster_path);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-medium px-10 py-4">{title}</h1>
      <div className="flex  overflow-clip ">
      
        <div className="flex w-52   ">
          {movies.map((movie) => (
            <MovieCards key={movie.id} path={movie.poster_path} />
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default Moviecontainer;
