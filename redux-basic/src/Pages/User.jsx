import React from 'react'
import { Navbar } from '../assets/component/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../slices/Userslice'

export const User = () => {
  const users=useSelector((state)=>state. usersInfo.users)
  const dispatch=useDispatch();
  console.log(users)
  function deleteuserinfo(index){
    dispatch(deleteUser(index))
  }

  return (
    <div>
      {users?.map((user,index)=>{
        return(
          <div key={index}>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.email}</h1>
            <h1>{user.contct}</h1>
            <button onClick={()=>deleteuserinfo(index)}>Delete</button>
          </div>
        )
      })}

    
   {/* < Navbar/> */}
    
    </div>
  )
}
