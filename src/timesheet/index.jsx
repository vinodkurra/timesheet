import React from 'react';
import './style.css';

/* 
    Design Component of Time sheet page
*/
 class Timesheet extends React.Component{

     render(){
         return(
            <div className="timesheet-section"> 
            <div className="timesheet-date">
                <div className="timesheet-inner">

                </div>
            </div>
            <div className="timesheet-grid">
                <div className="timesheet-grid-row">
                    <div className="timesheet-grid-column">
                        <lable>Sunday</lable>
                    </div>
                    <div className="timesheet-grid-column">
                        <input type="text"/>
                    </div>
                    <div className="timesheet-grid-column">
                        <input type="text"/>
                    </div>
                    <div className="timesheet-grid-column">
                        <input type="text"/>
                    </div>
                    <div className="timesheet-grid-column">
                        <input type="text"/>
                    </div>
                    <div className="timesheet-grid-column">
                        <input type="text"/>
                    </div>
                </div>
                <div className="timesheet-btngroup">
                    <button>Save as Draft</button>
                    <button type="button">Submit</button>
                </div>
            </div>
        </div>
         )
     }
 };

export default Timesheet;
