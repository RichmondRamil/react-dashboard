import React from "react";

import "./cardicon.scss";

const CardIcon = ({
  title,
  subtitle,
  total,
  desc,
  color,
  percent,
  textClass,
  img,
  view,
}) => {
  return (
    <div className="card-icon">
      <div className="left">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <h4>
          {total}
          <span className={color}>{percent}</span>
        </h4>
        <p className={textClass}>{desc}</p>
        <button>{view}</button>
      </div>
      <div className="right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default CardIcon;
