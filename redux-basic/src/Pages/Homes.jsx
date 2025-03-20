import React, { useState } from 'react'
import { Navbar } from '../assets/component/Navbar'
import { useDispatch } from 'react-redux';
import { setUsers } from '../slices/Userslice';

export const Homes = () => {
  const dispatch=useDispatch()
  const [input,setInput]=useState({
    name:"",
    age:"",
    email:"",
    contct:"",

  });
  function handlechange(event){
    // console.log(event.target.value)
    const{name,value}=event.target;
    setInput((currInput)=>{
      return{
        ...currInput,
        [name]:value,
      }
    })

  }
  const addUser=(event)=>{
    event.preventDefault();
    dispatch(setUsers(input))


  }
  
  return (

    <div>
       {/* < Navbar/> */}
       <div>
        <form >
          <label htmlFor="" >Name</label>
          <br />
          <input name="name" type="text" value={input.name} onChange={handlechange} />
          <br />

          <label htmlFor="" >Age</label>
          <br />
          <input name="age" type="number" value={input.age} onChange={handlechange} />
          <br />


          <label htmlFor="">Email</label>
          <br />
          <input name="email" type="text" value={input.email} onChange={handlechange} />
          <br />

          <label htmlFor="">Contact</label>
          <br />
          <input name="contct" type="number" value={input.contct} onChange={handlechange} />
          <br />
          <button onClick={addUser}>submit</button>
       


        </form>
       </div>

    </div>
  


    
  )
}
