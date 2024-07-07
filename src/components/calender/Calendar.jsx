import React from "react";
import "./calendar.scss";

const generateCalendarData = () => {
  const currentDate = new Date();
  const numberOfDays = 11;
  const calendarData = [];

  for (let i = 0; i < numberOfDays; i++) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + i);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    calendarData.push({ date: day, month: month });
  }

  return calendarData;
};

const Calendar = () => {
  const calendarData = generateCalendarData();

  return (
    <div className="containers">
      {calendarData.map((data, index) => (
        <div className="cal-container" key={index}>
          <div className="calen">
            <span className="date">{data.date}</span>
          </div>
          <div className="month">
            <span className="mon">{data.month}</span>
          </div>
          <div className="dot"></div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
