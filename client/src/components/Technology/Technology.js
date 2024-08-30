import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blockchain from "../../assets/blockchain.svg";
import bcdepth from "../../assets/bcdepth.svg";
import ethurem from "../../assets/ethurem.svg";
import smart from "../../assets/smart.svg";
import hyperleger from "../../assets/hyperleger.svg";
import "./Technology.css";

function Technology() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 770, // Desktop and above
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          autoplay: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768, // Tablet screen size
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 540, // Mobile screen size
        settings: {
          slidesToShow: 1, // Show only one slide
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          arrows: false,
          centerMode: true, // Enable center mode for mobile
          centerPadding: "110px", // Adjust padding around the centered slide
        },
      },
    ],
  };

  return (
    <div className="Technology">
      <h1>Technologies that will be covered:</h1>
      <div className="Technology_content">
        <Slider {...settings}>
          <div className="Technology_content_item">
            <img src={blockchain} alt="blockchain" />
            <p>Blockchain basics</p>
          </div>
          <div className="Technology_content_item">
            <img src={bcdepth} alt="bcdepth" />
            <p>Blockchain in-depth</p>
          </div>
          <div className="Technology_content_item">
            <img src={ethurem} alt="Ethereum" />
            <p>Ethereum</p>
          </div>
          <div className="Technology_content_item">
            <img src={smart} alt="Smart" />
            <p>Smart Contract</p>
          </div>
          <div className="Technology_content_item">
            <img src={hyperleger} alt="Hyperledger Fabric" />
            <p>Hyperledger Fabric</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Technology;
