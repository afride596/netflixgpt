import React, { useRef, useState } from "react";
import Header from "./Header";
import validateEmailAndPassword from "../utils/validateEmailAndPassword";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addUser } from "../utils/userslice";
import { useDispatch } from "react-redux";
import { BACKGROUNDIMAGE_URL, PROFIL_LOGO } from "../utils/constant";
import LoginHeader from "./LoginHeader";

const Login = () => {
  const [isSign, setisSign] = useState(true);
  const [pprotected, setpprotected] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [succesmessage, setsuccesmessage] = useState(null);
  const [errorMessage, seterrorMessage] = useState();
  const dispatch = useDispatch();
  const FullName = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);

  const handleonpress = () => {
    setisSign(!isSign);
  };
  const HandleEncrpyt = () => {
    setpprotected(!pprotected);
  };
  const handlebutton = () => {
    // alert("Button clicked")
    // console.log(Email)
    const message = validateEmailAndPassword(
      FullName.current?.value,
      Email.current?.value,
      Password.current?.value
    );
    // console.log(message);

    seterrorMessage(message);

    if (message) return;

    if (!message) {
      if (!isSign) {
        createUserWithEmailAndPassword(
          auth,
          Email?.current?.value,
          Password?.current?.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: FullName.current?.value,
            })
              .then(() => {
                // Profile updated!
                // ...
              })
              .catch((error) => {
                // An error occurred
                seterrorMessage(error.message);
                // ...
              });

            // console.log("heloo");

            setsuccesmessage(
              "Your account has been created successfully. Please log in to continue."
            );
            setTimeout(() => {
              setisSign(true);
              setsuccesmessage(null);
            }, 1000);

            // console.log(user);

            // ...
          })
          .catch((error) => {
            // eslint-disable-next-line
            const errorCode = error.code;
            // eslint-disable-next-line
            const errorMessage = error.message;
            if (errorCode === "auth/email-already-in-use") {
              seterrorMessage(
                "This email is already registered. Please use a different email or log in."
              );
            } else {
              seterrorMessage(errorMessage);
              setTimeout(() => {
                seterrorMessage(null);
              }, 5000);
            }
            // ..
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          Email?.current?.value,
          Password?.current?.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // console.log(user);
            const { uid, email, displayName } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
              })
            );
            // navigate("/browse");

            // ...
          })
          .catch((error) => {
            // eslint-disable-next-line no-unused-vars
            const errorCode = error.code;
            // eslint-disable-next-line no-unused-vars
            const errorMessage = error.message;
            if (errorCode === "auth/user-not-found") {
              seterrorMessage("No account found with this email address.");
            } else {
              seterrorMessage("Invalid email or password. Please try again.");
              setTimeout(() => {
                seterrorMessage(null);
              }, 5000);
            }
          });
      }
    } else {
      return;
    }
  };
  return (
    <div className=" w-screen">

      <Header />
      <LoginHeader />
      <div className="absolute  z-0">
        <img
          className=" w-screen h-screen object-cover "
          src={BACKGROUNDIMAGE_URL}
          alt="logingBacgroundpage"
        />
      </div>
      <div
        className="flex justify-center
      items-center h-screen relative -top-10 md:-top-10 "
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative  text-white opacity-85 rounded-md  h-[80%] w-[450px] bg-black    flex flex-col "
        >
          <div className="flex flex-col  relative  top-28 items-center">
            <h1 className="absolute left-20  -top-10 font-bold text-4xl ">
              {isSign === true ? "Sign In" : "Sign up"}
            </h1>
            {isSign === true ? (
              ""
            ) : (
              <input
                ref={FullName}
                className="p-3 w-72  my-6 rounded-sm bg-gray-800 text-white  "
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              ref={Email}
              className="p-3 w-72 bg-gray-800 rounded-sm text-white  m-4"
              type="Email"
              placeholder="Email"
            />
            <input
              ref={Password}
              className="p-3 bg-slate-800 rounded-sm text-white w-72 mt-4 mb-1"
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
            <p className="text-red-600 text-sm font-medium my-2 w-72">
              {errorMessage === null ? (
                <div className="text-green-500  rounded-sm text-base">
                  {succesmessage}
                </div>
              ) : (
                errorMessage
              )}
            </p>

            <button
              className="bg-red-600 rounded-sm px-[117px] py-3"
              type="submit"
              onClick={handlebutton}
            >
              {isSign === true ? "Sign In" : "Sign up"}
            </button>
            <p
              className="mt-9 animate text-lg text-gray-400 flex gap-2 cursor-pointer"
              onClick={handleonpress}
            >
              {isSign === true ? "New to Netflix?" : "Have an Account?"}{" "}
              <span className="text-white animate-none font-medium">
                {isSign === true ? "Sign up" : "Sign In"}
              </span>
            </p>
            <p className="w-80 text-sm my-4 text-gray-500">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={HandleEncrpyt}
              >
                {pprotected === true ? "  Learn more. " : ""}
              </span>
            </p>
            {pprotected === true ? (
              ""
            ) : (
              <p className="w-80 text-sm text-gray-500">
                The information collected by Google reCAPTCHA is subject to the
                Google
                <span className="text-blue-600 hover:underline">
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </span>
                and
                <span className="text-blue-600 hover:underline">
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>
                </span>
                , and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalised advertising by Google).
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
