import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';

const DatePick = ({onChange, highlightDates}) =>{
    
    return(
        <div className="timesheet-grid-column">
            <DatePicker
            isClearable
            onChange={onChange}
            highlightDates={highlightDates}
            inline />
        </div>
    )
}
export default DatePick;