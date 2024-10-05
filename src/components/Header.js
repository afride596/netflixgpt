import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userslice";
import { BACKGROUNDIMAGE_URL, LOGO_URL, PROFIL_LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/Gptslice";
const Header = () => {
  const dispatch=useDispatch();
  const  GptSearchPageView =()=>{
    dispatch(toggleGptSearchView())
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const {uid,email,displayName} = user;
        // ...
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

        // ...
      }
    });
    return ()=>unsubscribe();
  }, []);

  const navigate = useNavigate();


  const user = useSelector((store) => store.user);
  // {console.log(user)}
  const handlesignout = () => {
    signOut(auth)
      .then(() => {

        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
   <div className=" z-50 bg-gradient-to-b from-black flex justify-between items-center  w-screen bg-black h-16 px-28 fixed top-0 ">
      <img
        className="w-48"
        src={LOGO_URL}
        alt=""
      />
    {
     user&& <div className=" flex pr-4 gap-2 z-50 relative">
      <div className="mr-10 flex">
        <select name="" id="">
          <option value="">Telugu</option>
          <option value="">English</option>
          <option value="">Hindi</option>
        </select>

      <button className="bg-purple-600 px-3 flex justify-center items-center rounded-md text-white " onClick={GptSearchPageView} >SearchGpt</button>
      </div>
      <img
        className="w-12 h-12 rounded-sm "
        src={PROFIL_LOGO}
        alt=""
      />
      
      <button className="font-medium bg-rose-600 shadow-2xl px-5 rounded-md  text-white" onClick={handlesignout}>
        {"signout"}
      </button>
      
    </div>
    }

     
    </div>
  );
};

export default Header;
