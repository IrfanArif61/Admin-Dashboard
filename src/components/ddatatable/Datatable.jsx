import React from "react";
import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Datatable = ({ slug, userColumns, userRows, setOpen }) => {
  const handleDelete = (id) => {
    //axios.delete(`/api/${slug}/id)
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to={`/${slug}/${params.row.id}`}> */}
            <div
              className="viewButton"
              onClick={() => {
                setOpen(true);
              }}
            >
              View
            </div>
            {/* </Link> */}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable" style={{ height: 630, width: "97%" }}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default Datatable;
