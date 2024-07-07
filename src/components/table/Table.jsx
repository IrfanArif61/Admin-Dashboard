import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableList = () => {
  const rows = [
    {
      Id: 124,
      Customer: "Zeeshan",
      Service: "Hair Cut",
      Date: "1 Jan",
      Time: "3pm",
      Amount: "Rs.1200",
      Status: "Approved",
    },
    {
      Id: 156,
      Customer: "Ali",
      Service: "Facial",
      Date: "2 Jan",
      Time: "1pm",
      Amount: "Rs.2000",
      Status: "Pending",
    },
    {
      Id: 116,
      Customer: "Awais",
      Service: "Hair Cut",
      Date: "4 Jan",
      Time: "2pm",
      Amount: "Rs.1200",
      Status: "Approved",
    },
    {
      Id: 144,
      Customer: "Hanan",
      Service: "Hair Color",
      Date: "1 Jan",
      Time: "5pm",
      Amount: "Rs.2500",
      Status: "Pending",
    },
    {
      Id: 110,
      Customer: "Adil",
      Service: "Hair Cut",
      Date: "1 Jan",
      Time: "12pm",
      Amount: "Rs.1200",
      Status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Id</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Service</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Time</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Id}>
              <TableCell>{row.Id} </TableCell>
              <TableCell className="tableCell">{row.Customer}</TableCell>
              <TableCell className="tableCell">{row.Service}</TableCell>
              <TableCell className="tableCell">{row.Date}</TableCell>
              <TableCell className="tableCell">{row.Time}</TableCell>
              <TableCell className="tableCell">{row.Amount}</TableCell>
              <TableCell className="tableCell">
                <button className={`status ${row.Status}`}>{row.Status}</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
