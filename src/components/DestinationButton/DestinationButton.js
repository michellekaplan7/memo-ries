import React from "react";
import { Link } from "react-router-dom";
import './DestinationButton.css';

const DestinationButton = (props) => {
  return (
    <Link className='destinationButtonLink' to={`/destinations/${props.destination.destination}`}>
      <button
      className='destinationButton'
        id={props.destination.id}
        onClick={() => props.setSelectedDestination(props.destination)}
      >
        {props.destination.destination}
      </button>
    </Link>
  );
};

export default DestinationButton;