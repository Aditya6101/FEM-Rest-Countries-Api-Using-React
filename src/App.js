import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/scss/Style.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Region from "./components/Region";
import CountryItems from "./components/CountryItems";
import CountryDetail from "./components/CountryDetail";
import "./components/scss/MediaQueries.scss";

function App() {
  const [url, setURL] = useState("https://restcountries.com/v3.1/all");

  function searchForCountry(searchTerm) {
    setURL(`https://restcountries.com/v3.1/name/${searchTerm}`);
  }

  function searchByRegion(region) {
    region === "Filter by Region"
      ? setURL("https://restcountries.com/v3.1/all")
      : setURL(`https://restcountries.com/v3.1/region/${region}`);
  }

  return (
    <Router>
      <Switch>
        <>
          <div className="App">
            <Header />
            <Route
              path="/"
              exact
              render={() => (
                <div className="header__container">
                  <SearchBar searchTerm={searchForCountry} />
                  <Region searchRegion={searchByRegion} />
                </div>
              )}
            />
            <Route
              path="/"
              exact
              render={() => <CountryItems fetchURL={url} />}
            />
            <Route
              path="/country/:countryname"
              exact
              component={CountryDetail}
            />
            <h3 className="attribution">
              Challenge by&nbsp;
              <a
                className="attribution__link"
                href="https://www.frontendmentor.io/"
              >
                Frontend Mentor.&nbsp;
              </a>
              Coded by&nbsp;
              <a
                className="attribution__link"
                href="https://github.com/Aditya6101"
              >
                Aditya S. Kamble.
              </a>
            </h3>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
