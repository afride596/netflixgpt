import React from "react";
import { useSelector } from "react-redux";
import Lang from "../utils/LanguageConstant";

const GptSearchBar = () => {
  const langKey=useSelector(store=>store.config.lang)
  return <div className="  flex justify-center items-center absolute top-20 left-[40%]
  ">
    <img src="" alt="" />
    <form className=" bg-white  shadow-2xl" action="">
        <input className=" outline-none w-[400px] rounded-md px-2 py-2" type="text" placeholder={Lang[langKey].gptSearchplaceholder} />
        <button className= "px-2 py-3 bg-black text-white">{Lang[langKey].search}</button>
    </form>
  </div>;
};

export default GptSearchBar;
