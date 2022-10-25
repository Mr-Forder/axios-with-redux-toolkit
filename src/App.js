import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { useGetCovidDataQuery } from "../src/services/covidApi";

import Countries from "./components/Countries";

const App = () => {
  const { data: totals, isFetching } = useGetCovidDataQuery();

  if (isFetching) return "Loading...";
  return (
    <div>
      <h1>Covid Stats</h1>
      <h3>Total Infected</h3>
      <p>{totals[0]?.confirmed}</p>
      <h3>Critical</h3>
      <p>{totals[0]?.critical}</p>
      <h3>Dead</h3>
      <p>{totals[0]?.deaths}</p>
      <h3>Recovered</h3>
      <p>{totals[0]?.recovered}</p>
    </div>
  );
};

export default App;
