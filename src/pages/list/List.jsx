import React, { useState } from "react";
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/ddatatable/Datatable";
import { userRows } from "../../datatablesource";
import ViewModal from "../../components/viewModal/ViewModal";

const userColumns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "username", headerName: "User", width: 230, type: "string" },
  { field: "age", headerName: "Age", width: 100 },
  { field: "email", headerName: "Email", width: 230, type: "string" },
  { field: "service", headerName: "Service", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    type: "string",
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

const List = ({ title }) => {
  const [open, setOpen] = useState(false);
  //   const [users, setUsers] = useState(userRows); // Store the user data

  //   const addUser = (newUser) => {
  //     const newId = Math.max(...users.map((user) => user.id)) + 1;
  //     const userWithId = { id: newId, ...newUser };
  //     setUsers([...users, userWithId]);
  //   };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar title={title} />
        <Datatable
          slug="users"
          userColumns={userColumns}
          userRows={userRows}
          setOpen={setOpen}
        />
        {open && (
          <ViewModal
            slug="user"
            userColumns={userColumns}
            userRows={userRows}
            setOpen={setOpen}
          />
          //userrows, columns and slug can be used later
        )}
      </div>
    </div>
  );
};

export default List;
