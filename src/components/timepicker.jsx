import React from "react";
import TimePicker from 'react-time-picker';

const Timer = ({onChange, selected, key}) =>{
     return(
            <div>
            <TimePicker
              onChange={onChange}
              key={key}  
              value={selected}
            />
          </div>
    )
}
export default Timer;