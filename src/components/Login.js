import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSign, setisSign] = useState(true);
  const [pprotected, setpprotected] = useState(true);

  const handleonpress = () => {
    setisSign(!isSign);
  };
  const HandleEncrpyt = () => {
    setpprotected(!pprotected);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute w-[100%] -z-10">
        <img
          className="w-[100%] "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_small.jpg"
          alt="logingBacgroundpage"
        />
      </div>
      <div
        className="flex justify-center
      items-center h-screen "
      >
        <form className="relative top text-white opacity-85 rounded-md  h-[80%] w-[450px] bg-black h-44    flex flex-col ">
          <div className="flex flex-col relative  top-28 items-center">
            <h1 className="absolute left-20  -top-10 font-bold text-4xl ">
              {isSign === true ? "Sign In" : "Sign up"}
            </h1>
            {isSign === true ? (
              ""
            ) : (
              <input
                className="p-3 w-72  m-6 rounded-sm bg-gray-800 text-white  m-3"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              className="p-3 w-72 bg-gray-800 rounded-sm text-white  m-3"
              type="Email"
              placeholder="Email"
            />
            <input
              className="p-3 bg-slate-800 rounded-sm text-white w-72 m-7"
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
            <button
              className="bg-red-600 rounded-sm px-[117px] py-3"
              type="submit"
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