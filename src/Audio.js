import React from "react";
import useSound from "use-sound";

export default function Audio(props) {
  let url = props.audio;
  const [play] = useSound(url, { volume: 0.5 });

  function playAudio(event) {
    event.preventDefault();
    play();
  }

  if (props.audio) {
    return (
      <span>
        <button
          type="button"
          className="btn btn-secondary me-3"
          onClick={playAudio}
        >
          <i className="fa-solid fa-circle-play"></i>
        </button>
      </span>
    );
  } else {
    return null;
  }
}
