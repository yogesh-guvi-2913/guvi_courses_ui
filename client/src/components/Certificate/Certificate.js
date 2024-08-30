import React, { useState, useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import nsdc from "../../assets/nsdc.webp";
import google from "../../assets/google.webp";
import aicte from "../../assets/aicte.webp";
import iso from "../../assets/iso.webp";
import nan_mudhalvan from "../../assets/nan_mudhalvan.webp";
import iit from "../../assets/iit.webp";

import "./Certificate.css";

function Certificate() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [dotCount, setDotCount] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [activeDot, setActiveDot] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      const index = Math.floor(slider.track.details.rel / slidesPerView);
      setActiveDot(index);
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: slidesPerView,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 3,
        },
      },
      "(max-width: 560px)": {
        slides: {
          perView: 2,
        },
      },
      "(min-width: 1025px)": {
        slides: {
          perView: 4,
        },
      },
    },
  });

  const autoplayRef = useRef(null);

  useEffect(() => {
    if (instanceRef.current) {
      autoplayRef.current = setInterval(() => {
        instanceRef.current?.next();
      }, 3000);

      return () => clearInterval(autoplayRef.current);
    }
  }, [instanceRef]);

  useEffect(() => {
    if (instanceRef.current) {
      const updateDotCount = () => {
        const slidesCount = instanceRef.current.track.details.slides.length;
        const currentPerView = instanceRef.current.options.slides.perView;

        console.log("Current perView:", currentPerView); // Debugging the perView value
        setSlidesPerView(currentPerView);
        setDotCount(Math.ceil(slidesCount / currentPerView));
      };

      updateDotCount();
      window.addEventListener("resize", updateDotCount);

      return () => window.removeEventListener("resize", updateDotCount);
    }
  }, [loaded, instanceRef]);

  return (
    <div className="certificate">
      <p>We are accredited by</p>
      <div>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide sub-slide">
              <img src={nsdc} alt="nsdc" />
            </div>
            <div className="keen-slider__slide sub-slide">
              <img src={google} alt="google" />
            </div>
            <div className="keen-slider__slide sub-slide">
              <img src={aicte} alt="aicte" />
            </div>
            <div className="keen-slider__slide sub-slide">
              <img src={iso} alt="iso" />
            </div>
            <div className="keen-slider__slide sub-slide">
              <img src={nan_mudhalvan} alt="nan_mudhalvan" />
            </div>
            <div className="keen-slider__slide sub-slide">
              <img src={iit} alt="iit" />
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {Array.from({ length: dotCount }).map((_, idx) => (
              <div
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx * slidesPerView);
                }}
                className={"dot" + (activeDot === idx ? " active" : "")}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificate;
