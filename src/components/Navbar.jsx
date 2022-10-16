import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { removeUser } from "../store/slices/authMovie";
import { FaPowerOff } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
export const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const nav = (e) => {
    e.preventDefault();
    navigate(`/multi/${searchTerm}`);
    setSearchTerm("");
  };

  const dispatch = useDispatch();
  const logOut = async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex w-full items-center justify-between absolute top-0 left-0 p-4 z-10">
      {user ? (
        <>
          <div className="flex items-center ">
            <Link to="/">
              <h1 className="text-red-600 font-bold sm:text-4xl text-xl cursor-pointer mr-10">
                HDTRAILER
              </h1>
            </Link>

            <Link to={"/"} className="text-white text-[16px] hover:text-red-600  navbar-auth ">
              Movies
            </Link>
            <Link
              to={"/showes"}
              className="text-white text-[16px] hover:text-red-600  navbar-auth ml-3"
            >
              Tv Showes
            </Link>
          </div>
          <div className="flex items-center">
            <form
              className="search p-2 text-gray-400 focus-within:text-gray-900"
              onSubmit={nav}
            >
              <div className="flex flex-row justify-start items-center">
                <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
                <input
                  name="search-field"
                  id="search-field"
                  className=" flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
                  placeholder="Multi Search"
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
            <button
              className="text-white text-[16px]  navbar-auth"
              onClick={logOut}
            >
              <FaPowerOff className="hover:text-red-600 sm:text-xl" />
            </button>
          </div>
        </>
      ) : (
        <>
          <Link to="/">
            <h1 className="text-red-600 font-bold sm:text-4xl text-xl cursor-pointer">
              HDTRAILER
            </h1>
          </Link>
          <div>
            <Link to="/signin">
              <button className="text-white text-[16px]  navbar-auth">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="text-white text-[16px] ml-3  sm:px-6 sm:py-2 px-4 py-1 bg-red-600 rounded navbar-auth ">
                Sign Up
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
