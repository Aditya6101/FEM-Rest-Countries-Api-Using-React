import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./scss/SearchBar.scss";

const SearchBar = ({ searchTerm }) => {
  return (
    <form className="form">
      <SearchIcon className="form__icon" style={{ fontSize: 30 }} />
      <input
        type="text"
        onChange={(e) => searchTerm(e.target.value)}
        className="form__input"
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchBar;
