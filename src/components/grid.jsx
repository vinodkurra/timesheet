import React from 'react';
import Timer from './timepicker';
import moment from 'moment';
import {parseTime} from '../components/functions';

 const Grid = ({weekArray, handleChangeTime, selected, selectedWeekData}) =>{
     const totalCounter = (each) =>{
         
        let regular =  parseTime(each.time_to) - parseTime(each.time_from);
        let overtime = parseTime(each.overtime_to) - parseTime(each.overtime_from);
        let total =  regular + overtime;

        regular = regular && Math.floor(regular / 60) + ':' + Math.floor(regular - (Math.floor(regular / 60) * 60 ));
        overtime = overtime && Math.floor(overtime / 60) + ':' + Math.floor(overtime - (Math.floor(overtime / 60) * 60 ));
        total = total && Math.floor(total / 60) + ':' + Math.floor(total - (Math.floor(total / 60) * 60 ));
       return total;
     }
     return(
        <>
        {selected && 
        <>
            {weekArray.map((each, i) => {
                return(
                    <div className="timesheet-grid-row" key={each.day}>
                    <div className="timesheet-grid-column">
                        <lable>{each.day} - {moment(selectedWeekData[i]).format('DD/MM/YYYY')}</lable>
                    </div>
                    <div className="timesheet-grid-column" >
                        {i === 0 && <lable>Time From</lable>}
                       <Timer  
                                    selected={each.time_from || null}
                                    onChange={time => handleChangeTime(time, i, 'time_from' )} />
                    </div>
                    <div className="timesheet-grid-column" >
                        {i === 0 && <lable>Time To</lable>}
                       <Timer  
                                    selected={each.time_to || null}
                                    onChange={time => handleChangeTime(time,  i, 'time_to')} />
                    </div>
                    <div className="timesheet-grid-column" >
                        {i === 0 && <lable>Overtime From</lable>}
                      <Timer  
                                    selected={each.overtime_from || null}
                                    onChange={time => handleChangeTime(time,  i, 'overtime_from')} />
                    </div>
                    <div className="timesheet-grid-column" >
                        {i === 0 && <lable>Overtime To</lable>}
                       <Timer  
                                    selected={each.overtime_to || null}
                                    onChange={time => handleChangeTime(time,  i, 'overtime_to')} />
                    </div>
                    <div className="timesheet-grid-column" >
                        {i === 0 && <lable>Total Hours</lable>}
                        <div>  <input type='text' value={totalCounter(each)} /></div>
                       
                       {/* <Timer  
                                    selected={totalCounter(each)}
                                    onChange={time => handleChangeTime(time, i, 'total_hours')} /> */}
                    </div>
                    </div>
                )
            })}
            </>
            }
        </>
    )
}

export default Grid;