import React, { useState, useEffect } from "react";
import { Recorded } from "../Recorded/Recorded";

const Recording = ( { destinations, selectedDestination}) => {
  let rec = {};
  let audioChunks = [];
  
  const [savedRecords, setSavedRecords] = useState(() => {
    if (selectedDestination.recordings) {
      return [...selectedDestination.recordings]
    }
      return []
  });

  useEffect(() => {
    findSpecificDestination()
  })

  const findSpecificDestination = () => {
    return destinations.map(destination => {
      if( destination.id === selectedDestination.id) {
          destination.recordings = savedRecords
      }
    })
  }

  const getMediaRecordingApi = async () => {
    let audioPromise = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    let recording = await new MediaRecorder(audioPromise);
    rec = recording;
    return audioPromise;
  };

  const onSuccess = () => {
    rec.ondataavailable = (e) => {
      audioChunks.push(e.data);
      if (rec.state === "inactive") {
        let blob = new Blob(audioChunks, { type: "audio/mpeg-3" });
        let mediaRecording = {
          src: URL.createObjectURL(blob),
          controls: true,
          autoPlay: false,
          id: Math.floor(Math.random() * 100) + 1,
        };
        audioChunks = [];
        setSavedRecords([...savedRecords, mediaRecording]);
      }
    };
  };

  const startAudio = async () => {
    await getMediaRecordingApi();
    rec.start();
  };

  const stopAudio = () => {
    rec.stop();
    onSuccess();
  };

  const renderAllRecordings = () => {
    return savedRecords.map((rec) => {
      return (
        <Recorded
          key={rec.id}
          src={rec.src}
          controls={rec.controls}
          autoPlay={rec.autoPlay}
        />
      );
    });
  };

  return (
    <div className="recording">
      <div className="controls">
        <button onClick={() => startAudio()}>Start microphone</button>
        <button onClick={() => stopAudio()}>Stop microphone</button>
      </div>
      <p className="recording-count">Recordings ({`${savedRecords.length}`})</p>
      <div>{renderAllRecordings()}</div>
    </div>
  );
};
export default Recording;
