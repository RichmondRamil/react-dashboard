import React from "react";
import { Sidebar, Navbar } from "../../components";
import "./kanban.scss";

const Kanban = () => {
  return (
    <div className="kanban">
      <Sidebar />
      <div className="kanban-container">
        <Navbar />
        Kanban
      </div>
    </div>
  );
};

export default Kanban;
