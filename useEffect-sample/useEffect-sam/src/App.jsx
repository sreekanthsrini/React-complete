import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const[count,setCount]=useState(0);
  // for dependency check
  const[time,setTime]=useState(0);  
  function clickdec(){
setCount(count-1);


  }
  function click(){
    setCount(count+1);
  }

  // synatax for useeffect
  // useEffect(()=>{
  // 1.the code that we want to run
  // 3.optional return function
    // code
  // },[2.dependency array]);

  // useEffect(()=>{
  //   console.log("i am no dependency")
  // });


  // how it work in dependency array
  // []--- dependency array

  function clicktime(){
    setTime(time+2);
  }


  // useEffect(()=>{
  //   console.log("i an dependency work on specific depedency of user define")
  // },[count,time]);
  // based on depency passing it is working




// it will work in all the type of event execution in web page
  // useEffect(()=>{
  //   console.log("return function heading");
  //   return()=>console.log("the working of return function rerender");
  // })
  


  // if we use empty in the return


  // it will exexute only at refresh of the page

  // 
  

  // return function with required dependency


  // useEffect(()=>{
  //   console.log("this is  return function with required dependency");
  //   return()=>console.log("something functionar action to be here");
  // },[count]);



  // useEffect(()=>{
  //   const random=Math.floor(Math.random()*1000);
  //   // to specific a required time function
  //   setInterval(()=>{
  //     console.log(`${random}-rerender`);
  //   },1000)

  // })


  // useEffect(()=>{
  //   const random=Math.floor(Math.random()*1000);
  //   console.log(random);

  // })




  useEffect(()=>{
    const random=Math.floor(Math.random()*1000);
    console.log(random);

  },[time])



  



  return (
    <>
     <div>
      Count:{count}
      Times:{time}
     </div>
     <button onClick={clickdec}>-</button>
     <button onClick={click}>+</button>
     <button onClick={clicktime}>Time adjusment</button>
        
    </>
  )
}

export default App
