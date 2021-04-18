import React from "react";
import "./scss/Region.scss";

const Region = ({ searchRegion }) => {
  return (
    <select
      className="selector"
      name="region"
      id="region"
      onChange={(e) => searchRegion(e.target.value)}
    >
      <option className="selector__options" value="Filter by Region">
        Filter by Region
      </option>
      <option className="selector__options" value="Africa">
        Africa
      </option>
      <option className="selector__options" value="Americas">
        Americas
      </option>
      <option className="selector__options" value="Asia">
        Asia
      </option>
      <option className="selector__options" value="Europe">
        Europe
      </option>
      <option className="selector__options" value="Oceania">
        Oceania
      </option>
    </select>
  );
};

export default Region;
