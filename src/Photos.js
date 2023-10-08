import React from "react";
import "./Photos.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import ModalContent from "./ModalContent";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          <Splide
            options={{
              rewind: true,
              //   width: 800,
              perPage: 1,
              type: "slide", //slide, fade, loop
              //   padding: "5%",
              //   height: "100%",
              // 	autoplay: true,
              //   interval: 10000,
              gap: "1rem",
            }}
            className="my-carousel"
            aria-label="My Favorite Images"
            // hasTrack={false}
          >
            {props.photos.map(function (photo, index) {
              let desc = `photos${index}`;
              let currentPhoto = photo.src.landscape;
				return (
          //   <div className="col-3">
          //     <img
          //       key={index}
          //       src={currentPhoto}
          //       className="img-fluid"
          //       alt={desc}
          //     />
          //   </div>
            <SplideSlide>
              <img
                key={index}
                className="img-fluid"
                src={currentPhoto}
                alt={desc}
              />
            </SplideSlide>
        );
            })}
          </Splide>
        </div>
      </section>
    );
  } else return null;
}
