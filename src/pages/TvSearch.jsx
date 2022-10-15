import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { Showes } from "../components/Showes/Showes";
import { useGetTvSearchQuery } from "../store/services/movieApi";

export const TvSearch = () => {
  const { tvsearchid } = useParams();
  const { data, isLoading } = useGetTvSearchQuery({ tvsearchid });
  const { user } = useSelector((state) => state.auth);

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
  if (!user) return <Navigate to={"/"} />;

  console.log(tvsearchid);
  return (
    <div className="mt-20">
      <Showes rowId={"5"} data={data} title={tvsearchid} />
    </div>
  );
};
