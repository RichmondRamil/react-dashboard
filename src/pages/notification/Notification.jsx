import React from "react";
import { Sidebar, Navbar } from "../../components";
import "./notification.scss";

const Notification = () => {
  return (
    <div className="notification">
      <Sidebar />
      <div className="notification-container">
        <Navbar />
        Notification
      </div>
    </div>
  );
};

export default Notification;
