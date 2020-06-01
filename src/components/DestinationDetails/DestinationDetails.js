import React from 'react';
import './DestinationDetails.css';
import SimpleImageSlider from "react-simple-image-slider";
import Recording from '../Recording/Recording'

const DestinationDetails = ({selectedDestination, destinations}) => {

  const pictures = [
		{ url: `/images/${selectedDestination.destination}_1.jpg` },
		{ url: `/images/${selectedDestination.destination}_2.jpg` },
		{ url: `/images/${selectedDestination.destination}_3.jpg` },
  ];
  
  return(
    <div className='destination-details-container'>
      <h2 className='destination-details-header'>
        {selectedDestination.destinationFullName}
      </h2>
      <div className='destination-details-wrapper'>
        <div className="pictures">
          <SimpleImageSlider width={278.7} height={300} images={pictures} />
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
}

export default DestinationDetails;
