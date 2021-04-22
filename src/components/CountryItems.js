import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountryItem from "./CountryItem";
import "./scss/CountryItems.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

const CountryItems = ({ fetchURL }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async (fetchURL) => {
    try {
      const res = await fetch(fetchURL);
      const countriesData = await res.json();
      setData(Array.from(countriesData));
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData(fetchURL);
    return () => {
      setLoading(true);
    };
  }, [fetchURL]);

  return (
    <main>
      {data.length === 0 && !loading ? (
        <h1>No Such Country</h1>
      ) : loading ? (
        <CircularProgress className="progress-circle" />
      ) : (
        data.map((countryData) => {
          return (
            <Link
              className="link"
              key={countryData.name}
              to={`/country/${countryData.name}`}
            >
              <CountryItem
                countryFlag={countryData.flag}
                countryName={countryData.name}
                countryPopulation={countryData.population.toLocaleString()}
                countryRegion={countryData.region}
                countryCapital={countryData.capital}
              />
            </Link>
          );
        })
      )}
    </main>
  );
};

export default CountryItems;
