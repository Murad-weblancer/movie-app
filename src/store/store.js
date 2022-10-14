import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./services/movieApi";
import auth from "./slices/authMovie";

export const store = configureStore({
  reducer: {
    auth,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
