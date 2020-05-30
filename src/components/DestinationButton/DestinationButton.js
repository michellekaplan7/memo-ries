import React from 'react';  
import { Link } from "react-router-dom";
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import Header from '../Header/Header';

const DestinationButton = (props) => { 

  return(
    <Link to={`/destinations/${props.destination.destination}`}>
      <button
      id={props.destination.id}
      onClick={() => props.setSelectedDestination(props.destination)}
      >
        {props.destination.destination}
      </button> 
    </Link>
  );
 }

export default DestinationButton;
