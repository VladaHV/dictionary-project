import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
import { ProgressBar } from "react-loader-spinner";

// import logo from "./img/05june22_phonebook_icon_04.png";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [load, setLoad] = useState(false);
  let [photos, setPhotos] = useState({ length: 0 });
  let [errorPh, setErrorPh] = useState(false);
  let [errorDic, setErrorDic] = useState(false);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
    if (response.data.photos.length) {
      setErrorPh(false);
    } else {
      setErrorPh(true);
    }
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    setErrorDic(false);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function errorMessageDic(error) {
    console.log(`Sorry, api.dictionaryapi.dev return: "${error}"`);
    setResults(null);
  }

  function errorMessagePhoto(error) {
    console.log(`Sorry, api.pexels.com return: "${error}"`);
    setErrorPh(true);
    setPhotos({ length: 0 });
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleDictionaryResponse)
      .catch((error) => {
        setErrorDic(true);
        return errorMessageDic(error);
      });

    let pexelsApiKey =
      "kiWytuBQ0N2AyaChXoimfg3dePDiZaJhBSIpyu2tcxPqmYC2ACS6YR18";
    let headers = { Authorization: pexelsApiKey };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=20`;
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse)
      .catch((error) => {
        setErrorPh(true);
        return errorMessagePhoto(error);
      });
    return (
      <div className="progressBar d-flex justify-content-center">
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#51E5FF"
          barColor="#51E5FF"
        />
      </div>
    );
  }

  function loading() {
    setLoad(true);
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (load) {
    return (
      <div className="Dictionary pt-5">
        <section className="card  w-auto border-0 bg-transparent">
          <div className="row g-0 justify-content-center mb-2">
            {/* <div className="col-3 d-flex justify-content-end px-2">
            <img src={logo} className="float-end logo" alt="logo"></img>
          </div> */}
            <div className="col-9 align-self-center px-2">
              <div className="row text-center mb-3">
                <h1>Dictionary App</h1>
              </div>

              <form onSubmit={handleSearch}>
                <div className="row justify-content-center">
                  <input
                    type="search"
                    placeholder="What word do you want to look up?"
                    autoFocus={true}
                    onChange={handleKeywordChange}
                    className="col-9 input-str"
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="btn col-3 input-btn"
                  />
                </div>
              </form>
            </div>
            {/* <div className="col-3 d-flex justify-content-start px-2">
            <img src={logo} className="float-end logo" alt="logo"></img>
          </div> */}
          </div>
        </section>
        <section className="showRes p-4">
          <Results results={results} error={errorDic} />
          <Photos photos={photos} error={errorPh} />
        </section>
      </div>
    );
  } else {
    loading();
    return (
      <div className="progressBar d-flex justify-content-center">
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#51E5FF"
          barColor="#51E5FF"
        />
      </div>
    );
  }
}
