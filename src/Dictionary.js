import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import logo from "./img/05june22_phonebook_icon_04.png";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    // console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div
        className="card mb-3  w-auto border-0 bg-transparent
"
      >
        <div className="row g-0 justify-content-center mb-4">
          {/* <div className="col-3 d-flex justify-content-end px-2">
            <img src={logo} className="float-end logo" alt="logo"></img>
          </div> */}
          <div className="col-7 align-self-center px-2">
            <div className="row text-center mb-3">
              <h1>Dictionary App</h1>
            </div>

            <form onSubmit={search}>
              <div className="row justify-content-center">
                <input
                  type="search"
                  placeholder="Type for searching"
                  autoFocus={true}
                  onChange={handleKeywordChange}
                  className="col-9"
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary col-3"
                />
              </div>
            </form>
          </div>
          {/* <div className="col-3 d-flex justify-content-start px-2">
            <img src={logo} className="float-end logo" alt="logo"></img>
          </div> */}
        </div>
      </div>

      <Results results={results} />
    </div>
  );
}
