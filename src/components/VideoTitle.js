import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className=" w-screen h-screen   absolute flex flex-col gap-5      bg-gradient-to-r from-black">
      <div className="absolute  top-72 left-28  ">
        <div className=" flex  flex-col gap-4 ">
          <h1 className="font-bold text-6xl w-[80%] text-white ">{title}</h1>
          <div className="w-[40%]  ">
            <h1 className=" text-xl  text-gray-400">{description}</h1>
          </div>
          <div className="flex gap-3  w-[50%] ">
            <button className=" text-black  w-32 flex   text-center justify-center invert-0 items-center bg-white rounded-md hover:bg-black hover:text-white">
              ▷ Play
            </button>

            <button className="bg-gray-500 hover:bg-black hover:text-white text-white px-6 py-3 rounded-md">
              ⓘ More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
