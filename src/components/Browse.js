import React from "react";
import Header from "./Header";

import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../Hooks/usePopular";
import useTopRated from "../Hooks/useTopRated";
import useTrending from "../Hooks/useTrending";
import useUpcoming from "../Hooks/useUpcoming";
import { useSelector } from "react-redux";

import GptSearchWindow from "./GptSearchWindow";
const Browse = () => {
  const showGptView = useSelector((store) => store.gpt.showGptView);
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useTrending();
  useUpcoming();
  return (
    <div>
      <div className=" scroll-smooth">
        <Header />
        {showGptView ? (
          <GptSearchWindow />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;

// {
//
// MainContainer
//   - VideoBackground
//    - videoTitle

//  secondaryContainer
//      - VideoList
//       --movielist/n
