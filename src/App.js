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
  const [url, setURL] = useState("https://restcountries.eu/rest/v2/all");

  function searchForCountry(searchTerm) {
    setURL(`https://restcountries.eu/rest/v2/name/${searchTerm}`);
  }

  function searchByRegion(region) {
    region === "Filter by Region"
      ? setURL("https://restcountries.eu/rest/v2/all")
      : setURL(`https://restcountries.eu/rest/v2/region/${region}`);
  }

  return (
    <Router>
      <Header />
      <CountryDetail />
      {/* <Switch>
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
        </div>
      </Switch> */}
    </Router>
  );
}

export default App;
