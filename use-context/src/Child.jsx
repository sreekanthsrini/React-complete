// import React from 'react'

// export const Child = (props) => {
//   return (
//     <div className="box">
//         {/* Hello World!(from child)
//          */}

//        <p>  {props.data} </p>
//        <p>{props.answer}</p>
//     </div>
//   )
// }

import React, { useContext } from 'react'
// import { useContext } from 'react'
import { MessageDir, secndmessage,thirdmsg } from './Grandparent'
// import { secndmessage } from './Grandparent'

export const Child = () => {
    const value=useContext(MessageDir)
    const value1=useContext(secndmessage);
    const value2=useContext(thirdmsg);
  return (
    <div className="box">
        {/* Hello World!(from child)
         */}

       <p>  {value} </p>
       <p>{value1}</p>
       <h1>{value2}</h1>
       {/* <p>{props.answer}</p> */}
    </div>
  )
}

