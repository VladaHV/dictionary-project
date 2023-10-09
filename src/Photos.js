import React from "react";
import "./Photos.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Comment, ProgressBar } from "react-loader-spinner";

export default function Photos(props) {
  if (props.photos.length) {
    return (
      <section className="Photos">
        <Splide
          options={{
            rewind: true,
            type: "slide", //slide, fade, loop
            paginationDirection: "ttb", //'ltr', | 'rtl' | 'ttb'
            direction: "ttb",
            height: "25rem",
            focus: "center",
            autoHeight: true,
            releaseWheel: true,
            wheel: true,
            wheelSleep: 800,
          }}
          className="my-carousel"
          aria-label="My Favorite Images"
        >
          {props.photos.map(function (photo, index) {
            let desc = `photos${index}`;
            let currentPhoto = photo.src.landscape;
            return (
              <SplideSlide key={index}>
                <img className="img-fluid" src={currentPhoto} alt={desc} />
              </SplideSlide>
            );
          })}
        </Splide>
      </section>
    );
  } else if (props.error) {
    return (
      <section className=" card">
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
            <p className="mb-2">
              Sorry 🫣, cant't find any photos. Please, try again!
            </p>
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
