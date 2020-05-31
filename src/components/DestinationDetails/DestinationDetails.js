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
    <div>
      <h2>
      {selectedDestination.destinationFullName}
      </h2>
      <div className="pictures">
        <SimpleImageSlider width={600} height={400} images={pictures} />
      </div>
      <div>
        <Recording 
        key={selectedDestination.id}
        destinations={destinations}
        selectedDestination={selectedDestination}
        />
      </div>
    </div>
  );
}

export default DestinationDetails;
