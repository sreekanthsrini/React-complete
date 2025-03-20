import React, { useState } from 'react'


export const Example1 = () => {
    const[items,setItems]=useState([]);
    function addItem(itemName){
        setItems([...items,{id: Date.now(),name:itemName}]);
    }
    function deleteItem(id){
        setItems(items.filter((item)=>item.id!==id))
    }
    function updateItem(id,itemName){
        setItems(items.map((item)=>(item.id===id?{ ...item,name:itemName}:item)));
    }
  return (
    <div>
        <h2>
            Produuct List
        </h2>
        <button onClick={()=>{addItem(prompt("Enter the Item Name"))}}>Add</button>


        <ul>
            {items.map((item)=>(
                <li key={item.id}>
                    {item.name}
                    <button onClick={()=>updateItem(item.id,(prompt("Enter item Name",item.name)))}>Update</button>
                    <button onClick={()=>deleteItem(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
