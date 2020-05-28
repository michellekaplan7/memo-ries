import React from 'react';  
import { Link } from "react-router-dom";

const DestinationButton = ( { destination } ) => { 
  return(
    <Link to={`/destinations/${destination.destination}`}>
      <button id={destination.id}>{destination.destination}</button> 
    </Link>
  );
 }

export default DestinationButton;
