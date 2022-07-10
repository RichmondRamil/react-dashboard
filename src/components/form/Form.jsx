import React from "react";
import "./form.scss";

const Form = ({ open, onClose, onSubmit, onFormChange, onFileChange }) => {
  if (!open) return null;

  return (
    <div className="form">
      <div className="form-container">
        <div className="headings">
          <h1>Add Users</h1>
          <p onClick={onClose}>x</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="input">
            <label htmlFor="img">Avatar Profile</label>
            <input
              type="file"
              placeholder="User Profile"
              name="img"
              id="img"
              required
              onChange={onFileChange}
            />
          </div>
          <div className="input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              required
              onChange={onFormChange}
            />
          </div>
          <div className="input">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              placeholder="Fullname"
              name="fullName"
              id="fullame"
              required
              onChange={onFormChange}
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              required
              onChange={onFormChange}
            />
          </div>
          <div className="input">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              placeholder="Age"
              name="age"
              id="age"
              required
              onChange={onFormChange}
            />
          </div>
          <div className="buttons">
            <button className="submit">Submit</button>
            <button className="cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
