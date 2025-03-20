import {useState} from 'react'
import "./States2.css";

export const States2 = () => {


  // starting default decleration
  const[user,setuser]=useState({
    name:"sreekanth",
    age:23,
    gender:"male",
    isMarried:true,
    country:"USA",
  });


  function changeHandler(e){
    const name=e.target.name;
    // console.log(name)

    // the use state for handle and take the input of user from check box. 
    const value=e.target.type=="checkbox"? e.target.checked:e.target.value;
    setuser({...user,[name]:value})



  }

  return <>
  {/* <h1> this is use state concept</h1> */}



  <table>
    <tbody>
      <tr>
        <td>Name</td>
        <td>{user.name}</td>
      </tr>



      <tr>
        <td>Age</td>
        <td>{user.age}</td>
      </tr>




      <tr>
        <td>gender</td>
        <td>{user.gender}</td>
      </tr>


      <tr>
        <td>Marital Status</td>
        <td>{user.isMarried? "Married":"not Married"}</td>
      </tr>


      <tr>
        <td>Country</td>
        <td>{user.country}</td>
      </tr>





    </tbody>
  </table>
   


   <form action="">

    <input type="text" placeholder='fullname' value={user.name} onChange={changeHandler} name="name" />
    <input type="number" name="age" id="" placeholder='age'value={user.age} onChange={changeHandler} />
    <div className="gender">
      <label htmlFor="male">
        <input type="radio" name="gender" id="male"checked={user.gender=="Male"} value="Male"onChange={changeHandler}   />
        Male
      </label>

      <label htmlFor="female" >
        <input type="radio" name="gender" id="female" checked={user.gender=="Female"} value="Female" onChange={changeHandler} />
        Female
      </label>
    </div>
    <label htmlFor="isMarried"
    ><input type="checkbox" id="isMarried" checked={user.isMarried} onChange={changeHandler} name="isMarried" />
    Is Married</label>


    <input type="text" placeholder="country" value={user.country} onChange={changeHandler} name="country" />
    
   </form>



  </>
 
}
