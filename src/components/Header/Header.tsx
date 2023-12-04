import React, { useContext } from "react";
import "./Header.css";

import LogoutButton from "../LogoutButton/LogoutButton";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="header-container">
      <div>Crypto Capitalization</div>
      <div>
        {currentUser && <LogoutButton />}
      </div>
    </div>
  );
};

export default Header;
