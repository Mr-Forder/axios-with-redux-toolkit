import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const covidApiHeaders = {
  "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
  "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
};

const baseUrl = `https://covid-19-data.p.rapidapi.com`;

const createRequest = (url) => ({
  url,
  headers: covidApiHeaders,
});

export const covidApi = createApi({
  reducerPath: "covidApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCovidData: builder.query({
      query: () => createRequest(`/totals`),
    }),
    getCovidDataByCountryName: builder.query({
      query: () => createRequest(`/country/all`),
    }),
  }),
});

export const { useGetCovidDataQuery, useGetCovidDataByCountryNameQuery } =
  covidApi;
