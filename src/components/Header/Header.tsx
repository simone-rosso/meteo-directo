import React from "react";
import "./Header.css";

import LogoutButton from "../LogoutButton/LogoutButton";

const Header = () => {
  return (
    <div className="header-container">
      <div>Meteo en Directo</div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Header;
