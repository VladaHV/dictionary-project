import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (def, index) {
		  return (
        <div key={index}>
          <p>
            {def.definition}
            <br />
            <em>{def.example}</em>
          </p>
        </div>
      );
      })}
    </div>
  );
}
