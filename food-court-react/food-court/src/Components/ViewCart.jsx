import React, { useEffect, useState } from 'react'
import "./Cart.css";
import { useContext } from 'react';
import { cartContext } from '../App';


export const ViewCart = () => {

    const{cart}=useContext(cartContext)
    const[total,setTotal]=useState(0);
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))

    },[cart]);
  return (
    <>
    <h1 className="cart-heading">CART PRODUCTS</h1>
    <div className="cart-container">
        {/* <div className="cart-product">
            <div className="img">
                <img src="" alt="" />

            </div>
            <div className="cart-product-details">
                <h3>Product Name</h3>
                <p>Price Rs:45</p>

            </div>

        </div> */}
        { cart.map((product)=>(
            <div className="cart-product" key={product.id}>
            <div className="img">
                <img src={product.pic} alt="" />

            </div>
            <div className="cart-product-details">
                <h3>{product.name}</h3>
                <p>Price Rs:{product.amt}</p>

            </div>

        </div>

        ))

        }
       
        
    </div>
    <h1 className="cart-amt">Total Amount Rs:{total} </h1>
   </>
    
  )
}
