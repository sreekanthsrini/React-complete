import { useState ,useEffect} from 'react'

import './App.css'

function App() {
  const [currenttime,setCurrentTime]=useState(new Date());
  useEffect(()=>{
    const timer=setInterval(()=>{
      setCurrentTime(new Date());
    },1000);
    return()=>clearInterval(timer);

  },[]);


  // this is the function to fetch time from  new Date(). and convert into 12 hours from railway time

  const formateHour=(hour)=>{
    return hour === 0?12:hour>12?hour-12:hour;
  }

  const formatetimewithleadingzero=(num)=>{
    return num<10?`0${num}`:num;
  }
  const formateDate=(date)=>{
    const options={weekday:"long",year:"numeric",month:"long", day:"numeric"};
    return date.toLocaleDateString(undefined,options);
  };


  return (
    <>
      <div className="digital-clock">
        <h1>DIGITAL CLOCK</h1>
        <div className="time">{formatetimewithleadingzero(formateHour(currenttime.getHours()))}:
          {formatetimewithleadingzero(currenttime.getMinutes())}
          :{formatetimewithleadingzero(currenttime.getSeconds())}
          {currenttime.getHours()>=12?"PM":"AM"}
        </div>
        <div className="date">{formateDate(currenttime)} </div>
      </div>
    </>
  )
}

export default App
