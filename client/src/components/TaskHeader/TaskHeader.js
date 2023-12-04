import React from 'react'
import weatherLogo from "../../assets/weatherLogo.svg";
import shiftLogo from "../../assets/shiftLogo.svg";

const ShiftHeader = () => {
 
  var today = new Date(),
    date = today.getDate() + " " + today.toLocaleString('default', { month: 'long' }) +   " " + today.getFullYear(),
    
    currTime =   today.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })


  return (
    <div className="shiftHeaderMain">
      <div className="shiftHeaderDiv1">
        <img src={weatherLogo}/>
        <p>Partly Cloudy</p>
      </div>
      <div className="shiftHeaderDiv2">
        <p>{date}</p>
        <h3>Today</h3>
      </div>
      
      <div className="shiftHeaderDiv3">
       <p>Present-on time</p>
      </div>
      
      <div className="shiftHeaderDiv4">
        <p>Entry Time</p>
        <h3>{currTime}</h3>
      </div>
      <img className="shiftLogo" src={shiftLogo}/>
    </div>
  )
}
  

export default ShiftHeader