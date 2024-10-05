import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUNDIMAGE_URL } from "../utils/constant";

const GptSearchWindow = () => {
  return (
    <div className="">
        <img className=" absolute -z-50" src={BACKGROUNDIMAGE_URL} alt="" />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchWindow;
