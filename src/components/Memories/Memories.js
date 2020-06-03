import React from "react";
import "./Memories.css";
import Recorded from "../Recorded/Recorded";
import PropTypes from "prop-types";

const Memories = ({ destinations }) => {
  const displayMemories = (destination) => {
    if (destination.recordings.length > 0) {
      return destination.recordings.map((recording) => {
        return (
          <Recorded
            key={recording.id}
            src={recording.src}
            controls={recording.controls}
            autoPlay={recording.autoPlay}
          />
        );
      });
    }
    return <p>You have no recordings for this location.</p>;
  };

  const destinationContainers = destinations.map((destination) => {
    return (
      <div
        key={destination.id}
        className={destination.destination + "-recordings-memories"}
      >
        <h3>{destination.destinationFullName} Memories:</h3>
        <br />
        {displayMemories(destination)}
      </div>
    );
  });

  return <div className="memories-container">{destinationContainers}</div>;
};

Memories.propTypes = {
  destinations: PropTypes.array,
};

export default Memories;
