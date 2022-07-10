import React, { useState } from "react";

import { userColumns, userRows } from "../../data";
import { Sidebar, Navbar, DataTable, Form } from "../../components";
import { useNavigate } from "react-router-dom";

import "./users.scss";

const Users = () => {
  const [users, setUsers] = useState(userRows);
  const [query, setQuery] = useState("");

  const [overlay, setOverlay] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleAddUser = () => {
    setOverlay("overlay");
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    setOverlay("");
  };

  const [file, setFile] = useState("");
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const [addFormData, setAddFormData] = useState({
    username: "",
    img: "",
    fullName: "",
    email: "",
    age: "",
    status: "pending",
  });

  const onFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setOverlay("");
    const generateNewUserId = (users) => {
      return users[users.length - 1].id + 1;
    };
    const newUser = {
      id: generateNewUserId(users),
      username: addFormData.username,
      img: file
        ? URL.createObjectURL(file)
        : "https://yt3.ggpht.com/CblhnSj8-Q6Ptr6n8Nq1e3wB4gadeNM_IYjDma89iNfuTrAfsMwogvkPFb6JbG8XS-fdBnN5Plk=s88-c-k-c0x00ffffff-no-rj-mo",
      fullName: addFormData.fullName,
      email: addFormData.email,
      age: addFormData.age,
      status: addFormData.status,
    };

    const newUsers = [...users, newUser];
    setUsers(newUsers);
    console.log(newUsers);
  };

  const search = (data) => {
    return data.filter(
      (item) =>
        item.username.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query) ||
        item.fullName.toLowerCase().includes(query) ||
        item.id.toString().includes(query) ||
        item.email.toString().includes(query) ||
        item.age.toString().includes(query)
    );
  };

  const navigate = useNavigate();
  const viewHandle = (row) => {
    navigate(`/users/${row.id}`);
    console.log(row);
  };
  const deleteHandle = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };
  return (
    <div className="user">
      <Sidebar />
      <div className="user-container">
        <Navbar />

        <DataTable
          userRows={search(users)}
          userColumns={userColumns}
          onChange={(e) => setQuery(e.target.value)}
          viewHandle={viewHandle}
          deleteHandle={deleteHandle}
          addUser={handleAddUser}
          button="Add User"
        />
        <Form
          open={isOpen}
          onClose={onClose}
          onSubmit={onSubmit}
          onFormChange={onFormChange}
          onFileChange={onFileChange}
        />
      </div>
      <div className={overlay}></div>
    </div>
  );
};

export default Users;
