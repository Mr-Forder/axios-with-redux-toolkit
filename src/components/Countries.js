import React from "react";
import { useGetCovidDataByCountryNameQuery } from "../services/covidApi";
import { useGetCovidDataQuery } from "../services/covidApi";

const Countries = () => {
  const { data: totals, isFetching } = useGetCovidDataQuery();
  const totalData = totals;
  console.log(totalData);

  if (isFetching) return "Loading...";
  return (
    <div>
      <h1>Country Stats</h1>
      <h3>Total DATA</h3>

      <h3>Critical</h3>

      <h3>Dead</h3>

      <h3>Recovered</h3>
    </div>
  );
};

export default Countries;
