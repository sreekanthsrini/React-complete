import { useState } from 'react'

import './App.css'

function App() {
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null);
  const [bmiStatus,setBmiStatus]=useState("");
  const[errorMessage,setErrorMessage]=useState("")

  // create a function for event handling
  const calculateBmi=()=>{

    // setup for validation
    const heightInMeters=/^\d+$/.test(height);
    const weightInMeters=/^\d+$/.test(weight);
    if(height&& weight){
      const heightInMeters=height/100;
      const bmivalue=weight/(heightInMeters*heightInMeters);
      setBmi(bmivalue.toFixed(2));

      if(bmivalue<18.5){
        setBmiStatus("UnderWeight");
      }
      else if(bmivalue>=18.5 && bmivalue<24.9){
        setBmiStatus("Normal weight");

      }
      else if(bmivalue>=25 && bmivalue<29.5){
        setBmiStatus("OverWeight");
      }
      else{
        setBmiStatus("Obse");
      }

      setErrorMessage("");


    }

    else{
      setBmi(null);
      setBmiStatus("");
      setErrorMessage(" Please enter a valid values for height and weight");



    }

  }
  function clearll(){
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
  }




  return (
    <>
      <div className="bmi-calculator"> 
        <div className="box"> </div>
        <div className="data">
          <h1>BMI CALCULATOR</h1>

          {/* for showing errrors for invalid message */}

          {errorMessage&&<p className="error">
            {errorMessage}
           

          </p>}
          <div className="input-container">
            <label htmlFor="height">Height (cm) </label>
            <input type="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)} />

          </div>


          <div className="input-container">
            <label htmlFor="weight">Weight(kg)</label>
            <input type="text" value={weight} id="height" onChange={(e)=>setWeight(e.target.value)} />

          </div>

          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearll} className="btn2"> Clear</button>
          {bmi!==null &&(<div className="result">
            <p>Your BMI is : {bmi}</p>
            <p> Status:{bmiStatus}</p>
          </div>)}
          


        </div>
      </div>
    </>
  )
}

export default App