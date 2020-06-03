import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <header>
      <div className="header-logo-container">
        <img alt="memories-logo" src="/images/MEMORIES_logo_mobile.png" />
      </div>
      <Link className='myMemoriesButtonLink' to="/memories">
        <button className='myMemoriesButton'>View All Memories</button>
      </Link>
    </header>
  );
}

export default Header;
