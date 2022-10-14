import React, { useState } from "react";
import {
  useGetGenresMovieQuery,
  useGetSearchMoiveQuery,
} from "../store/services/movieApi";
import { Movies } from "./Movies";

export const Genres = () => {
  const [genres, setGenres] = useState("Action");
  const { data, isLaoding } = useGetGenresMovieQuery();
  const { data: search, isLaoding: isSearch } = useGetSearchMoiveQuery({
    genres,
  });
  if (isLaoding || isSearch) return;
  return (
    <>
      <div>
        <select
          className="bg-gray-900 to-gray-300 p-3 text-sm rounded outline-none sm:mt-0 mt-5 text-white"
          onChange={(e) => setGenres(e.target.value)}
        >
          {data?.genres.map((genre) => (
            <option value={genre?.name} key={genre.id}>
              {genre?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="block w-full">
        <Movies rowId={"4"} data={search} title={genres} />
      </div>
    </>
  );
};
