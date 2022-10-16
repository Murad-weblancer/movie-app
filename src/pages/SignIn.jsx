import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/authMovie";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const inputEl = useRef(null);

  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formDef = (e) => {
    e.preventDefault();
  };
  const handleLogin = async () => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
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
            <h1 className="sm:text-3xl text-2xl  font-bold">Sign In</h1>
            <form className="w-full flex flex-col py-4 " onSubmit={formDef}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-600 rounded"
                type="email"
                placeholder="Email"
                value={email}
                ref={inputEl}
              />
              <input
                onChange={(e) => setpassword(e.target.value)}
                className="p-3 my-2 bg-gray-600 rounded"
                type="password"
                placeholder="Password"
                value={password}
              />
              <button
                className="bg-red-600 py-3 my-6 rounded font-bold"
                onClick={() => handleLogin(email, password)}
              >
                Sign In
              </button>

              <p className="py-8 ">
                {" "}
                <span className="text-gray-600">
                  Don't you have an account?
                </span>{" "}
                <Link to="/signup">Sign Up</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
