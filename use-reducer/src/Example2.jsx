import React from 'react'
import { useReducer } from 'react';
// initial state
 const initialState=[];


 function itemReducer(state,action){
    switch(action.type){
        case 'ADD_ITEM':
            return[...state,{id:Date.now(),name:action.payload}];
        case 'DELETE_ITEM':
                return state.filter((item)=>item.id!==action.payload);

        case 'UPDATE_ITEM':
            // return state.map((item)=>item.id===action.payload.id?{...item,name:action.payload.name} :item);
            return state.map((item) =>
                item.id === action.payload.id ? { ...item, name: action.payload.name } : item
              );
    }
 }

export const Example2 = () => {
    const[items,dispatch]=useReducer(itemReducer,initialState);
    function additem(itemName){
        dispatch({type:'ADD_ITEM',payload:itemName});
    }
    function updateItem(id,itemName){
        dispatch({type:'UPDATE_ITEM',payload:{id,name:itemName}});
    }
    function deleteItem(id) {
        dispatch({ type: 'DELETE_ITEM', payload: id });
      }

  return (
    <div>
        <h1> Produt List</h1>
        <button onClick={()=>additem(prompt('Enter the item '))}>Add</button>

        <ul>
            {items.map((item)=>(
                <li key={item.id}> 
                    {item.name}
                    <button onClick={()=>updateItem(item.id,prompt('Enter the item',item.name))}>Update</button>
                    <button onClick={()=>deleteItem(item.id)}>Delete</button>
                </li>
            ))}

        </ul>
    </div>
  )
}
