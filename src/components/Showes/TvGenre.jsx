import React, { useState } from "react";
import {
  useGetGenreTvQuery,
  useGetTvSearchQuery,
} from "../../store/services/movieApi";
import { Showes } from "./Showes";

export const TvGenre = () => {
  const { data: tvgenres, isLoading: isGenre } = useGetGenreTvQuery();
  const [genres, setGenres] = useState("Action & Adventure");
  const { data: search, isLoading: isSearch } = useGetTvSearchQuery({
    genres,
  });

  if (isGenre || isSearch)
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
  return (
    <>
      <div>
        <select
          className="bg-gray-900 to-gray-300 p-3 text-sm rounded outline-none sm:mt-0 mt-5 text-white"
          onChange={(e) => setGenres(e.target.value)}
        >
          {tvgenres?.genres.map((genre) => (
            <option value={genre?.name} key={genre.id}>
              {genre?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="block w-full">
        <Showes rowId={"7"} data={search} title={genres} />
      </div>
    </>
  );
};
