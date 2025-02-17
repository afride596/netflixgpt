import React, { useEffect, useRef } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userslice";
import { LOGO_URL, PROFIL_LOGO } from "../utils/constant";
import SupportedLang from "../utils/SupportedLang";

import { toggleGptSearchView } from "../utils/Gptslice";
import { changeLangauge } from "../utils/ConfigSlice";
const Header = () => {
  const showGptView = useSelector((store) => store.gpt.showGptView);
  const handleLanuageChange = (e) => {
    dispatch(changeLangauge(e.target.value));
  };

  const dispatch = useDispatch();
  const GptSearchPageView = () => {
    dispatch(toggleGptSearchView());
  };

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
    return () => unsubscribe();
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
    user && (
      <div className=" z-50 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between items-center  w-screen bg-black md:h-16 h-32 md:px-28 fixed md:fixed top-0 ">
        <img className=" w-36 md:w-48" src={LOGO_URL} alt="" />
        {user && (
          <div className=" flex  pr-4 gap-2 z-50 relative">
            <div className="  md:mr-10 flex  relative -top-5 md:top-0 ">
              {showGptView && (
                <select
                  name=""
                  className="outline-none px-4 rounded-lg bg-slate-700  text-white mr-4"
                  id=""
                  onChange={handleLanuageChange}
                >
                  {SupportedLang.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}

              <button
                className="bg-purple-600 px-3 flex  md:justify-center items-center rounded-md text-white "
                onClick={GptSearchPageView}
              >
                {showGptView === false ? "SearchGpt" : "homepage"}
              </button>
            </div>
            <img
              className="md:w-10 object-cover hidden md:inline-block rounded-sm "
              src={PROFIL_LOGO}
              alt=""
            />

            <button
              className="font-medium bg-rose-600 shadow-2xl p-3 md:p-0 md:px-5 relative -top-5 md:top-0 rounded-md  text-white"
              onClick={handlesignout}
            >
              {"signout"}
            </button>
          </div>
        )}
      </div>
    )
  );
};

export default Header;
