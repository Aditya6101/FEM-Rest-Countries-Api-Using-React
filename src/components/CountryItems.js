import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    // return () => {
    //   console.log("Main cleanup function started");
    //   setData([]);
    //   console.log("Main cleanup function ended");
    // };
  }, [fetchURL]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <main>
      {data.map((countryData) => {
        return (
          <Link key={countryData.name} to={`/country/${countryData.name}`}>
            <CountryItem
              countryFlag={countryData.flag}
              countryName={countryData.name}
              countryPopulation={numberWithCommas(countryData.population)}
              countryRegion={countryData.region}
              countryCapital={countryData.capital}
            />
          </Link>
        );
      })}
    </main>
  );
};

export default CountryItems;
