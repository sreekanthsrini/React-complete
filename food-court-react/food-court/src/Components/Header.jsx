import React from 'react'
import {Link} from "react-router-dom";
import  "./Header.css";

export const Header = ({cart}) => {
  return (
    <div className="navbar">
        <div className="logo">Food Cart</div>
        <ul>
            <li>
                {/* instead of a tag from router-dom package weareusing link tag */}
                <Link to={"/"}>Home Page</Link>
            </li>
        </ul>

        <ul>
            <li>
                <Link to={"/Cart"}> 
                <span className="cart-count">
                    {cart.length}
                    </span>View Cart</Link>
            </li>
        </ul>




    </div>
  )
}
