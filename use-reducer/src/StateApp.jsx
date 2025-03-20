import React, { useState } from 'react'

export const StateApp = () => {
    const[items,setItems]=useState(['sree','kanth']);
    const[items1,setItems1]=useState([{ id: 1, name: 'Reading' },
        { id: 2, name: 'Coding' },
        { id: 3, name: 'Exercising' }]);


  return (
    <div>
        <h2>Product List</h2>
        <ul>

            {items.map((item)=> (
            <li key={item}>
                {item}

            </li>))}


        </ul>

        <ul>
            {items1.map((items1)=>(
                <li key={items1.id}>
                    {items1.name}

                </li>

            ))}
        </ul>
    </div>
  )
}
