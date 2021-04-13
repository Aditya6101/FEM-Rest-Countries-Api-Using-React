import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./scss/SearchBar.scss";

const SearchBar = () => {
  return (
    <form className="form">
      <SearchIcon className="form__icon" style={{ fontSize: 30 }} />
      <input
        type="text"
        className="form__input"
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchBar;
