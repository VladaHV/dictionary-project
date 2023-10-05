import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (def, index) {
		  return (
        <div key={index}>
          <p>
            <strong>Definition: </strong>
            {def.definition}
            {def.example ? (
              <div>
                <strong>Example: </strong>
                <em>{def.example}</em>
              </div>
					  ) : null}
					  <Synonyms synonyms={def.synonyms}/>
            {/*  */}
          </p>
        </div>
      );
      })}
    </div>
  );
}
