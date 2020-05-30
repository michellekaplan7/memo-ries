import React from 'react';
import './DestinationDetails.css';
import SimpleImageSlider from "react-simple-image-slider";
import Recording from '../Recording/Recording'

const DestinationDetails = ({destination}) => {
  const pictures = [
		{ url: `/images/${destination.destination}_1.jpg` },
		{ url: `/images/${destination.destination}_2.jpg` },
		{ url: `/images/${destination.destination}_3.jpg` },
  ];
 
  return(
    <div>
      <h2>
      {destination.destinationFullName}
      </h2>
      <div className="pictures">
        <SimpleImageSlider width={600} height={400} images={pictures} />
      </div>
      <div>
        <Recording />
      </div>
    </div>
  );
}

export default DestinationDetails;
