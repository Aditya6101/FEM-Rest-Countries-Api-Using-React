import React, { useState } from "react";
import "./scss/Region.scss";

const Region = () => {
  const [region, setRegion] = useState("");
  return (
    <select
      className="selector"
      name="region"
      id="region"
      onChange={(e) => setRegion(e.target.value)}
    >
      <option
        className="selector__options"
        value="Filter by Region"
        disabled
        selected
        hidden
      >
        Filter by Region
      </option>
      <option className="selector__options" value="Africa">
        Africa
      </option>
      <option className="selector__options" value="America">
        America
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
      <h1>{region}</h1>
    </select>
  );
};

export default Region;
