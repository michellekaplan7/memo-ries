import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-logo-container">
        <img alt="memories logo" src="/images/MEMORIES_logo_mobile.png" />
      </div>
      <h2>Welcome!</h2>
      <hr />
      <p>
        This is an audio / visual memory journal that allows you to catalog your
        experiences across Colorado.
      </p>
      <Link className="welcome-link" to="/destinations">
        <button className="welcome-button">Let the memories begin!</button>
      </Link>
    </div>
  );
};

export default Landing;
