import React from "react";
import { Sidebar, Navbar } from "../../components";
import "./chat.scss";

const Chat = () => {
  return (
    <div className="chat">
      <Sidebar />
      <div className="chat-container">
        <Navbar />
        Chat
      </div>
    </div>
  );
};

export default Chat;
