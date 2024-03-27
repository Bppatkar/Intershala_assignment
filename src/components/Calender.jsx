import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calender.css";

const Calender = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <label htmlFor="dateRange"></label>
      <DatePicker
        className="dateRange"
        id="dateRange"
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={handleDateChange}
        selectsRange
        dateFormat="dd/MM/yyyy"
        placeholderText="DD/MM/YYYY - DD/MM/YYYY"
      />
    </div>
  );
};

export default Calender;
