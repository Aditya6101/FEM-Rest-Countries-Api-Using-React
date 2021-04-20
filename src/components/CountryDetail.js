import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./scss/CountryDetail.scss";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const CountryDetail = ({ match }) => {
  const [fetchURL, setFetchURL] = useState(match.params.countryname);
  const [data, setData] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [population, setPopulation] = useState("");

  const getData = async (fetchURL) => {
    try {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/name/${fetchURL}?fullText=true`
      );
      const countryData = await res.json();
      setData(countryData[0]);
      setCurrencies(countryData[0].currencies);
      setLanguages(countryData[0].languages);
      setPopulation(countryData[0].population.toLocaleString());
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData(fetchURL);
    return () => {
      setFetchURL("");
      setData({});
    };
  }, [fetchURL]);

  // function numberWithCommas(x) {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

  return (
    <div className="country-detail">
      <Link to="/">
        <button className="btn">
          <ArrowBackRoundedIcon /> Back
        </button>
      </Link>

      <div className="main-wrapper">
        <img className="country-flag" src={data.flag} alt="country-flag" />
        <div className="text-wrapper">
          <div className="country-info">
            <h3 className="country-info__country-name">{data.name}</h3>
            <div className="country-info__cols">
              <div className="country-info__cols__col">
                <div className="col__details">
                  <h4 className="details__bold">Native Name:&nbsp;</h4>
                  <p className="details__light">{data.nativeName}</p>
                </div>
                <div className="col__details">
                  <h4 className="details__bold">Population:&nbsp;</h4>
                  <p className="details__light">{population}</p>
                </div>
                <div className="col__details">
                  <h4 className="details__bold">Region:&nbsp;</h4>
                  <p className="details__light">{data.region}</p>
                </div>
                <div className="col__details">
                  <h4 className="details__bold">Sub Region:&nbsp;</h4>
                  <p className="details__light">{data.subregion}</p>
                </div>
                <div className="col__details">
                  <h4 className="details__bold">Capital:&nbsp;</h4>
                  <p className="details__light">{data.capital}</p>
                </div>
              </div>
              <div className="country-info__cols__col">
                <div className="col__details">
                  <h4 className="details__bold">Top Level Domain:&nbsp;</h4>
                  <p className="details__light">{data.topLevelDomain}</p>
                </div>
                <div className="col__details">
                  <h4 className="details__bold">Currencies:&nbsp;</h4>
                  <p className="details__light">
                    {currencies.map((currency, index) => {
                      return (
                        <span key={index}>
                          {index === currencies.length - 1
                            ? `${currency.name} `
                            : `${currency.name}, `}
                        </span>
                      );
                    })}
                  </p>
                </div>

                <div className="col__details">
                  <h4 className="details__bold">Languages:&nbsp;</h4>
                  <p className="details__light">
                    {languages.map((language, index) => {
                      return (
                        <span key={index}>
                          {index === languages.length - 1
                            ? `${language.name} `
                            : `${language.name}, `}
                        </span>
                      );
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="country-info__border-countries">
            <div>
              <h4 className="title">Border Countries</h4>
              <div className="tags-container">
                {data.borders.map((country, index) => {
                  return (
                    <Link key={index} to={`/country/${country}`}>
                      <button className="country-tag">{country}</button>
                    </Link>
                  );
                })}

                <button className="country-tag">France</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
