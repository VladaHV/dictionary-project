import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length) {
	  return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              <li>{synonym} </li>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
