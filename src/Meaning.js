import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";


export default function Meaning(props) {
//   console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
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
  );
}
