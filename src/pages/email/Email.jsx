import React from "react";
import { Sidebar, Navbar } from "../../components";
import "./email.scss";

const Email = () => {
  return (
    <div className="email">
      <Sidebar />
      <div className="email-container">
        <Navbar />
        Email Page
      </div>
    </div>
  );
};

export default Email;
