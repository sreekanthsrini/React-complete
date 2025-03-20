import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {

  // apply use states'
  const[amount,setAmount]=useState(1);
  const[fromCurrency,setFromCurrency]=useState("USD");
  const[toCurrency,setToCurrency]=useState("INR");
  const[convrtamt,setConvertAmt]=useState(null);
  const[exchangerate,setExchangeRate]=useState(null);
  useEffect(()=>{
    const getExchangeRate=async()=>{
      try{
        let url=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response=await axios.get(url);
        setExchangeRate(response.data.rates[toCurrency]);
        // console.log(response);

      } catch(error){
        console.error("Error fetching exchange rate:",error);
      }

       
    };
    getExchangeRate();
    
  },[fromCurrency,toCurrency]);


  useEffect(()=>{
    if(exchangerate!==null){
      setConvertAmt((amount*exchangerate.toFixed(2)));
    }

  },[amount,exchangerate]);





  const handleAmtChange=(e)=> {
    const value=parseFloat(e.target.value);
    setAmount(isNaN(value)? 0:value);

    
  };

  const handleFromCurencyChange=(e)=>{
    setFromCurrency(e.target.value);
  };
  const handleToCurencyChange=(e)=>{
    setToCurrency(e.target.value);
  };
  





  return (
    <>
     <div className="currencey-converter">
      <div className="box"></div>
      <div className="data">
        <h1>Currency Converter</h1>
        <div className="input-container">
          <label htmlFor="amt">Amount:</label>
          <input type="number" id="amt" value={amount} onChange={handleAmtChange}/>

        </div>

        <div className="input-container">
          <label htmlFor="fromCurrency"> From Currency:</label>
          <select  id="fromCurrency" value={fromCurrency} onChange={handleFromCurencyChange}>
            <option value="USD">USD-United states Dollar</option>
            <option value="EUR">EUR-Euro</option>
            <option value="GBP">GBP-British Pound</option>
            <option value="JPY">JPY-Jpanese yen</option>
            <option value="AUD">AUD-Austrailian Dollar</option>
            <option value="CAD">CAD-Canadian Dollar</option>
            <option value="CNY">CNY-Chinese Yuan</option>
            <option value="INR">INR-Indian Rupee</option>
            <option value="BRL">BRL-Brazilian Real</option>
            <option value="ZAR">ZAR-south african rand</option>
          </select>
        </div>


        

        <div className="input-container">
          <label htmlFor="toCurrency">  
            TO Currency:</label>
          <select  id="toCurrency" value={toCurrency} onChange={handleToCurencyChange}>
            <option value="USD">USD-United states Dollar</option>
            <option value="EUR">EUR-Euro</option>
            <option value="GBP">GBP-British Pound</option>
            <option value="JPY">JPY-Jpanese yen</option>
            <option value="AUD">AUD-Austrailian Dollar</option>
            <option value="CAD">CAD-Canadian Dollar</option>
            <option value="CNY">CNY-Chinese Yuan</option>
            <option value="INR">INR-Indian Rupee</option>
            <option value="BRL">BRL-Brazilian Real</option>
            <option value="ZAR">ZAR-south african rand</option>
          </select>
        </div>

        <div className="result">
          <p>{amount} {fromCurrency} is equal to {convrtamt} {toCurrency} </p>
        </div>

      </div>
     </div>
    </>
  )
}

export default App
