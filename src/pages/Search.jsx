import React from "react";
import { useParams } from "react-router-dom";
import { Movies } from "../components/Movies";
import { useGetSearchMoiveQuery } from "../store/services/movieApi";

export const Search = () => {
  const { searchid } = useParams();
  const { data, isLoading } = useGetSearchMoiveQuery({ searchid });
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
  return (
    <div className="mt-20">
      <Movies rowId={"5"} data={data} title={searchid} />
    </div>
  );
};
