import React from 'react'
import { useReducer } from 'react';


 // create a initial state
  
 const initialState={
    items:['sree','kanth'],
    items1:[
        { id: 1, name: 'Reading' },
    { id: 2, name: 'Coding' },
    { id: 3, name: 'Exercising' }

    ]
 }


 function reducer(state,action){
    return state;
   
    }
 



export const Reducer = () => {
    const[state,dispatch]=useReducer(reducer,initialState);

   

  return (
    <div>
        <h2>
            Product List
        </h2>
        <ul>
            {state.items.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>


        <ul>
            {state.items1.map((item)=>(
                <li key={item.id}>
                    {item.name}

                </li>
            ))}
        </ul>
    
    </div>
  )
}
