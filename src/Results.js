import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  // console.log(props.results);
  if (props.results) {
    return (
      <div className="Results card p-4 ">
        <h2 className="mb-4 text-center">{props.results.word}</h2>
        <Phonetics props={props.results} />
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
