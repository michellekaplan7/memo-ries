import React from "react";
import "./DestinationsContainer.css";
import DestinationButton from "../DestinationButton/DestinationButton";
import PropTypes from "prop-types";

const DestinationsContainer = ({ destinations, setSelectedDestination }) => {
  const displayDestinations = () => {
    return destinations.map((destination) => {
      return (
        <DestinationButton
          setSelectedDestination={setSelectedDestination}
          key={destination.id}
          destination={destination}
        />
      );
    });
  };

  return (
    <div className="main-wrapper-destinationButtons">
      <p className="destinationContainerHeader">destinations</p>
      <div className="destinationButtonContainer">{displayDestinations()}</div>
    </div>
  );
};

DestinationsContainer.propTypes = {
  destinations: PropTypes.array,
  setSelectedDestination: PropTypes.func,
};

export default DestinationsContainer;
