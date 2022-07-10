import React from "react";
import { Sidebar, Navbar } from "../../components";
import "./settings.scss";

const Settings = () => {
  return (
    <div className="settings">
      <Sidebar />
      <div className="settings-container">
        <Navbar />
        Settings
      </div>
    </div>
  );
};

export default Settings;
