import React from "react";
import "./scss/CountryItem.scss";

const CountryItem = ({
  countryFlag,
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital,
}) => {
  return (
    <div className="card">
      <img className="card__img" src={countryFlag} alt="country-flag" />
      <div className="card__text">
        <h3 className="card__text__country-name">{countryName}</h3>
        <div className="info">
          <p className="info__title">Population:&nbsp;</p>
          <span className="info__data" id="population">
            {countryPopulation}
          </span>
        </div>
        <div className="info">
          <p className="info__title">Region:&nbsp;</p>
          <span className="info__data" id="region">
            {countryRegion}
          </span>
        </div>
        <div className="info">
          <p className="info__title">Capital:&nbsp;</p>
          <span className="info__data" id="region">
            {countryCapital}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountryItem;
