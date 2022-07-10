import React from "react";

import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import { react, merge, brands, nodes } from "../../assets";
import "./totalearnings.scss";

const TotalEarnings = () => {
  return (
    <div className="totalearnings">
      <div className="title">
        <p>Total Earnings</p>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="gains">
        <h1>₱589,298</h1>
        <ArrowDropUpOutlinedIcon className="icon" />
        <p>10%</p>
      </div>
      <span>Compared to ₱239,998 last year</span>
      <div className="lists">
        <div className="list">
          <div className="left">
            <img src={react} alt="" />
            <div className="item">
              <p>React</p>
              <span>ReactJS Projects</span>
            </div>
          </div>
          <div className="right">
            <p>₱589,298</p>
            <div className="outerbar-one">
              <div className="innerbar-one"></div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="left">
            <img src={merge} alt="" />
            <div className="item">
              <p>Git</p>
              <span>Git Projects</span>
            </div>
          </div>
          <div className="right">
            <p>₱429,278</p>
            <div className="outerbar-two">
              <div className="innerbar-two"></div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="left">
            <img src={brands} alt="" />
            <div className="item">
              <p>Vue</p>
              <span>Vue Projects</span>
            </div>
          </div>
          <div className="right">
            <p>₱376,768</p>
            <div className="outerbar-three">
              <div className="innerbar-three"></div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="left">
            <img src={nodes} alt="" />
            <div className="item">
              <p>Nodes</p>
              <span>Nodes Projects</span>
            </div>
          </div>
          <div className="right">
            <p>₱243,956</p>
            <div className="outerbar-four">
              <div className="innerbar-four"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalEarnings;
