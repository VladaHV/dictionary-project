import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meaning.css"

export default function Meaning(props) {
  //   console.log(props.meaning);
  let collapseIndex = `collapse${props.index}`;
  let collapseIndexTarget = `#collapse${props.index}`;
  return (
    <div className="Meaning">
      <div className="accordion-item">
        <div className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={collapseIndexTarget}
            aria-expanded="false"
            aria-controls={collapseIndex}
          >
            <h3> {props.meaning.partOfSpeech} </h3>
          </button>
        </div>
        <div
          id={collapseIndex}
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>Definition:</strong>
            {props.meaning.definitions.map(function (def, index) {
              return (
                <div key={index}>
                  <ul>
                    <li> {def.definition}</li>
                    {def.example ? (
                      <div>
                        <strong>Example: </strong>
                        <em>{def.example}</em>
                      </div>
                    ) : null}
                  </ul>
                </div>
              );
            })}
            <Synonyms synonyms={props.meaning.synonyms} />
            <Antonyms antonyms={props.meaning.antonyms} />
          </div>
        </div>
      </div>
    </div>
  );
}
