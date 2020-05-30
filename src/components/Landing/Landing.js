import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <h2>Welcome!</h2>
      <button className="welcome-button">
        <Link className="welcome-link" to="/destinations">
          Let the memories begin!
        </Link>
      </button>
    </div>
  );
}

export default Landing;
