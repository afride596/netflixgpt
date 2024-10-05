import React from "react";

const GptSearchBar = () => {
  return <div className="  flex justify-center items-center absolute top-20 left-[40%]
  ">
    <img src="" alt="" />
    <form className=" bg-white  shadow-2xl" action="">
        <input className=" outline-none w-[400px] rounded-md px-2 py-2" type="text" placeholder="what would you like to watch today..." />
        <button className= "px-2 py-3 bg-black text-white">Search</button>
    </form>
  </div>;
};

export default GptSearchBar;
