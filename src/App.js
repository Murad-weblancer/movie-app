import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { curenntlyUser } from "./store/slices/authMovie";
import { MainVideo } from "./pages/MainVideo";
import { Search } from "./pages/Search";
import { MovieDetail } from "./pages/MovieDetail";
import { TvShowes } from "./pages/TvShowes";
import { TvSearch } from "./pages/TvSearch";
import { TvVideo } from "./pages/TvVideo";
import { TvDetail } from "./pages/TvDetail";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const current = async () => {
      const auth = getAuth();
      await onAuthStateChanged(auth, (user) => {
        dispatch(curenntlyUser(user));
      });
    };
    current();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mainvideo/:videoid" element={<MainVideo />} />
        <Route path="/search/:searchid" element={<Search />} />
        <Route path="/movie/:movieid" element={<MovieDetail />} />
        <Route path="/showes" element={<TvShowes />} />
        <Route path="/showes/:tvsearchid" element={<TvSearch />} />
        <Route path="/showes/video/:videoid" element={<TvVideo />} />
        <Route path="/showes/detail/:detailid" element={<TvDetail />} />
      </Routes>
    </div>
  );
}

export default App;
