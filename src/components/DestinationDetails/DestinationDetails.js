import React from "react";
import "./DestinationDetails.css";
import SimpleImageSlider from "react-simple-image-slider";
import Recording from "../Recording/Recording";
import PropTypes from "prop-types";

const DestinationDetails = ({ selectedDestination, destinations }) => {
  const pictures = [
    { url: `/images/${selectedDestination.destination}_1.jpg` },
    { url: `/images/${selectedDestination.destination}_2.jpg` },
    { url: `/images/${selectedDestination.destination}_3.jpg` },
  ];

  return (
    <div className="destination-details-container">
      <h2 className="destination-details-header">
        {selectedDestination.destinationFullName}
      </h2>
      <div className="destination-details-wrapper">
        <div className="pictures">
          <SimpleImageSlider width={325} height={325} images={pictures} />
        </div>
        <div>
          <Recording
            key={selectedDestination.id}
            destinations={destinations}
            selectedDestination={selectedDestination}
          />
        </div>
      </div>
    </div>
  );
};

DestinationDetails.propTypes = {
  selectedDestination: PropTypes.object,
  destinations: PropTypes.array,
};

export default DestinationDetails;
