import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meaning.css";

export default function Meaning(props) {
  let collapseIndex = `flush-collapse${props.index}`;
  let collapseIndexTarget = `#flush-collapse${props.index}`;
  return (
    <div className="Meaning">
      <div className="accordion-item">
        <div className="accordion-header">
          <button
            className="accordion-button py-1 collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={collapseIndexTarget}
            aria-expanded="false"
            aria-controls={collapseIndex}
          >
            <h3 className="partOfSpeech"> {props.meaning.partOfSpeech} </h3>
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
                      <div className="example">
                        {def.example}
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
