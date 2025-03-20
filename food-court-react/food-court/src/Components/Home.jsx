import React, { useState } from 'react'
// import for json file
// import { data } from  "../assets/products.json";
import data from "../assets/products.json";
import { Product } from './Product';
import "./Home.css";




// export const Home = ({cart,setCart}) => {
    export const Home = () => {
    const [products]=useState(data);
  return (
    <div className="product-container">

        {/* map all the products and fetch the each nd every product based on using map function */}
        {products.map((product)=> (
            // <div key={product.id}>
            //     <h3>
            //         {product.name}

            //     </h3>
            // </div>
            // <Product key={product.id} product={product} 
            // cart={cart} setCart={setCart}/>
            <Product key={product.id} product={product} 
            />


  ))
        }
       
    </div>
  )
}
