import React from "react";
import "./allservicesdatatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

const AllUsersDataTable = ({ columns, rows }) => {
  const reviewColumn = {
    field: "viewreviews",
    headerName: "Reviews",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="reviews">
          <Link to="/allservices/reviews">
            <div className="view">
              <RateReviewOutlinedIcon />
            </div>
          </Link>
        </div>
      );
    },
  };
  return (
    <div className="dataTable">
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          className="dataGrid"
          rows={rows}
          columns={columns.concat(reviewColumn)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </Box>
    </div>
  );
};

export default AllUsersDataTable;
