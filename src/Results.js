import React from "react";
import Meaning from "./Meaning";
import "./Results.css"

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results mx-5">
        <h2>
          {props.results.word} {props.results.phonetic}
        </h2>

        <div className="accordion" id="accordionExample">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index} className="">
                <Meaning meaning={meaning} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
