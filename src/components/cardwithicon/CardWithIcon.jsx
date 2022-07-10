import React from "react";

import "./cardwithicon.scss";

const CardWithIcon = ({
  title,
  icon,
  description,
  total,
  percent,
  classPercent,
  btmdesc,
}) => {
  return (
    <div className="cardwithicon">
      <div className="cardwithicon-container">
        <div className="title">
          <h3>{title}</h3>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        {icon}
        <p>{description}</p>
        <div className="total-percent">
          <h3>{total}</h3>
          <p className={classPercent}>{percent}</p>
        </div>
        <p>{btmdesc}</p>
      </div>
    </div>
  );
};

export default CardWithIcon;
