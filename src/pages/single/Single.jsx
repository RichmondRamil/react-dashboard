import React from "react";
import { Navbar, Sidebar } from "../../components";
import { useParams } from "react-router-dom";
import { userRows } from "../../data";
import { DonutChart } from "../../components";
import "./single.scss";

const Single = () => {
  const params = useParams();
  const users = userRows.find((x) => x.id === parseInt(params.id));
  console.log(users.id);
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="user-card">
          <div className="status">
            <h1>Username: {users.username}</h1>
            <p>
              Status: <span className={users.status}>{users.status}</span>
            </p>
          </div>
          <div className="user-container">
            <div className="left">
              <img src={users.img} alt="" />
              <h3>{users.fullName}</h3>
              <p>Email: {users.email}</p>
              <p>Age: {users.age}</p>
            </div>
            <div className="right">
              <DonutChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
