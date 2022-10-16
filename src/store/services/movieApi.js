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
    getTvPopular: builder.query({
      query: () => "/tv/popular?api_key=bec864af9a06322a8a7b75992c118d69",
    }),
    getTvTopRated: builder.query({
      query: () => "/tv/top_rated?api_key=bec864af9a06322a8a7b75992c118d69",
    }),
    getTvOnTheAir: builder.query({
      query: () => "/tv/on_the_air?api_key=bec864af9a06322a8a7b75992c118d69",
    }),
    getTvAiringToday: builder.query({
      query: () => "/tv/airing_today?api_key=bec864af9a06322a8a7b75992c118d69",
    }),
    getTvSearch: builder.query({
      query: ({ tvsearchid, genres }) =>
        `/search/tv?api_key=bec864af9a06322a8a7b75992c118d69&query=${
          tvsearchid || genres
        }`,
    }),
    getGenreTv: builder.query({
      query: () => "/genre/tv/list?api_key=bec864af9a06322a8a7b75992c118d69",
    }),
    getTvVideos: builder.query({
      query: ({ videoid, detailid }) =>
        `/tv/${
          videoid || detailid
        }/videos?api_key=bec864af9a06322a8a7b75992c118d69`,
    }),
    getTvDetails: builder.query({
      query: ({ detailid }) =>
        `/tv/${detailid}?api_key=bec864af9a06322a8a7b75992c118d69`,
    }),
    getSimilarTv: builder.query({
      query: ({ detailid }) =>
        `/tv/${detailid}/similar?api_key=bec864af9a06322a8a7b75992c118d69`,
    }),
    getRecomendationTv: builder.query({
      query: ({ detailid }) =>
        `/tv/${detailid}/recommendations?api_key=bec864af9a06322a8a7b75992c118d69`,
    }),
    getPopularPeople: builder.query({
      query: () => "/person/popular?api_key=bec864af9a06322a8a7b75992c118d69",
    }),
    getMultiSearch: builder.query({
      query: ({ searchid }) =>
        `/search/multi?api_key=bec864af9a06322a8a7b75992c118d69&query=${searchid}`,
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
  useGetTvPopularQuery,
  useGetTvTopRatedQuery,
  useGetTvOnTheAirQuery,
  useGetTvAiringTodayQuery,
  useGetTvSearchQuery,
  useGetGenreTvQuery,
  useGetTvVideosQuery,
  useGetTvDetailsQuery,
  useGetSimilarTvQuery,
  useGetRecomendationTvQuery,
  useGetPopularPeopleQuery,
  useGetMultiSearchQuery,
} = movieApi;
