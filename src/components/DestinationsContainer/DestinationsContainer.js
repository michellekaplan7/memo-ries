import React, { useState } from 'react';
import './DestinationsContainer.css';
import DestinationButton from '../DestinationButton/DestinationButton';

const DestinationsContainer = ({ setSelectedDestination }) => {
  const [destinationNames, setDestinationNames] = useState(
    [{
          destination: 'Denver',
          destinationFullName: 'Denver',
          id: 1,
        },
        {
          destination: 'Aspen',
          destinationFullName: 'Aspen',
          id: 2,
        },
        {
          destination: 'FoCo',
          destinationFullName: 'Fort Collins',
          id: 3,
        },
        {
          destination: 'RMNP',
          destinationFullName: 'Rocky Mountain National Park',
          id: 4,
        }]
  )

  const displayDestinations = () => {
   return destinationNames.map(destination => {
      return (
        <DestinationButton setSelectedDestination={setSelectedDestination} key={destination.id} destination={destination} />
      )
    })
  }

  return (
    <div>
      {displayDestinations()}
    </div>
  );
}

export default DestinationsContainer;
