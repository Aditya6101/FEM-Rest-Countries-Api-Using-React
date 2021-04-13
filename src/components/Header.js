import React, { useState } from "react";
import "./scss/Header.scss";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import Brightness5RoundedIcon from "@material-ui/icons/Brightness5Rounded";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [modeText, setModeText] = useState("Dark mode");

  const changeMode = () => {
    setIsDarkMode((currentState) => !currentState);
    !isDarkMode ? setModeText("Light Mode") : setModeText("Dark mode");
    document.querySelector(".App").classList.toggle("dark");
  };

  return (
    <header className="header">
      <h3 className="header__text">Where in the world?</h3>
      <div className="header__dark-mode" onClick={changeMode}>
        {isDarkMode ? (
          <Brightness5RoundedIcon className="icons" />
        ) : (
          <Brightness4RoundedIcon className="icons" />
        )}
        <p className="dark-mode__text">{modeText}</p>
      </div>
    </header>
  );
};

export default Header;
