import React from "react";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Total: 77 },
  { name: "Feb", Total: 34 },
  { name: "Mar", Total: 99 },
  { name: "Apr", Total: 110 },
  { name: "May", Total: 55 },
  { name: "Jun", Total: 178 },
  { name: "Jul", Total: 66 },
  { name: "Aug", Total: 88 },
  { name: "Sep", Total: 119 },
  { name: "Oct", Total: 150 },
  { name: "Nov", Total: 157 },
  { name: "Dec", Total: 165 },
];

const Chart = () => {
  return (
    <div className="char">
      <div className="title">Appointments Flow</div>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" className="chartGrid" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
