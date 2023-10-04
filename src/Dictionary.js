import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results"

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
      <form className="card " onSubmit={search}>
        <div className="row justify-content-center">
          <input
            type="search"
            placeholder="Type for searching"
            autoFocus={true}
            onChange={handleKeywordChange}
            className="col-4"
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
