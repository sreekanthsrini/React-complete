import React from 'react'
import { useReducer } from 'react';

// const initialState=["srer","kanth"];
const initialState=[];

// state==what is at present now
// action===describing the action to be performed
function var1(state,action){
    switch(action.type){
        case "ADD_TASK":
            console.log("Adding");
            return [...state,{id:state.length+1,name:action.tymmsg}];
        case "DELETE_TASK":
             return state.filter((task)=>task.id !==action.tymmsg);
        
        default:
            return state;
    }



}
function init(){
    const data=[...initialState,{id:1,name:"Reading"}];
    return data;
}

export const Redu = () => {

    // it will manage different state
    // const[state,dispatch]=useReducer(var1,initialState);
    // we also have the possible to use 3rd parameter for any functionalities
    // it is optional
    const[state,dispatch]=useReducer(var1,initialState,init);



    const handleChange=(e)=>{
        // console.log(e.target.value);
        if(e.key==="Enter"){
            dispatch({type:"ADD_TASK",tymmsg:e.target.value})
        }

    };
    // const deleteTask=(id)=>{
    //     dispatch({type:"DELETE_TASK",tymmsg:id})
    // }
  return (
    <>
  
    {/* // <div> Task List {state.length}</div> */}
    {/* <div> task list {initialState.length}</div> */}
    <label htmlFor="task"> Enter the Task</label>
    <input type="text" id="task" onKeyDown={(e)=>handleChange(e)} />
    <ul>
        {state.map((todo)=>(
            <li key={todo.id}>{todo.id}{todo.name}
            {/* <button onClick={()=>deleteTask(todo.id)}>Delete</button> */}
            {/* we can also handle the function like this also */}
            <button onClick={()=>dispatch({type:"DELETE_TASK",tymmsg:todo.id})}>Delete</button></li>
        ))}
    </ul>

    </>
  )
}
