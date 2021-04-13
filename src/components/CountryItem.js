import React from "react";
import "./scss/CountryItem.scss";

const CountryItem = () => {
  return (
    <div className="card">
      <img
        className="card__img"
        src="https://restcountries.eu/data/ind.svg"
        alt="country-flag"
      />
      <div className="card__text">
        <h3 className="card__text__country-name">India</h3>
        <div className="info">
          <p className="info__title">Population:</p>
          <span className="info__data" id="population">
            13234567989
          </span>
        </div>
        <div className="info">
          <p className="info__title">Region:</p>
          <span className="info__data" id="region">
            Asia
          </span>
        </div>
        <div className="info">
          <p className="info__title">Capital:</p>
          <span className="info__data" id="region">
            Asia
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountryItem;
