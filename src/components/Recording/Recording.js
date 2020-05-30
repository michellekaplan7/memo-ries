// // // // // // // // 
//  Refactoring the recordings with hooks......
// // // // // // // // 

// import React, { useEffect, useState } from 'react';
// const App = (props) => {
//   const [audio, setAudio] = useState({})
//   const [rec, setRec] = useState({})
//   useEffect( () => {
//      getMediaRecordingApi()
//   }, [])
//   let audioChunks = []
//   async function getMediaRecordingApi() {
//     let audioPromise = await navigator.mediaDevices.getUserMedia({ audio: true, video: false})
//     setAudio(audioPromise)
//     let recording = await new MediaRecorder(audioPromise);
//     setRec(recording)
//     return audioPromise
//   }
//   function onSuccess() {
//     rec.ondataavailable = (e) => {
//     audioChunks.push(e.data);
//     if (rec.state == "inactive"){
//       let blob = new Blob(audioChunks, {type:'audio/mpeg-3'});
//       const audioElement = document.getElementById('audio')
//       audioElement.src = URL.createObjectURL(blob);
//       audioElement.controls=true;
//       audioElement.autoplay=false;
//         }
//       }
//     }
//     function startAudio() {
//     console.log(rec)
//     console.log(audio)
//       // rec.recording.MediaRecorder.start()
//     }
//     function stopAudio() {
//       // rec.recording.stop()
//       // onSuccess()
//     }
//     return ( 
//     <div className = "App" >
//       <div className = "controls" >
//         <button onClick={startAudio()} >Start microphone</button> 
//         <button onClick={stopAudio()} >Stop microphone</button> 
//       </div>
//       <audio id="audio"></audio>
//     </div>
//     );
// }
// export default App;



// // // // // // // // 
//  This is the working MediaRecorderApi that can render multiple Recordings.....
// // // // // // // // 


import React from 'react';
import { Recorded } from '../Recorded/Recorded'

class Recording extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDestination: '',
      savedRecords: [],
    };
    this.audio = this.audio()
    this.audioChunks = []
    this.rec = null
  }
  async audio() {
    let audio = await navigator.mediaDevices.getUserMedia({ audio: true, video: false})
    this.rec = await new MediaRecorder(audio);
    return audio
  }
  onSuccess() {
    this.rec.ondataavailable = (e) => {
    this.audioChunks.push(e.data);
    if (this.rec.state === "inactive"){
      let blob = new Blob(this.audioChunks,{type:'audio/mpeg-3'});
      let mediaRecording = {
        src: URL.createObjectURL(blob),
        controls: true,
        autoPlay: false,
      }
      this.audioChunks = []
      this.setState({ savedRecords: [...this.state.savedRecords, mediaRecording]})
        }
      }
    }
    startAudio = (e) => {
      this.rec.start()
    }
    stopAudio = (e) => {
      this.rec.stop()
      this.onSuccess()
    }
    renderAllRecordings = () => {
      let test = this.state.savedRecords.map( rec => {
        return <Recorded src={rec.src} controls={rec.controls} autoPlay={rec.autoPlay} />
      })
     return test
    }
  render() {
    return ( 
    <div>
      <div>
        <button onClick={this.startAudio} >Start microphone</button> 
        <button onClick={this.stopAudio} >Stop microphone</button> 
      </div>
      <div>
        {this.renderAllRecordings()}
      </div>
    </div>
    );
  }
}
export default Recording;