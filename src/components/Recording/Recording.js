import React, { useState, useEffect } from "react";
import { Recorded } from "../Recorded/Recorded";
import './Recording.css';

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
      if (destination.id === selectedDestination.id) {
        destination.recordings = savedRecords;
        return destination;
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
    if (rec.state === 'recording') {
      rec.stop();
      onSuccess();
    } else {
      return;
    }
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
        <button className="start-mic-btn" onClick={() => startAudio()}>Start mic</button>
        <button className="stop-mic-btn" onClick={() => stopAudio()}>Stop mic</button>
      </div>
      <p className="recording-count">Recordings ({`${savedRecords.length}`})</p>
      <div className="recording-elem-container">{renderAllRecordings()}</div>
    </div>
  );
};
export default Recording;
