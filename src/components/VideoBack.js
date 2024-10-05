

import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBack = ({ movieId }) => {
  const trailerId=useMovieTrailer(movieId);

  return (
      <div className="     flex justify-center  ">
        <iframe
         className="h-screen w-[100vw] "
          src={"https://www.youtube.com/embed/" + trailerId+"?&autoplay=1&mute=1&rel=0&controls=0&iv_load_policy=3&"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
          allowFullScreen
        ></iframe>
      </div>
  
  );
};

export default VideoBack;
