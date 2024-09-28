import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  // {console.log(user)}
  const handlesignout = () => {
    signOut(auth)
      .then(() => {

        
        navigate("/");

        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen  z-10 bg-gradient-to-b from-black flex justify-between items-center ">
      <img
        className="w-60"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />
    {
      user&&<div className=" flex pr-4 gap-2">
      <img
        className="w-12 h-12 "
        src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
        alt=""
      />
      
      <button className="font-medium text-white" onClick={handlesignout}>
        {"signout"}
      </button>
      
    </div>
    }

     
    </div>
  );
};

export default Header;
