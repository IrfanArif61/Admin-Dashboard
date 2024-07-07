import React from "react";
import "./allservices.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AllServicesDataTable from "../../components/allServicesDataTable/AllServicesDataTable";
import { rows } from "../../datatablesource";

const columns = [
  //   {
  //     field: "avatar",
  //     headerName: "Picture",
  //     width: 100,
  //     renderCell: (params) => {
  //       return (
  //         <img
  //           src={
  //             params.row.avatar ||
  //             "https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg"
  //           }
  //           alt=""
  //         />
  //       );
  //     },
  //   },
  {
    field: "servicename",
    headerName: "Service",
    type: "string",
    width: 150,
    editable: true,
  },
  {
    field: "servicecategory",
    headerName: "Category",
    width: 200,
    type: "string",
    editable: true,
  },
  {
    field: "rating",
    headerName: "Rating",
    type: "string",
    width: 110,
    editable: false,
  },
  {
    field: "description",
    headerName: "Description",
    type: "string",
    width: 700,
    height: 100,
    editable: true,
  },
];

const AllServices = ({ title }) => {
  return (
    <div className="allServices">
      <Sidebar />
      <div className="allServicesContainer">
        <Navbar title={title} />
        <div className="allSerices">
          <AllServicesDataTable columns={columns} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default AllServices;
