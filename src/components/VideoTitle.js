import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="">
      <div className=" w-[100vw]  h-screen   absolute flex flex-col gap-5       bg-gradient-to-r from-black">
        <div className="absolute top-52  md:top-72 left-4 md:left-28  ">
          <div className=" flex  flex-col gap-4 ">
            <h1 className="font-bold text-4xl md:text-6xl w-[80%] text-white ">
              {title}
            </h1>
            <div className="w-[70%] md:w-[40%] hidden md:inline-block   ">
              <h1 className=" text-xl  text-gray-400">{description}</h1>
            </div>
            <div className="flex gap-3 w-full md:w-[50%] ">
              <button className=" text-black px-4 py-1 md:py-2 md:px-0 md:w-32 flex   text-center justify-center invert-0 items-center bg-white rounded-md hover:bg-black hover:text-white">
                ▷ Play
              </button>

              <button className="bg-gray-500 hidden md:inline-block hover:bg-black hover:text-white text-white px-6 py-3 rounded-md">
                ⓘ More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
