import React from "react";
import Audio from "./Audio";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.props.phonetics.length);
  if (props.props.phonetics.length) {
	  return (
      <div className="container px-4">
        <div className="Phonetics mb-3 text-center align-center">
          {props.props.phonetics.map(function (phonetics, index) {
            return (
              <span key={index} className="mb-2 containerAuTe ">
                <Audio audio={phonetics.audio} />
                {phonetics.text}
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div className="Phonetics">{props.props.phonetic}</div>;
  }
}
