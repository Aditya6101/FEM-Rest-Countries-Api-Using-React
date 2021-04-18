import React, { useState, useEffect } from "react";
import CountryItem from "./CountryItem";
import "./scss/CountryItems.scss";
const CountryItems = ({ fetchURL }) => {
  const [data, setData] = useState([]);

  const getData = async (fetchURL) => {
    try {
      const res = await fetch(fetchURL);
      const countriesData = await res.json();
      setData(countriesData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData(fetchURL);
    return function cleanup() {};
  }, [fetchURL]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <main>
      {data.map((countryData) => {
        return (
          <CountryItem
            key={countryData.name}
            countryFlag={countryData.flag}
            countryName={countryData.name}
            countryPopulation={numberWithCommas(countryData.population)}
            countryRegion={countryData.region}
            countryCapital={countryData.capital}
          />
        );
      })}
    </main>
  );
};

export default CountryItems;
