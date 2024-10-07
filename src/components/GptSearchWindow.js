import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUNDIMAGE_URL } from "../utils/constant";

const GptSearchWindow = () => {
  return (
    <div className="h-screen object-cover">
        <img  className=" fixed -z-50 h-screen w-screen object-cover" src={BACKGROUNDIMAGE_URL} alt="" />
      <GptSearchBar />
      <GptMovieSuggestion/>
    </div>
  );
};

export default GptSearchWindow;
