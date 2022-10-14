import React from "react";
import { useParams } from "react-router-dom";
import { useGetMovieVideosQuery } from "../store/services/movieApi";
import YouTube from "react-youtube";

export const MainVideo = () => {
  const { videoid } = useParams();
  const { data, isLoading } = useGetMovieVideosQuery({ videoid });
  const trailer = data?.results.find((el) => el.type === "Trailer");
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
    ); //   console.log();
  return (
    <div className="w-full h-screen relative z-10">
      <YouTube videoId={trailer?.key} className="w-full h-full " />
    </div>
  );
};
