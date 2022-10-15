import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { Show } from "../components/Showes/Show";
import { Showes } from "../components/Showes/Showes";
import {
  useGetRecomendationTvQuery,
  useGetSimilarTvQuery,
  useGetTvDetailsQuery,
  useGetTvVideosQuery,
} from "../store/services/movieApi";

export const TvDetail = () => {
  const { detailid } = useParams();
  const { data: detail, isLoading: isDetail } = useGetTvDetailsQuery({
    detailid,
  });
  const { data: video, isLoading: isVideo } = useGetTvVideosQuery({ detailid });
  const { data: similar, isLoading: isSimilar } = useGetSimilarTvQuery({
    detailid,
  });
  const { data: rec, isLoading: isRec } = useGetRecomendationTvQuery({
    detailid,
  });
  const trailer = video?.results.find((el) => el.type === "Trailer");
  const { user } = useSelector((state) => state.auth);

  if (isDetail || isVideo || isSimilar || isRec)
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
  if (!user) return <Navigate to={"/"} />;
  console.log(detail);
  return (
    <>
      <div className="md:flex items-center justify-between px-2 mt-40 mb-10">
        <div className="md:w-[45%] h-[400px]">
          <YouTube videoId={trailer?.key} className="w-full h-full" />
        </div>
        <div className=" md:w-[45%] md:mt-0 mt-5 text-white flex flex-col">
          <h1 className="text-gray-500 font-bold">
            Title: <span className="text-gray-300">{detail?.name}</span>
          </h1>
          <span className="text-gray-500 font-bold">
            Status: <span className="text-gray-300"> {detail?.status} </span>{" "}
          </span>
          <span className="text-gray-500 font-bold">
            Runtime:{" "}
            <span className="text-gray-300">
              {" "}
              {detail?.episode_run_time[0]}{" "}
            </span>{" "}
          </span>
          <span className="text-gray-500 font-bold">
            Release Date:{" "}
            <span className="text-gray-300"> {detail?.first_air_date} </span>{" "}
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
      <Showes rowId={"6"} data={similar} title={"Similar"} />
      <Showes rowId={"7"} data={rec} title={"Recommendations"} />
    </>
  );
};
