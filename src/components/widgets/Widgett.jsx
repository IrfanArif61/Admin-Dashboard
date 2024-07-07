import React from "react";
import widget from "./widget.scss";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Widgett = ({ type }) => {
  let data;
  switch (type) {
    case "users":
      data = {
        icon: (
          <GroupsOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
            }}
          />
        ),
        title: "105 Users",
        description: "Total Users",
      };
      break;
    case "appointment":
      data = {
        icon: (
          <AccessTimeIcon
            className="icon"
            style={{
              color: "goldenrod",
            }}
          />
        ),
        title: "10 Appointments",
        description: "Total Appointments",
      };
      break;
    case "history":
      data = {
        icon: (
          <SettingsBackupRestoreIcon
            className="icon"
            style={{
              color: "purple",
            }}
          />
        ),
        title: "3 Visits",
        description: "Total Visits",
      };
      break;
    case "workers":
      data = {
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{
              color: "green",
            }}
          />
        ),
        title: "15 Wokers",
        description: "Total Workers",
      };
      break;
    default:
      break;
  }
  return (
    <div className="card">
      <div className="info">
        {data.icon}
        <span className="title">{data.title}</span>
        <span className="description">{data.description}</span>
      </div>
    </div>
  );
};

export default Widgett;
