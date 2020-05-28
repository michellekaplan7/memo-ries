import React from 'react';
import './Header.css';
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <header>
      <h1>MEMO—ries replace with logo type</h1>
      <Link to="/memories">
        <button>View All Memories</button>
      </Link>
    </header>
  );
}

export default Header;
