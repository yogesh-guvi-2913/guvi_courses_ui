import React from "react";
import work1 from "../../assets/work1.svg";
import work2 from "../../assets/work2.svg";
import work3 from "../../assets/work3.svg";
import work4 from "../../assets/work4.svg";

import "./Work.css";

function Work() {
  return (
    <div className="work">
      <h1>Blockchain Projects that you will work</h1>
      <div className="work_content_list">
        <div className="work_content_list_item">
          <div className="work_content_list_item_img">
            <img src={work1} alt="work1" />
          </div>
          <div className="work_content_list_item_text">
            Decentralized Health Care Management
          </div>
        </div>
        <div className="work_content_list_item">
          <div className="work_content_list_item_img">
            <img src={work2} alt="work2" />
          </div>
          <div className="work_content_list_item_text">MiniTrade Club</div>
        </div>
        <div className="work_content_list_item">
          <div className="work_content_list_item_img">
            <img src={work3} alt="work3" />
          </div>
          <div className="work_content_list_item_text">
            Decentralized Voting System
          </div>
        </div>
        <div className="work_content_list_item">
          <div className="work_content_list_item_img">
            <img src={work4} alt="work4" />
          </div>
          <div className="work_content_list_item_text">Farm Chain</div>
        </div>
      </div>
    </div>
  );
}

export default Work;
