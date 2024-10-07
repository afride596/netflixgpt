

import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBack = ({ movieId }) => {
  const trailerId=useMovieTrailer(movieId);

  return (
      <div className=" bg-black  w-[100vw]  flex justify-center   items-center bg-gradient-to-l from-black ">
        <iframe
         className=" h-[50vh] w-[100vw]  aspect-video  md:h-screen md:w-[100vw] "
          src={"https://www.youtube.com/embed/" + trailerId+"?&autoplay=1&mute=1&rel=0&controls=0&iv_load_policy=3&"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
          
        ></iframe>
      </div>
  
  );
};

export default VideoBack;
