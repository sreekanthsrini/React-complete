import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const States = () => {
    let[number,setNumber]=useState(0)
    useEffect(()=>{
        console.log("hi");
        

    })
    function handle(){
        setNumber((n)=>n+1);
    }
  return (
    <div>
        <button onClick={handle}>Click Me UseState:</button> : <span>{number}</span>
    </div>
  )
}
