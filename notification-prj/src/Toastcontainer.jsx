// import React, { useState } from 'react'

// export const Toastcontainer = () => {
//     const[show,setShow]=useState(false)
//     function handle(){
//         setShow(true)

//     }

//     function close(){
//         setShow(false)
//     }
//   return (
//    <div className="container">
//    {show &&(
//      <div className="toast-container">
//      <div className="toast">
//          This is the sample message to check <span onClick={close}>&times;</span>

//      </div>

//  </div>
//    )}
//     <div className="button-container">
//         <button onClick={handle} className='success'>Success</button>
//         <button className="warning">Warning</button>
//         <button className='info'>Info</button>
//         <button className='danger'>Danger</button>

//     </div>

//    </div>
//   )
// }








import React, { useRef, useState } from 'react'

export const Toastcontainer = () => {
    const[toasts,setToasts]=useState([])
    const timeRef=useRef({});


    function handle(message,type){
        const id=new Date().getTime();
        const newToasts=[...toasts,{id,message,type}];
        setToasts(newToasts);
        timeRef.current[id]=setTimeout(()=>close(id),5000);
      

    }

    function close(id){
        clearTimeout(timeRef.current[id])
        delete timeRef.current[id]
        setToasts((prevToasts)=>{
            const filtertoast=prevToasts.filter((toast)=>{
                return toast.id !==id;
            });
            return filtertoast;
        })
       
    }
  return (
   <div className="container">
    <div className="toast-container">
    {toasts.map((toast)=>(
      
      <div className={`toast ${toast.type}`} key={toast.id}>
             {toast.message} <span onClick={()=>close(toast.id)}>&times;</span>
   
        </div>
         ))}
    </div>
    <div className="button-container">
        <button onClick={()=>handle("success message","success")} className='success'>Success</button>
        <button  onClick={()=>handle("warning message","warning")} className='warning'>Warning</button>
        <button  onClick={()=>handle("info message","info")} className='info'>Info</button>
        <button  onClick={()=>handle("danger message","danger")} className='danger'>Danger</button>

    </div>

   </div>
  )
}



 
   
     
        
         

    

 

   