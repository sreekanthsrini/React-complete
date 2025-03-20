import {useState} from 'react'
import "./AdviceApp.css";


export const AdviceApp = () => {
    const [advice,setadvice]=useState("focus on code")
    // to know about the no of count of getting api request
    const [count,setCount]=useState(0);
    

    async function click() {
        const response=await fetch("https://api.adviceslip.com/advice");


        
        

        // console.log(response)
        const data=await response.json();
        // console.log(data)
        setadvice(data.slip.advice);
        setCount((c)=>c+1);
        
    }
  return (
    
    


     

       

   
    
    <div>
        <h1>Advice App</h1>
       

        <h2>
            {advice}
        </h2>
        <button onClick={click}>Get Advice</button>
        <p> you have read <b>{count}</b></p>
    </div>
   
  )
}


