import React from "react";
import { Link } from "react-router-dom";
import './DestinationButton.css';
import PropTypes from "prop-types";

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

DestinationButton.propTypes = {
  setSelectedDestination: PropTypes.func,
  destination: PropTypes.object
};


export default DestinationButton;