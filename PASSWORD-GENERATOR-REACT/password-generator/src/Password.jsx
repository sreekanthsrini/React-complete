import React, { useState } from 'react'

export const Password = () => {
    const[length,setLength]=useState(8);
    const [includeuppercase,setIncludeUppercase]=useState(true);
    const [includelowercase,setIncludeLowercase]=useState(true);
    const [includenumbers,setIncludeNumbers]=useState(true);
    const[includeSymbols,setIncludeSymbols]=useState(true);
    const [password,setPassword]=useState("");
    const generatepassword=()=>{
        // create a local variable for charset
        let charset="";
        if(includeuppercase) charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includelowercase) charset+="abcdefghijklmnopqrstuvwxyz";
        if(includeSymbols) charset+="!@#$%^&*()_-+=";
        if(includenumbers) charset+="0123456789";
        // console.log(charset);

        let generatedPassword="";
        for(let i=0;i<length;i++){

            // to get only required length


            const randomIndex=Math.floor(Math.random()*charset.length)
            generatedPassword+=charset[randomIndex];
            
        }
        setPassword(generatedPassword);

    }
    

    const copyToClipboard=()=>{
        navigator.clipboard.writeText(password);
        alert("Password Copied");
    }

    
  return (
    <div className="password-generator">
        <h2>STRONG PASSWORD GENERATOR</h2>
        <div className="input-group">
            <label htmlFor="num">Password length</label>
            <input type="number" id="num" value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
            <div className="check-group">
                <input type="checkbox" id="upper" checked={includeuppercase} onChange={(e)=>setIncludeUppercase(e.target.checked)}  />
                <label htmlFor="upper"> Include Uppercase</label>

            </div>

            <div className="check-group">
                <input type="checkbox" id="lower" checked={includelowercase} onChange={(e)=>setIncludeLowercase(e.target.checked)} />
                <label htmlFor="lower"> Include lowercase</label>

            </div>

            <div className="check-group">
                <input type="checkbox" id="numbers" checked={includenumbers} onChange={(e)=>setIncludeNumbers(e.target.checked)} />
                <label htmlFor="numbers"> Include Numbers</label>

            </div>

            <div className="check-group">
                <input type="checkbox" id="symbols" checked={includeSymbols} onChange={(e)=>setIncludeSymbols(e.target.checked)} />
                <label htmlFor="symbols"> Include Symbols</label>

            </div>


            <button className="generate-btn" onClick={generatepassword}> GENERATE PASSWORD</button>


            <div className="generate-password">
                <input type="text" readOnly value={password} />
                <button className="copy-btn" onClick={copyToClipboard}>Copy</button>


            </div>
            


           

        </div>
    </div>
  )
}
