import React from "react";
import "./Highlights.css";

function Highlights() {
  return (
    <div className="highlights">
      <div className="highlights_content">
        <div className="highlights_content_ele">
          <p>Blockchain course Highlights</p>
          <div className="highlights_content_text">
            <div className="highlights_content_text_left">
              <ul>
                <li>A program designed by Experts from the industry</li>
                <li>Live weekend Online Classes + Lifetime recorded videos</li>
                <li>Instant Doubt clearing sessions with Mentors</li>
                <li>Globally recognised certification</li>
              </ul>
            </div>
            <div className="highlights_content_text_right">
              <ul>
                <li>Work on real-life Industry Projects</li>
                <li>100% Job Placement Support & 50+ Interviews Guaranteed</li>
                <li>EMI options available with a 7-day Refund Policy</li>
              </ul>
            </div>
          </div>
          <button>Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
