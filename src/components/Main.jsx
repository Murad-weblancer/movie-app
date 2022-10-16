import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div className="w-full h-screen relative text-white">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/d8ab8724-3169-40b6-a645-2f2e1a8495a0/TR-en-20221010-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div className="absolute h-screen top-0 w-full flex flex-col items-center justify-center bg-black/40">
        <span className="sm:text-2xl text-center">Welcome</span>
        <h1 className="text-3xl md:text-6xl sm:text-4xl font-bold md:w-[700px] text-center my-5">
          Unlimited movies, TV shows, and more.
        </h1>
        <span className="sm:text-2xl text-center">
          Watch anywhere. Cancel anytime.
        </span>
        <Link to={"/signin"}>
          <button className="bg-red-600 sm:px-12 sm:py-3 px-9 py-3  sm:text-3xl text-xl mt-5 rounded">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};
