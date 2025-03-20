import React from 'react'
import "./Product.css"
import { useContext } from 'react'
import { cartContext } from '../App'




// get all the name from Home folder


export const Product = ({product}) => {

    const {cart,setCart}=useContext(cartContext);


    // this is the function to allow only 20 characters
    const name=product.name.length>21? product.name.substring(0,20)+"..": product.name
    const addCart=()=>{
        setCart([...cart,product])

    };

    const removeCart=()=>{
        setCart(cart.filter((c)=>c.id!==product.id));

    };




  return (
    <div className="product">

        <div className="img">
            <img src={product.pic} alt={product.name} />
        </div>
        
        <div className="details">
           <h3>{product.name}</h3>
           <p>Price Rs:{product.amt}</p>
           {/* conditional rendering */}
        {
            cart.includes(product)?<button className="btn-remove" onClick={removeCart}>Remove from Cart</button>:

            
                <button onClick={addCart}>Add to cart</button>

            
        }
        </div>
    </div>
  )
}
