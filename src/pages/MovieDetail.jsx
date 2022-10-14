import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetMovieDetailsQuery,
  useGetMovieVideosQuery,
  useGetRecomendedMoiveQuery,
  useGetSimilarMoiveQuery,
} from "../store/services/movieApi";
import YouTube from "react-youtube";
import { Movies } from "../components/Movies";

export const MovieDetail = () => {
  const { movieid } = useParams();
  const { data: detail, isLoading: isDetal } = useGetMovieDetailsQuery({
    movieid,
  });
  const { data: video, isLoading: isVideo } = useGetMovieVideosQuery({
    movieid,
  });
  const trailer = video?.results.find((el) => el.type === "Trailer");
  const { data: similar, isLoading: isSimilar } = useGetSimilarMoiveQuery({
    movieid,
  });
  const { data: rec, isLoading: isRec } = useGetRecomendedMoiveQuery({
    movieid,
  });
  if (isDetal || isVideo || isSimilar || isRec)
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
  console.log(detail);
  return (
    <>
      <div className="md:flex items-center justify-between px-2 mt-40 mb-10">
        <div className="md:w-[45%] h-[400px]">
          <YouTube videoId={trailer?.key} className="w-full h-full" />
        </div>
        <div className=" md:w-[45%] md:mt-0 mt-5 text-white flex flex-col">
          <h1 className="text-gray-500 font-bold">
            Title: <span className="text-gray-300">{detail?.title}</span>
          </h1>
          <span className="text-gray-500 font-bold">
            Status: <span className="text-gray-300"> {detail?.status} </span>{" "}
          </span>
          <span className="text-gray-500 font-bold">
            Runtime: <span className="text-gray-300"> {detail?.runtime} </span>{" "}
          </span>
          <span className="text-gray-500 font-bold">
            Release Date:{" "}
            <span className="text-gray-300"> {detail?.release_date} </span>{" "}
          </span>
          <span className="text-gray-500 font-bold">
            Country:{" "}
            <span className="text-gray-300">
              {" "}
              {detail?.production_countries[0]?.name}{" "}
            </span>{" "}
          </span>
          <span className="text-gray-500 font-bold">
            Company:{" "}
            <span className="text-gray-300">
              {" "}
              {detail?.production_companies[0]?.name}{" "}
            </span>{" "}
          </span>
          <span className="text-gray-500 font-bold">
            Popularity:{" "}
            <span className="text-gray-300"> {detail?.popularity} </span>{" "}
          </span>
          <span className="text-gray-500 font-bold">
            Genres:{" "}
            <span className="text-gray-300">
              {" "}
              {detail?.genres[0]?.name}, {detail?.genres[1]?.name},{" "}
              {detail?.genres[2]?.name}{" "}
            </span>{" "}
          </span>
          <span className="text-gray-500 font-bold">
            Tagline: <span className="text-gray-300"> {detail?.tagline} </span>{" "}
          </span>
          <span className="text-gray-500 font-bold">
            Overview:{" "}
            <span className="text-gray-300"> {detail?.overview} </span>{" "}
          </span>
        </div>
      </div>
      <Movies rowId={"6"} data={similar} title={"Similar"} />
      <Movies rowId={"7"} data={rec} title={"Recommended"} />
    </>
  );
};
