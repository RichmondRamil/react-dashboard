import React from "react";
import { Sidebar, Navbar } from "../../components";
import "./calendar.scss";

const Calendar = () => {
  return (
    <div className="calendar">
      <Sidebar />
      <div className="calendar-container">
        <Navbar />
        Calendar
      </div>
    </div>
  );
};

export default Calendar;
