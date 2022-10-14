import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/authMovie";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const formDef = (e) => {
    e.preventDefault();
  };
  const handleRegister = async (email, password) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(() => {
        alert("Write data correctly");
      });
  };
  useEffect(() => {
    inputEl.current.focus();
  }, [inputEl]);
  return (
    <>
      <div className="w-full h-screen absolute">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
      </div>
      <div className="w-full h-screen absolute bg-black/60 top-0 left-0" />
      <div className="fixed w-full px-4 py-24 ">
        <div className="sm:max-w-[450px]  px-5 mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] py-16 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-bold">Sign Up</h1>
            <form className="w-full flex flex-col py-4" onSubmit={formDef}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-600 rounded"
                type="email"
                placeholder="Email"
                ref={inputEl}
              />
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="p-3 my-2 bg-gray-600 rounded"
                type="password"
                placeholder="Password"
              />
              <button
                className="bg-red-600 py-3 my-6 rounded font-bold"
                onClick={() => handleRegister(email, password)}
              >
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  {" "}
                  <input className="mr-2" type="checkbox" /> Remember me
                </p>
                <p> Need Help? </p>
              </div>
              <p className="py-8 ">
                {" "}
                <span className="text-gray-600">
                  Already subscribed to Netflix?
                </span>{" "}
                <Link to="/signin">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
