import React from "react";
import "./components/scss/Style.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Region from "./components/Region";
import CountryItems from "./components/CountryItems";
import "./components/scss/MediaQueries.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="header__container">
        <SearchBar />
        <Region />
      </div>
      <CountryItems />
    </div>
  );
}

export default App;
