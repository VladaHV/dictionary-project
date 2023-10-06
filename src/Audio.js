import React from "react";
import useSound from "use-sound";

export default function Audio(props) {
  let url = props.audio;
  const [play] = useSound(url);

  function playAudio(event) {
    event.preventDefault();
    console.log(url);

    play();
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
