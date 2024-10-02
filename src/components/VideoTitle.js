import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className=" w-screen h-screen   absolute flex flex-col gap-5      bg-gradient-to-r from-black">
      <div className="absolute  top-60 left-20">
        <div className=" flex  flex-col gap-4 ">
          <h1 className="font-bold text-6xl w-[50%] text-white ">{title}</h1>
          <div className="w-[30%]  ">
            <h1 className=" text-lg text-white">{description}</h1>
          </div>
          <div className="flex gap-3  w-[50%] ">
            <button className=" text-black px-7 py-3 w-32 flex mx-3  text-center justify-center invert-0 items-center bg-white rounded-md">
               ▷ Play
            </button>

            <button className="bg-gray-500 text-white px-6 py-3 rounded-md">
            ⓘ More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
