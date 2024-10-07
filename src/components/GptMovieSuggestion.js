import React from "react";
import { useSelector } from "react-redux";
import Moviecontainer from "./Moviecontainer";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResult, movieName } = gpt;
  if(!movieResult) return null
  if (!movieName) return null;
  return (
    <div className="p-4 m-4 relative top-48 bg-black bg-opacity-70 text-white">
      <div>
        {movieName.map((movieName, index) => (
          <Moviecontainer
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
