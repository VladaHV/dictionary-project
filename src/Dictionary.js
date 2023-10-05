import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import logo from "./img/8882828.jpg";

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
      <div className="card mb-3  w-auto border-0">
        <div className="row g-0 justify-content-center">
          <div className="col-3 d-flex justify-content-end px-2">
            <img
              src={logo}
              className="rounded-start float-end w-50"
              alt="logo"
            ></img>
          </div>
          <div className="col-6 align-self-center px-2">
            <h1>Dictionary App</h1>
          </div>
        </div>
      </div>

      <form className="mb-4" onSubmit={search}>
        <div className="row justify-content-center">
          <input
            type="search"
            placeholder="Type for searching"
            autoFocus={true}
            onChange={handleKeywordChange}
            className="col-5"
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary col-2"
          />
        </div>
      </form>

      <Results results={results} />
    </div>
  );
}
