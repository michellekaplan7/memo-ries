import React from 'react';
import './Header.css';
import { Route, Switch } from "react-router-dom";

function Header = () => {
  return(
    <header>
      <h1>MEMO—ries</h1>
      <Link to="/memories">
        <button>View All Memories</button>
      </Link>
    </header>
  );
}

export default Header;
