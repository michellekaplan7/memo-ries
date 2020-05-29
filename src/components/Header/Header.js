import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
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
