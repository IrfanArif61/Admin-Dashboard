import React from "react";
import { useState } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ReorderIcon from "@mui/icons-material/Reorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
// import AssessmentIcon from "@mui/icons-material/Assessment";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import SettingsIcon from "@mui/icons-material/Settings";
// import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
// import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selectedSpan, setSelectedSpan] = useState(null);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleSpanClick = (index) => {
    setSelectedSpan(index);
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Saloon</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span
                onClick={() => handleSpanClick(0)}
                className={selectedSpan === 0 ? "selected" : ""}
              >
                {data[0]}
              </span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <CategoryOutlinedIcon className="icon" />
              <span
                onClick={() => handleSpanClick(1)}
                className={selectedSpan === 1 ? "selected" : ""}
              >
                {data[1]}
              </span>
            </li>
          </Link>

          <Link to="/allusers" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span
                onClick={() => handleSpanClick(2)}
                className={selectedSpan === 2 ? "selected" : ""}
              >
                {data[2]}
              </span>
            </li>
          </Link>

          <Link to="/allservices" style={{ textDecoration: "none" }}>
            <li>
              <WorkspacesIcon className="icon" />
              <span
                onClick={() => handleSpanClick(3)}
                className={selectedSpan === 3 ? "selected" : ""}
              >
                {data[3]}
              </span>
            </li>
          </Link>

          <Link to="/allservices/new" style={{ textDecoration: "none" }}>
            <li>
              <ReorderIcon className="icon" />
              <span
                onClick={() => handleSpanClick(4)}
                className={selectedSpan === 4 ? "selected" : ""}
              >
                {data[4]}
              </span>
            </li>
          </Link>

          <li>
            <LocalShippingIcon className="icon" />
            <span
              onClick={() => {
                handleSpanClick(5);
                // setOpen(true)
                handleLogoutClick();
              }}
              className={selectedSpan === 5 ? "selected" : ""}
            >
              {data[5]}
            </span>
          </li>

          {/* <p className="title">USEFUL</p>
          <li>
            <AssessmentIcon className="icon" />
            <span
              onClick={() => handleSpanClick(5)}
              className={selectedSpan === 5 ? "selected" : ""}
            >
              {data[5]}
            </span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon" />
            <span
              onClick={() => handleSpanClick(6)}
              className={selectedSpan === 6 ? "selected" : ""}
            >
              {data[6]}
            </span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span
              onClick={() => handleSpanClick(7)}
              className={selectedSpan === 7 ? "selected" : ""}
            >
              {data[7]}
            </span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span
              onClick={() => handleSpanClick(8)}
              className={selectedSpan === 8 ? "selected" : ""}
            >
              {data[8]}
            </span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span
              onClick={() => handleSpanClick(9)}
              className={selectedSpan === 9 ? "selected" : ""}
            >
              {data[9]}
            </span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxOutlinedIcon className="icon" />
            <span
              onClick={() => handleSpanClick(10)}
              className={selectedSpan === 10 ? "selected" : ""}
            >
              {data[10]}
            </span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span
              onClick={() => handleSpanClick(11)}
              className={selectedSpan === 11 ? "selected" : ""}
            >
              {data[11]}
            </span>
          </li> */}
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
      {isLogoutModalOpen && (
        <div className="logoutModal">
          <div className="addLogoutModal">
            <span className="close" onClick={() => setIsLogoutModalOpen(false)}>
              X
            </span>
            <form>
              <p className="title"> Log out of your account?</p>
              <button className="cancelBtn">Cancel</button>
              <button className="logoutBtn">Logout</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

const data = [
  "DashBoard",
  "Appointments",
  "Users",
  "Services",
  "Add Service",
  // "Delivery",
  // "Stats",
  // "Notification",
  // "SystemHealth",
  // "Logs",
  // "Settings",
  // "Profile",
  "Logout",
];
