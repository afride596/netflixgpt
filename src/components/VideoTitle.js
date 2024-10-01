import React from "react";
import imgg from "./—Pngtree—black vector play button icon_4231897.png";

const VideoTitle = ({ title, description }) => {
  return (
    <div className=" w-screen h-screen  absolute flex flex-col gap-5   pl-20  pt-72 object-contain bg-gradient-to-r from-black">
      <div className=" flex  flex-col gap-4">
        <h1 className="font-bold text-6xl text-white">{title}</h1>
        <h1 className="w-[500px] text-lg text-white">{description}</h1>
      </div>
      <div className="flex gap-2  ">

        <button className=" text-black px-7 py-3  flex mx-3  text-center justify-center invert-0 items-center bg-white rounded-md">
          
          Play
        </button>

        <button className="bg-gray-500 text-white px-4 py-3 rounded-md">
          More Info
        </button>

      </div>
    </div>
  );
};

export default VideoTitle;
