import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Movies } from "../components/Movies";
import { Showes } from "../components/Showes/Showes";
import { TvGenre } from "../components/Showes/TvGenre";
import { TvSearchBar } from "../components/Showes/TvSearchBar";
import { TwMain } from "../components/Showes/TwMain";
import {
  useGetTvAiringTodayQuery,
  useGetTvOnTheAirQuery,
  useGetTvPopularQuery,
  useGetTvTopRatedQuery,
} from "../store/services/movieApi";

export const TvShowes = () => {
  const { data: popular, isLoading: isPopular } = useGetTvPopularQuery();
  const { data: rated, isLoading: isRated } = useGetTvTopRatedQuery();
  const { data: airning, isLoading: isAirning } = useGetTvAiringTodayQuery();
  const { data: air, isLoading: isAir } = useGetTvOnTheAirQuery();
  const { user } = useSelector((state) => state.auth);

  if (isPopular || isRated || isAirning || isAir)
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
  return (
    <div className="px-2">
      <TwMain />
      <div className="flex items-center justify-between flex-wrap mt-5">
        <TvSearchBar />
        <TvGenre />
      </div>
      <Showes rowId={"1"} data={popular} title={"Popular"} />
      <Showes rowId={"2"} data={rated} title={"Top Rated"} />
      <Showes rowId={"3"} data={airning} title={"Tv Airing Today"} />
      <Showes rowId={"4"} data={air} title={"Tv On The Air"} />
    </div>
  );
};
