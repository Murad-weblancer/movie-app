import React from "react";
import { Link } from "react-router-dom";
import { useGetTvPopularQuery } from "../../store/services/movieApi";

export const TwMain = () => {
  const { data, isLoading } = useGetTvPopularQuery();
  const tvshowes =
    data?.results[Math.floor(Math.random() * data?.results.length)];
  if (isLoading)
    return (
      <div className="loading">
        <div className="loading-text">
          <span className="loading-text-words">L</span>
          <span className="loading-text-words">O</span>
          <span className="loading-text-words">A</span>
          <span className="loading-text-words">D</span>
          <span className="loading-text-words">I</span>
          <span className="loading-text-words">N</span>
          <span className="loading-text-words">G</span>
        </div>
      </div>
    );
  console.log(data);
  return (
    <div className="w-full h-screen relative text-white">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${tvshowes?.backdrop_path}`}
          alt={tvshowes?.original_name}
        />
      </div>
      <div className="absolute w-full h-full top-0 bg-black/40" />
      <div className="absolute top-[35%] left-[3%]">
        <h1 className="text-3xl md:text-5xl font-bold">
          {" "}
          {tvshowes?.original_name}
        </h1>
        <div className="my-4">
          <Link to={`/showes/video/${tvshowes?.id}`}>
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
          </Link>
          <Link>
            <button className="border  text-white border-gray-300 py-2 px-5 ml-4">
              Read more
            </button>
          </Link>
        </div>
        <p className="text-gray-400 text-sm">
          Released: {tvshowes?.first_air_date}
        </p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
          {tvshowes?.overview}
        </p>
      </div>
    </div>
  );
};