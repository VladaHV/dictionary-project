import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  // console.log(props.results);
  if (props.results) {
    return (
      <section className="Results card mb-3">
        <h2 className="mb-2 text-center">{props.results.word}</h2>
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
			
      </section>
    );
  } else {
    return null;
  }
}
