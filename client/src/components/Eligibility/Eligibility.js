import React from "react";
import "./Eligibility.css";

function Eligibility() {
  return (
    <div className="Eligibility">
      <div className="Eligibility_content">
        <p className="Eligibility_content_title">
          Blockchain developer Course Eligibility
        </p>
        <div className="Eligibility_content_ele">
          <ul>
            <li>Basic understanding of programming languages</li>
            <li>
              At least 1+ years of work experience (Preferred but Not Mandatory)
            </li>
          </ul>
          <p>Prerequisites</p>
          <ul className="ullist">
            <li>Basics of JavaScript</li>
            <li>Basics of Node Js</li>
            <li>Linux & its basic commands.</li>
          </ul>
        </div>
        <button>Check Your Eligibility</button>
      </div>
    </div>
  );
}

export default Eligibility;
