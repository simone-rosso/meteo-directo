import { EuiIcon } from "@elastic/eui";
import React, { useContext } from "react";
import Context from "../../utils/context";
import "./Footer.css";

const Footer = () => {
  const { location, changeLocation } = useContext(Context);
  return (
    <div className="footer-container">
      <a href="/saved">
        Go to {location}
        <EuiIcon type="sortRight" />
      </a>
    </div>
  );
};

export default Footer;
