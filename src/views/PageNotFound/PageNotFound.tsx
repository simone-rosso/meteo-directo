import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <h2>PageNotFound!</h2>
      <img
        src="https://media.giphy.com/media/FbfNWx3LPoy2I/giphy.gif"
        alt="this slowpoke moves"
        width="250"
      />
      <p>
        <a href={"/"} className="link">
          Go back to the Homepage
        </a>
      </p>
    </div>
  );
};

export default PageNotFound;
