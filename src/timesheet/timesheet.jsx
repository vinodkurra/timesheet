import React, { useState } from 'react';
import './style.css';
import { Grid, DatePick } from '../components';
import { weekArray } from '../constants';
import moment from 'moment';
import {parseTime} from '../components/functions';
const Timesheet = () => {

    const [weekData, setWeekData] = useState([]);
    const [selectedWeekData, setSelectedWeekData] = useState([]);
    const [startDate, setStartDate] = useState(null);

    const handleChangeWeek = (date) => {
        setWeekData([]);
        setStartDate(date);

        let week = [];
        for (let i = 1; i <= 7; i++) {
            let first = date.getDate() - date.getDay() + i
            let day = new Date(date.setDate(first)).toISOString().slice(0, 10)
            week.push(new Date(day));
        }

        setSelectedWeekData(week);
        const data = weekArray.slice();
        setWeekData([...data]);
    }

    const handleChangeTime = (time, index, inputKey) => {
        const weeks = weekData.slice();
        weeks.map((each, i) => {
            if (index === i) {
                each[inputKey] = time;
            }
        });
        setWeekData([...weeks]);
    }

    const submitTimesheet = () => {
        const weeks = weekData.slice();
        let payload = weeks.map((each, i) => {
            let data = new Object();
            let regular =  parseTime(each.time_to) - parseTime(each.time_from);
            let overtime = parseTime(each.overtime_to) - parseTime(each.overtime_from);
            let total =  data.Regular + data.Overtime;

            data.Regular = regular && Math.floor(regular / 60) + ':' + Math.floor(regular - (Math.floor(regular / 60) * 60 ));
            data.Overtime = overtime && Math.floor(overtime / 60) + ':' + Math.floor(overtime - (Math.floor(overtime / 60) * 60 ));
            data.Total = total && Math.floor(total / 60) + ':' + Math.floor(total - (Math.floor(total / 60) * 60 ));

            let day = moment(selectedWeekData[i]).format('DD/MM/YYYY');

            let returndata = new Object();
                returndata[day] = data;
            return returndata ;
        })
        console.log("Final Payload to Send for API", payload);
    }


    return (
        <div className="timesheet-section">
            <div className="timesheet-date">
                <div>Select a Week</div>
                <div className="timesheet-inner">
                    <DatePick
                        selected={startDate}
                        onChange={date => handleChangeWeek(date)}
                        highlightDates={selectedWeekData}
                    />
                </div>
            </div>
            <div className="timesheet-grid">
                <Grid selected={startDate} weekArray={weekData} selectedWeekData={selectedWeekData} handleChangeTime={handleChangeTime} />
                <div className="timesheet-btngroup">
                    <button>Save as Draft</button>
                    <button type="button"  onClick={submitTimesheet}>Submit</button>
                </div>
            </div>
        </div>
    )
};

export default Timesheet;