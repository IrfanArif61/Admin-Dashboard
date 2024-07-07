import React from "react";
import "./allusers.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import UsersDataTable from "../../components/userDataTable/UsersDataTable";
import { AllUsersRows } from "../../datatablesource";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    type: "string",
  },
  {
    field: "age",
    headerName: "Age",
    width: 120,
    type: "number",
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    type: "string",
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 170,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 180,
    type: "string",
  },
];

export const AllUsers = ({ title }) => {
  return (
    <div className="allusers">
      <Sidebar />
      <div className="allusersContainer">
        <Navbar title={title} />
        <div className="users">
          <UsersDataTable columns={columns} rows={AllUsersRows} />
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
