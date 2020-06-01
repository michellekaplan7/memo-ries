import React from "react";
import "./Memories.css";
import { Recorded } from "../Recorded/Recorded";

export const Memories = ({ destinations }) => {
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
      <div className="desination-recordings-container">
        <h3>{destination.destinationFullName} Memories:</h3>
        {displayMemories(destination)}
      </div>
    );
  });

  return <div className="memories-container">{destinationContainers}</div>;
};
