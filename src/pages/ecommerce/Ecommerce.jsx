import React from "react";
import { Sidebar, Navbar } from "../../components";
import "./ecommerce.scss";

const Ecommerce = () => {
  return (
    <div className="ecommerce">
      <Sidebar />
      <div className="ecommerce-container">
        <Navbar />
        Ecommerce
      </div>
    </div>
  );
};

export default Ecommerce;
