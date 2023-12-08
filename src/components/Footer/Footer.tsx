import React from "react";
import {CoinGekoWhiteLogo} from "../../assets/svg";

import "./Footer.css";

interface FooterProps {
  goTo: string;
  url: string;
}

const Footer = ({ goTo, url }: FooterProps) => {
  return (
    <div className="footer-container">
      {/*TO-DO Don't recharge the full page to change location*/}
      {/* <a href={url}>
        Ir a {goTo}
        <EuiIcon type="sortRight" />
      </a> */}
      <div className="footer-container__left_area"></div>
      <div className="footer-container__sponsor">
        <h3>Powered by </h3>
      <img src={CoinGekoWhiteLogo} alt="coingeko_logo" className="footer-container__logo"></img>
      </div>
    </div>
  );
};

export default Footer;
