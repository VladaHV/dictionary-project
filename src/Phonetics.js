import React from "react";
import Audio from "./Audio";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.props.phonetics.length);
  if (props.props.phonetics.length) {
    return (
      <div className="Phonetics mb-3">
        {props.props.phonetics.map(function (phonetics, index) {
          return (
            <div key={index} className="mb-2">
              <Audio audio={phonetics.audio} /> 
              {phonetics.text}
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div className="Phonetics">{props.props.phonetic}</div>;
  }
}
