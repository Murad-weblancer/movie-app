import React from "react";
import { useSelector } from "react-redux";
import { Genres } from "../components/Genres";
import { Main } from "../components/Main";
import { MainLoged } from "../components/MainLoged";
import { Movies } from "../components/Movies";
import { SearchBar } from "../components/SearchBar";
import {
  useGetPopularMovieQuery,
  useGetTopRatedMovieQuery,
  useGetUpcomingMovieQuery,
} from "../store/services/movieApi";

export const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: popular, isLoading: isPopular } = useGetPopularMovieQuery();
  const { data: rated, isLoading: isRated } = useGetTopRatedMovieQuery();
  const { data: upcoming, isLoading: isUpcoming } = useGetUpcomingMovieQuery();
  if (isPopular || isRated || isUpcoming) return "Loading";
  return (
    <div>
      {user ? (
        <>
          {" "}
          <MainLoged />
          <div className="px-2">
            <div className="flex items-center justify-between flex-wrap mt-5">
              <SearchBar />
              <Genres />
            </div>
            <Movies rowId={"1"} data={popular} title={"Popular"} />
            <Movies rowId={"2"} data={rated} title={"Top Rated"} />
            <Movies rowId={"3"} data={upcoming} title={"Upcoming"} />
          </div>
        </>
      ) : (
        <>
          <Main />
        </>
      )}
    </div>
  );
};
