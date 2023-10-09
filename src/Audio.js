import React from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

//https://www.npmjs.com/package/react-use-audio-player

export default function Audio(props) {
  let url = props.audio;
  const { load } = useGlobalAudioPlayer();

  function playAudio(event) {
    event.preventDefault();
    load(url, { autoplay: true });
  }

  if (props.audio) {
    return (
      <span className="justify-content-center icon">
        <button type="button" className="btn" onClick={playAudio}>
          <i className="fa-regular fa-circle-play"></i>
        </button>
      </span>
    );
  } else {
    return null;
  }
}

// import ReactAudioPlayer from "react-audio-player";
//   <ReactAudioPlayer src={url} controls  />
