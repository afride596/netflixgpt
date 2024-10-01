

import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBack = ({ movieId }) => {
  const trailerId=useMovieTrailer(movieId);

  return (
    <div className="w-screen ">
      <div className="w-screen  ">
        <iframe
         className="h-[100vh] w-[100vw] aspect-video"
          src={"https://www.youtube.com/embed/" + trailerId+"?&autoplay=1&mute=1&rel=0&controls=0&iv_load_policy=3&"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBack;
