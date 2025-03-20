// import React from 'react'
// import { Parent } from './parent';

// export const Grandparent = () => {
//     const data="hello  the message from grand parent";
//   return (
//     <div className="box">
//         <h1>
//             this is Grandparents
//             <Parent data={data}/>
//         </h1>
//     </div>
//   )
// }



// how to implement use-context





import React, { createContext } from 'react'
import { Parent } from './parent';
import { Child } from './Child';


// using export iam creating the context

export const MessageDir= createContext();
export const secndmessage=createContext();
export const thirdmsg=createContext();

export const Grandparent = () => {
    const data="hello  the message from grand parent";
    const second="hello direct can work?"
    const third="for only practice";
  return (
    <div className="box">
        <h1>
            this is Grandparents

           <MessageDir.Provider value={data}>
            <Parent/>

            </MessageDir.Provider> 

            <secndmessage.Provider value={second}>
                <Child/>
            </secndmessage.Provider>


            <thirdmsg.Provider value={third} >
              <Child/>

            </thirdmsg.Provider>

          
        </h1>
    </div>
  )
}
