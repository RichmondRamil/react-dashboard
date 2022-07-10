import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import "./datatable.scss";

const DataTable = ({
  userRows,
  userColumns,
  onChange,
  viewHandle,
  deleteHandle,
  addUser,
  button,
}) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">
              <RemoveRedEyeIcon
                className="view"
                onClick={() => viewHandle(params.row)}
              />
            </div>
            <div className="deleteButton">
              <DeleteIcon
                className="delete"
                onClick={() => deleteHandle(params.row.id)}
              />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="toolbar">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            className="search"
            onChange={onChange}
          />
          <SearchIcon />
        </div>
        <button onClick={addUser}>{button}</button>
      </div>
      <DataGrid
        className="tableComponent"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
