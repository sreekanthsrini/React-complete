// import React from 'react'
// import { Child } from './Child'
// import { useContext } from 'react'

// export const Parent = (props) => {
//     const value=useContext();
//     const answer="hi the message from parent"
//   return (
//     <div className="box">
//         <h1>
//             hi this is Parent
//         </h1>
//         <Child data={props.data} answer={answer}/>
//     </div>

//   )
// }



import React from 'react'
import { Child } from './Child'
import { useContext } from 'react'

export const Parent = () => {
    
    const answer="hi the message from parent"
  return (
    <div className="box">
        <h1>
            hi this is Parent
        </h1>
        <Child />
    </div>

  )
}

