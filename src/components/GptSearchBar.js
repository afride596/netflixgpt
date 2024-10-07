import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Lang from "../utils/LanguageConstant";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../utils/constant";
import { addtmdbiMovie } from "../utils/Gptslice";
import { useDispatch } from "react-redux";


const genAI = new GoogleGenerativeAI("AIzaSyAyOzIokj-Rbr_5M9sWXYvqdU4zzpBzgTc");

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const searchMovieTMDB=async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
    const response=await data.json()
    return response.results;
    // console.log(response)
  }
  const handleGptSearchBar = async () => {
    console.log("loading....");
    const GptQuery="Act as a Movie Recommendation System and suggest some movies for the query "+searchText.current.value+".only give me names of 5 movies ,commas seprated like the Example result given ahead .Example Result:Gadar,Don,Kalki2898AD,Devara,pushpa,kill,salaar,sahoo";
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(GptQuery);
      const response = result.response;
      const GptMovies=response.candidates[0].content.parts[0].text.split(",")
      const PromiseArray=GptMovies.map((movie)=>searchMovieTMDB(movie))
      const tmdbresults = await Promise.all(PromiseArray);
      dispatch(addtmdbiMovie({movieName:GptMovies,movieResult:tmdbresults}))
      console.log(tmdbresults);
    } catch (error) {
      console.log("Something Went Wrong");
    }
  };
  // const text = searchText.current.value;
  //make a api call to get movie results

  return (
    <div
      className="  flex justify-center items-center relative top-36 md:top-20
  "
    >
      <form
        className=" bg-white  shadow-2xl "
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className=" outline-none text-black font-medium  w-[350px] px-4 md:px-3 md:w-[450px] rounded-md md:p-5 "
          type="text"
          placeholder={Lang[langKey].gptSearchplaceholder}
        />
        <button
          className=" p-4 md:p-5 bg-red-600 md:bg-black text-white"
          onClick={handleGptSearchBar}
        >
          {Lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
