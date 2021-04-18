import React from "react";
import "./scss/CountryDetail.scss";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

function CountryDetail() {
  return (
    <div className="country-detail">
      <button className="btn">
        <ArrowBackRoundedIcon /> Back
      </button>
      <div className="main-wrapper">
        <img
          className="country-flag"
          src="https://restcountries.eu/data/ita.svg"
          alt="country-flag"
        />
        <div className="text-wrapper">
          <div className="country-info">
            <h3 className="country-info__country-name">Belgium</h3>
            <div className="country-info__cols">
              <div className="country-info__cols__col">
                <div className="col__details">
                  <h4 className="details__bold">Native Name:&nbsp;</h4>
                  <p className="details__light">Germany</p>
                </div>
                <div className="col__details">
                  <h4 className="details__bold">Population:&nbsp;</h4>
                  <p className="details__light">456213855</p>
                </div>
                <div className="col__details">
                  <h4 className="details__bold">Region:&nbsp;</h4>
                  <p className="details__light">Europe</p>
                </div>
                <div className="col__details">
                  <h4 className="details__bold">Sub Region:&nbsp;</h4>
                  <p className="details__light">Western Europe</p>
                </div>
                <div className="col__details">
                  <h4 className="details__bold">Capital:&nbsp;</h4>
                  <p className="details__light">Brussels</p>
                </div>
              </div>
              <div className="country-info__cols__col">
                <div className="col__details">
                  <h4 className="details__bold">Top Level Domain:&nbsp;</h4>
                  <p className="details__light">.gh</p>
                </div>
                <div className="col__details">
                  <h4 className="details__bold">Currencies:&nbsp;</h4>
                  <p className="details__light">USD</p>
                </div>
                <div className="col__details">
                  <h4 className="details__bold">Languages:&nbsp;</h4>
                  <p className="details__light">English</p>
                </div>
              </div>
            </div>
          </div>
          <div className="country-info__border-countries">
            <div>
              <h4 className="title">Border Countries</h4>
              <div className="tags-container">
                <button className="country-tag">France</button>
                <button className="country-tag">France</button>
                <button className="country-tag">France</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
