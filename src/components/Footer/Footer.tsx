import { EuiIcon } from "@elastic/eui";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="/saved">
        Go to saved searches
        <EuiIcon type="sortRight" />
      </a>
    </div>
  );
};

export default Footer;
