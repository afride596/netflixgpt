import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userslice";
import { BACKGROUNDIMAGE_URL, LOGO_URL } from "../utils/constant";
const Header = () => {
  const dispatch=useDispatch();

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
    <div className="absolute   z-10 bg-gradient-to-b from-black flex justify-around items-center   ">
      <img
        className="w-48"
        src={LOGO_URL}
        alt=""
      />
    {
      user&&<div className=" flex pr-4 gap-2">
      <img
        className="w-12 h-12 "
        src={BACKGROUNDIMAGE_URL}
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
