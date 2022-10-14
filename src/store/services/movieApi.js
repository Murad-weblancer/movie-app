import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getPopularMovie: builder.query({
      query: () => "/movie/popular?api_key=bec864af9a06322a8a7b75992c118d69",
    }),
    getMovieVideos: builder.query({
      query: ({ videoid, movieid }) =>
        `/movie/${
          videoid || movieid
        }/videos?api_key=bec864af9a06322a8a7b75992c118d69`,
    }),
    getSearchMoive: builder.query({
      query: ({ searchid, genres }) =>
        `/search/movie?api_key=bec864af9a06322a8a7b75992c118d69&query=${
          searchid || genres
        }`,
    }),
    getTopRatedMovie: builder.query({
      query: () => "/movie/top_rated?api_key=bec864af9a06322a8a7b75992c118d69",
    }),
    getUpcomingMovie: builder.query({
      query: () => "/movie/upcoming?api_key=bec864af9a06322a8a7b75992c118d69",
    }),
    getGenresMovie: builder.query({
      query: () => "/genre/movie/list?api_key=bec864af9a06322a8a7b75992c118d69",
    }),
    getMovieDetails: builder.query({
      query: ({ movieid }) =>
        `/movie/${movieid}?api_key=bec864af9a06322a8a7b75992c118d69`,
    }),
    getSimilarMoive: builder.query({
      query: ({ movieid }) =>
        `/movie/${movieid}/similar?api_key=bec864af9a06322a8a7b75992c118d69`,
    }),
    getRecomendedMoive: builder.query({
      query: ({ movieid }) =>
        `/movie/${movieid}/recommendations?api_key=bec864af9a06322a8a7b75992c118d69`,
    }),
  }),
});

export const {
  useGetPopularMovieQuery,
  useGetMovieVideosQuery,
  useGetSearchMoiveQuery,
  useGetTopRatedMovieQuery,
  useGetUpcomingMovieQuery,
  useGetGenresMovieQuery,
  useGetMovieDetailsQuery,
  useGetSimilarMoiveQuery,
  useGetRecomendedMoiveQuery,
} = movieApi;
