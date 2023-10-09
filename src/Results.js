import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";
import { Comment, ProgressBar } from "react-loader-spinner";

export default function Results(props) {
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
  } else if (props.error) {
    return (
      <section className="card">
        <div className="row d-flex justify-content-center">
          <div className="col-3 d-flex justify-content-end pe-0">
            <Comment
              visible={true}
              height="30"
              width="70"
              ariaLabel="comment-loading"
              wrapperStyle={{}}
              wrapperClass="comment-wrapper"
              color="#fff"
              backgroundColor="#91847F"
            />
          </div>
          <div className="col-9 align-self-center ps-0">
            <p className="mb-2">Sorry 🫣, cant't find any results in Dictionary. Please, try again! <br />Examples: smile, weather, Paris, baby, car, read, flower...</p>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="progressBar d-flex justify-content-center">
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#91847F"
          barColor="#91847F"
        />
      </div>
    );
  }
}
