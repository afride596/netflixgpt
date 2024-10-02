import React from "react";
import Header from "./Header";

import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../Hooks/usePopular";
import useTopRated from "../Hooks/useTopRated";
import useTrending from "../Hooks/useTrending";
import useUpcoming from "../Hooks/useUpcoming";
const Browse = () => {
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useTrending();
  useUpcoming()
  return (
    <div>
      <div className="w-[1920px] scroll-smooth">
        <Header />
        <MainContainer />
        <SecondaryContainer />
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
