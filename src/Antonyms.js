import React from "react";

export default function Antonyms(props) {
  console.log(props.antonyms);
  if (props.antonyms.length) {
    return (
      <div className="Antonyms">
        <strong>Antonyms: </strong>
        {props.antonyms.map(function (antonyms, index) {
          return <span key={index}>{antonyms} / </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
