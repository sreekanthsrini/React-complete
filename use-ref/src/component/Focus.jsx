import React from 'react'
import { useRef } from 'react'

export const Focus = () => {
  const inputref1=useRef(null)
  const inputref2=useRef(null)
  const inputref3=useRef(null)
  function handle1(){
    inputref1.current.focus();
    inputref1.current.style.backgroundColor="gray"
     inputref2.current.style.backgroundColor=" "
      inputref3.current.style.backgroundColor=" "

  }
  function handle2(){
    inputref2.current.focus();
    inputref2.current.style.backgroundColor="gray"
     inputref1.current.style.backgroundColor=""
      inputref3.current.style.backgroundColor=""
  }
  function handle3(){
    inputref3.current.focus();
    inputref3.current.style.backgroundColor="gray"
     inputref2.current.style.backgroundColor=""
      inputref1.current.style.backgroundColor=""
  }
  return (
    <div>
     
     <input type="text" ref={inputref1} />
      <button onClick={handle1}>Click</button>
      <br />
      <input type="text" ref={inputref2} />
      <button onClick={handle2}>Click</button>
      <br />
      <input type="text" ref={inputref3} />
      <button onClick={handle3}>Click</button>
      <br />
    </div>
  )
}
