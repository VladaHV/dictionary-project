import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");

	function search(event) {
		event.preventDefault();
		alert(`Searching for ${keyword}`);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	};

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
            type="button"
            value="Search"
            className="btn btn-primary col-2"
          />
        </div>
      </form>
    </div>
  );
}