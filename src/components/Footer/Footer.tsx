import React from "react";
import { EuiIcon } from "@elastic/eui";

import "./Footer.css";

interface FooterProps {
  goTo: string;
  url: string;
}

const Footer = ({ goTo, url }: FooterProps) => {
  return (
    <div className="footer-container">
      {/*TO-DO Don't recharge the full page to change location*/}
      <a href={url}>
        Ir a {goTo}
        <EuiIcon type="sortRight" />
      </a>
    </div>
  );
};

export default Footer;
