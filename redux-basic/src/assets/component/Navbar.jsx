import React from 'react'
import "./Navbar.css";

import { Link, useNavigate } from 'react-router-dom'
// using nagivate hook to nagivate between the web page



export const Navbar = () => {
  const navigate=useNavigate();
  return (
    <nav>
        <h1>
            Connections
        </h1>
        <ul>
        {/* // using nagivate hook to nagivate between the web page */}
          <li onClick={()=>navigate("/user")}>User </li>
           <Link to="/Homes">Home</Link>
           {/* <Link to="/user">User</Link> */}
           <Link to="/Aboutss">About</Link>
           <Link to="/contact">Contact</Link>
        </ul>
    </nav>
  )
}
