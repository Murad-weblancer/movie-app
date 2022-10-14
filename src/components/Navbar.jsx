import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { removeUser } from "../store/slices/authMovie";
import {FaPowerOff} from 'react-icons/fa'
export const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
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
      <Link to="/">
        <h1 className="text-red-600 font-bold sm:text-4xl text-xl cursor-pointer">
          HDTRAILER
        </h1>
      </Link>
      <div>
        {user ? (
          <div>
            <button
              className="text-white text-[16px]  navbar-auth"
              onClick={logOut}
            >
              <FaPowerOff className="hover:text-red-600 sm:text-xl" />
            </button>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};
