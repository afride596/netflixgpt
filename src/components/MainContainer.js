import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBack from "./VideoBack";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const mainMovie = movies[0];
  // console.log(mainMovie);
  const { original_title, overview ,id } = mainMovie;
  return (
    <div className=" w-[100vw]">
      <VideoTitle title={original_title} description={overview} />
      <VideoBack movieId={id} />
    </div>
  );
};

export default MainContainer;
