import React from "react";
import bcimg from "../../assets/developer.svg";
import "./BlockChain.css";

function BlockChain() {
  return (
    <div className="blockchain">
      <div className="bc_content">
        <h2>Become a Blockchain Developer with Our Blockchain course</h2>
        <p>
          GUVI’s Certified Blockchain developer course is a leading-edge
          Technological program introduced to make the fantastical possible and
          make one of the most spoken, the least understood topics graspable
          yet. It is a Live Online course from GUVI, an IIT-Madras incubated
          company. Instructed by the industry’s best Technical Experts &
          Founders(Ex-Paypal Employees), this program offers mentorship through
          Blockchain Experts and directs you to Fortune 500 companies. The
          vision is to make premium organisations discover the Right talent
          through GUVI’s Zen Class.
        </p>
      </div>
      <div className="bc_img">
        <img src={bcimg} alt="img" />
      </div>
    </div>
  );
}

export default BlockChain;
