import React from "react";
import devimg from "../../assets/OBJECTS.svg";

import "./Developer.css";

function Developer() {
  return (
    <div className="developer">
      <div className="developer_img">
        <img src={devimg} alt="devimg" />
      </div>
      <div className="developer_content">
        <div className="developer_content_item">
          <h2>Why become a Blockchain Developer?</h2>
          <p>
            The demand for blockchain developers is growing daily as they work
            with turbulent and existing technology. Statistics say there was a
            22% increase in demand for that role from 2020-2022, and it's
            expected to double in the following years. Average Salary for a
            Blockchain Developer: 6.5 LPAMax Salary per year for a 5-Year
            Experience Blockchain Developer: 60 LPAEstimated Blockchain Market
            Size by 2026: $34 billion (Growing at the rate of 45% annually)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Developer;
