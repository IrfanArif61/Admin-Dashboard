import "./home.scss";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widgett from "../../components/widgets/Widgett";
import Chart from "../../components/chart/Chart";
import Calendar from "../../components/calender/Calendar";
import Table from "../../components/table/Table";

const Home = ({ title }) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar title={title} />

        <div className="container">
          <div className="card-container">
            <div className="card-row">
              <Widgett type="users" />
              <Widgett type="appointment" />
            </div>
            {/* <Chart /> */}
            <div className="card-row">
              <Widgett type="history" />
              <Widgett type="workers" />
            </div>
          </div>
          <div className="chart">
            <Chart />
          </div>
        </div>
        <div className="caland">
          <Calendar />
        </div>
        <div className="listContainer">
          <div className="listTitle">Customers Info</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
