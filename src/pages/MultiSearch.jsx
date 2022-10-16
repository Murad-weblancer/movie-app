import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { Movies } from "../components/Movies";
import { Multies } from "../components/Multies";
import { Showes } from "../components/Showes/Showes";
import { useGetMultiSearchQuery } from "../store/services/movieApi";

export const MultiSearch = () => {
  const { searchid } = useParams();
  const { data, isLoading } = useGetMultiSearchQuery({ searchid });
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
  console.log(data);
  return (
    <div className="mt-20">
      <Multies rowId={"1"} data={data} title={searchid} />
    </div>
  );
};
