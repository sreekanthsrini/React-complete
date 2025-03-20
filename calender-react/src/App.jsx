import { useState } from 'react'
import './App.css'
import left-arrow from "./assets/left-arrow.svg";

const daysOfWeek=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const monts=["january","February","March","April","May","June","July","August","september","October","November","December"];

function App() {
  const[selectedDate,setSelectedDate]=useState(new Date());
  const daysInMonth=()=>{
    

    const daysArray=[];
    const firstDay=newDate(selectedDate.getFullYear(),selectedDate.getMonth(),1);
    const lastDay=new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,0);
    return daysArray;
  };

  return (
    <>
    <div className="calender">
      <div className="header">
        <button>
          <img src={left-arrow.svg} alt="" />

        </button>
        <select name="" id="">

        </select>
        <select name="" id="">

        </select>

        <button>
          <img src={right-arrow} alt="" />

        </button>

      </div>

      <div className="daysOfWeek">

      </div>

    </div>
    </>
    
  )
}

export default App
