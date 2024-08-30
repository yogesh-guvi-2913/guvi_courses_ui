import React, { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/utils"; // Optional for some formatting features
import guvi from "../../assets/guvi.svg";
import gpart from "../../assets/gpart.svg";
import "./Home.css";

function Home() {
  const [phone, setPhone] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const iti = intlTelInput(inputRef.current, {
        initialCountry: "in",
        separateDialCode: true,
        utilsScript:
          "https://cdn.jsdelivr.net/npm/intl-tel-input/build/js/utils.js",
        useFullscreenPopup: false,
        fixDropdownWidth: true,
        strictMode: true,
      });

      const dropdownArrow =
        inputRef.current.parentNode.querySelector(".iti__arrow");

      // Reorder the elements (flag -> country code -> dropdown)
      const flagContainer = inputRef.current.parentNode.querySelector(
        ".iti__flag-container"
      );

      const dialCodeElement = inputRef.current.parentNode.querySelector(
        ".iti__selected-dial-code"
      );

      // Append the dropdown arrow after the dial code
      dialCodeElement.parentNode.insertBefore(dropdownArrow, null);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone", phone);
  };

  const courseDetails = [
    { label: "Duration", value: "3 Months (Weekend)" },
    { label: "Format", value: "Live Online Classes" },
    { label: "Hiring Partners", value: "100+ Companies" },
    { label: "EMI Options", value: "Upto 12 Months" },
    { label: "Placement", value: "100% Placement Support" },
  ];
  return (
    <div className="home">
      <div className="logo">
        <img src={guvi} alt="Logo" width={55} height={24} />
        <img src={gpart} alt="Logo" height={24} width={126} />
      </div>
      <div className="gradient_bg"></div>
      <div className="top_home">
        <div className="top_home_left">
          <div className="top_home_left_top">
            <span>Certified</span> Blockchain Professional Course
          </div>
          <div className="top_home_left_bottom">
            <div className="top_home_left_bottom_items">
              100% Placement Support
            </div>
            <div className="top_home_left_bottom_items">
              Industry Led Curriculum
            </div>
            <div className="top_home_left_bottom_items">
              Work on 20+ Projects
            </div>
            <div className="top_home_left_bottom_items">
              Worldwide accepted Certification
            </div>
          </div>
        </div>
        <div className="top_home_right">
          <div className="form_container">
            <div className="gradient_form_top"></div>
            <div className="gradient_form_down"></div>
            <h2>Interested in this course?</h2>
            <form
              className="form_content"
              action="/submit_form"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="form_content_item">
                <label>Name</label>
                <input
                  className="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form_content_item">
                <label>Email</label>
                <input
                  className="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="form_content_item">
                <label>Phone</label>
                <input
                  ref={inputRef}
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Enter Your Number"
                  required
                />
              </div>
              <div className="form_content_btn">
                <button className="button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom_home">
        {courseDetails.map((detail, index) => (
          <div key={index} className="course-info-item">
            <div className="course-info-label">{detail.label}</div>
            <div className="course-info-value">{detail.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
