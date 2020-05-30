import React from 'react';
import './DestinationDetails.css';
import SimpleImageSlider from "react-simple-image-slider";


const DestinationDetails = ({destination}) => {
  const pictures = [
		{ url: `/public/${destination.destination}_1.jpg` },
		{ url: `/public/${destination.destination}_2.jpg` },
		{ url: `/public/${destination.destination}_3.jpg` },
  ];
 
  return(
    <div>
      <h2>
      {destination.destinationFullName}
      </h2>
      <div className="pictures">
        <SimpleImageSlider width={600} height={400} images={pictures} />
      </div>
    </div>
  );
}
export default DestinationDetails;
