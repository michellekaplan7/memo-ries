import React from 'react';
import './DestinationDetails.css';

const DestinationDetails = ({destination}) => {
  return(
    <h2>
      {destination.destinationFullName}
    </h2>
  );
}
export default DestinationDetails;
