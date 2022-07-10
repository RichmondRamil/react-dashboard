import React from "react";
import SsidChartOutlinedIcon from "@mui/icons-material/SsidChartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhonelinkOutlinedIcon from "@mui/icons-material/PhonelinkOutlined";
import "./statistic.scss";
const Statistic = () => {
  return (
    <div className="statistic">
      <div className="statistic-container">
        <div className="title">
          <h3>Statistics</h3>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <p>Total 59.8% Growth this month</p>
        <div className="items">
          <div className="item">
            <SsidChartOutlinedIcon className="icon chart" />
            <div className="item-content">
              <p>Sales</p>
              <h4>245k</h4>
            </div>
          </div>
          <div className="item">
            <PersonOutlineOutlinedIcon className="icon customer" />
            <div className="item-content">
              <p>Customers</p>
              <h4>45k</h4>
            </div>
          </div>
          <div className="item">
            <PhonelinkOutlinedIcon className="icon product" />
            <div className="item-content">
              <p>Products</p>
              <h4>12.4k</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
