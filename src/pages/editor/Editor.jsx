import React from "react";
import { Sidebar, Navbar } from "../../components";
import "./editor.scss";

const Editor = () => {
  return (
    <div className="editor">
      <Sidebar />
      <div className="editor-container">
        <Navbar />
        Editor
      </div>
    </div>
  );
};

export default Editor;
